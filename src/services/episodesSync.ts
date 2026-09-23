import { getSupabaseAdmin } from "@/utils/supabaseAdmin";
import { Episode } from "@/types/episode";

export interface SyncResult {
  success: boolean;
  inserted: string[];
  updated: string[];
  skipped: string[];
  errors: string[];
}

export interface ParsedVideo {
  id: string; // Episode number as string, e.g. "66"
  videoId: string;
  title: string;
  description: string;
  url: string;
}

export interface SpotifyEpisodeData {
  id: string; // Episode number as string, e.g. "66"
  title: string;
  description: string;
  spotify_url: string;
}

const DEFAULT_YOUTUBE_PLAYLIST_ID = "PL0fND21Cgj6NrQHGP4ZD3kqosEXHtzAvk";
const DEFAULT_YOUTUBE_CHANNEL_ID = "UCZ-rzg0Rya_le0GtTH3piPQ";
const DEFAULT_SPOTIFY_SHOW_ID = "0sN5AI1KvzNm46qhIPqppT";

const decodeXmlEntities = (text: string): string => {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
};

export const extractFirstParagraph = (text: string): string => {
  if (!text) return "";
  const decoded = decodeXmlEntities(text);
  // Split on double newlines / blank lines
  const paragraphs = decoded.split(/\r?\n\s*\r?\n/);
  return (paragraphs[0] || "").trim();
};

export const parseYouTubePlaylistRss = (xml: string): ParsedVideo[] => {
  const entries: ParsedVideo[] = [];
  const entryMatches = xml.match(/<entry>[\s\S]*?<\/entry>/g);

  if (!entryMatches) {
    return entries;
  }

  for (const entryXml of entryMatches) {
    const videoIdMatch = entryXml.match(/<yt:videoId>([\s\S]*?)<\/yt:videoId>/);
    const titleMatch = entryXml.match(/<title>([\s\S]*?)<\/title>/);
    const descMatch = entryXml.match(/<media:description>([\s\S]*?)<\/media:description>/);

    if (!videoIdMatch || !titleMatch) {
      continue;
    }

    const videoId = videoIdMatch[1].trim();
    const rawTitle = decodeXmlEntities(titleMatch[1].trim());
    const rawDesc = descMatch ? descMatch[1] : "";

    // Match "Capítulo 4: Titulo" or "Capítulo 4 - Titulo"
    const chapterMatch = rawTitle.match(/Cap[ií]tulo\s+(\d+)(?:\s*[:\-]\s*(.+))?/i);
    if (!chapterMatch) {
      continue;
    }

    const episodeId = chapterMatch[1];
    const cleanTitle = chapterMatch[2] ? chapterMatch[2].trim() : rawTitle;
    const cleanDescription = extractFirstParagraph(rawDesc);

    entries.push({
      id: episodeId,
      videoId,
      title: cleanTitle,
      description: cleanDescription,
      url: `https://www.youtube.com/watch?v=${videoId}`,
    });
  }

  return entries;
};

export const fetchYouTubePlaylistEpisodes = async (
  sourceId?: string
): Promise<ParsedVideo[]> => {
  // If a playlist ID is provided or configured in env, use it. Otherwise, default to Channel RSS (newest first).
  const playlistId = sourceId || process.env.YOUTUBE_PLAYLIST_ID;
  const channelId = process.env.YOUTUBE_CHANNEL_ID || DEFAULT_YOUTUBE_CHANNEL_ID;

  const url = playlistId
    ? `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`
    : `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "FrontendArmy-SyncBot/1.0",
    },
    // Next.js caching bypass for fresh sync
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch YouTube RSS feed: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  return parseYouTubePlaylistRss(xml);
};

export const fetchSpotifyEpisodes = async (
  showId: string = process.env.SPOTIFY_SHOW_ID || DEFAULT_SPOTIFY_SHOW_ID
): Promise<Map<string, SpotifyEpisodeData>> => {
  const spotifyMap = new Map<string, SpotifyEpisodeData>();
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.warn("Spotify credentials missing (SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET). Skipping Spotify fetch.");
    return spotifyMap;
  }

  const credentials = btoa(`${clientId}:${clientSecret}`);
  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${credentials}`,
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  if (!tokenResponse.ok) {
    console.error(`Failed to authenticate with Spotify API: ${tokenResponse.status} ${tokenResponse.statusText}`);
    return spotifyMap;
  }

  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  const episodesResponse = await fetch(
    `https://api.spotify.com/v1/shows/${showId}/episodes?limit=25`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    }
  );

  if (!episodesResponse.ok) {
    console.error(`Failed to fetch Spotify episodes: ${episodesResponse.status} ${episodesResponse.statusText}`);
    return spotifyMap;
  }

  const episodesData = await episodesResponse.json();
  const items = episodesData.items || [];

  for (const item of items) {
    const rawName = item.name || "";
    const chapterMatch = rawName.match(/Cap[ií]tulo\s+(\d+)(?:\s*[:\-]\s*(.+))?/i);
    if (!chapterMatch) {
      continue;
    }

    const episodeId = chapterMatch[1];
    const cleanTitle = chapterMatch[2] ? chapterMatch[2].trim() : rawName;
    const spotifyUrl = item.external_urls?.spotify;

    if (spotifyUrl) {
      spotifyMap.set(episodeId, {
        id: episodeId,
        title: cleanTitle,
        description: extractFirstParagraph(item.description || ""),
        spotify_url: spotifyUrl,
      });
    }
  }

  return spotifyMap;
};

export interface SyncOptions {
  dryRun?: boolean;
}

export const syncEpisodes = async (options: SyncOptions = {}): Promise<SyncResult> => {
  const isDryRun = Boolean(options.dryRun);
  const result: SyncResult = {
    success: true,
    inserted: [],
    updated: [],
    skipped: [],
    errors: [],
  };

  const supabaseAdmin = getSupabaseAdmin();

  // 1. Fetch episodes from both sources
  let youtubeVideos: ParsedVideo[] = [];
  try {
    youtubeVideos = await fetchYouTubePlaylistEpisodes();
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    result.errors.push(`YouTube fetch error: ${msg}`);
  }

  let spotifyEpisodes = new Map<string, SpotifyEpisodeData>();
  try {
    spotifyEpisodes = await fetchSpotifyEpisodes();
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    result.errors.push(`Spotify fetch error: ${msg}`);
  }

  // 2. Fetch existing episodes from Supabase
  const { data: existingEpisodes, error: dbError } = await supabaseAdmin
    .from("episodes")
    .select("*")
    .returns<Episode[]>();

  if (dbError) {
    result.success = false;
    result.errors.push(`Supabase select error: ${dbError.message}`);
    return result;
  }

  const existingMap = new Map<string, Episode>();
  for (const ep of existingEpisodes || []) {
    existingMap.set(ep.id.toString(), ep);
  }

  // 3. Collect all distinct episode IDs found from either source
  const allEpisodeIds = new Set<string>([
    ...youtubeVideos.map((v) => v.id),
    ...Array.from(spotifyEpisodes.keys()),
  ]);

  const youtubeMap = new Map<string, ParsedVideo>(
    youtubeVideos.map((v) => [v.id, v])
  );

  // 4. Process each episode with Fill-Missing strategy
  for (const episodeId of Array.from(allEpisodeIds)) {
    const yt = youtubeMap.get(episodeId);
    const sp = spotifyEpisodes.get(episodeId);
    const existing = existingMap.get(episodeId);

    const targetTitle = yt?.title || sp?.title || `Capítulo ${episodeId}`;
    const targetDesc = yt?.description || sp?.description || "";
    const targetYoutubeUrl = yt?.url || null;
    const targetSpotifyUrl = sp?.spotify_url || null;

    if (!existing) {
      if (isDryRun) {
        result.inserted.push(`${episodeId} (simulated)`);
      } else {
        const { error: insertError } = await supabaseAdmin.from("episodes").insert({
          id: episodeId,
          title: targetTitle,
          description: targetDesc,
          youtube_url: targetYoutubeUrl,
          spotify_url: targetSpotifyUrl,
        });

        if (insertError) {
          result.errors.push(`Error inserting episode ${episodeId}: ${insertError.message}`);
        } else {
          result.inserted.push(episodeId);
        }
      }
    } else {
      // Episode already exists. Check if any missing URL can be filled.
      // NEVER overwrite existing title or description to respect manual edits.
      const updates: Partial<Episode> = {};

      if (!existing.spotify_url && targetSpotifyUrl) {
        updates.spotify_url = targetSpotifyUrl;
      }

      if (!existing.youtube_url && targetYoutubeUrl) {
        updates.youtube_url = targetYoutubeUrl;
      }

      if (Object.keys(updates).length > 0) {
        if (isDryRun) {
          result.updated.push(`${episodeId} (simulated updates: ${Object.keys(updates).join(", ")})`);
        } else {
          const { error: updateError } = await supabaseAdmin
            .from("episodes")
            .update(updates)
            .eq("id", episodeId);

          if (updateError) {
            result.errors.push(`Error updating episode ${episodeId}: ${updateError.message}`);
          } else {
            result.updated.push(episodeId);
          }
        }
      } else {
        result.skipped.push(episodeId);
      }
    }
  }

  return result;
};
