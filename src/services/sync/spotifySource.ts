import { extractFirstParagraph, parseChapterTitle } from "./parser";
import { SpotifyEpisodeData } from "./types";

const DEFAULT_SPOTIFY_SHOW_ID = "0sN5AI1KvzNm46qhIPqppT";

interface SpotifyEpisodeItem {
  name?: string;
  description?: string;
  external_urls?: {
    spotify?: string;
  };
}

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
  const items: SpotifyEpisodeItem[] = episodesData.items || [];

  for (const item of items) {
    const rawName = item.name || "";
    const chapter = parseChapterTitle(rawName);
    if (!chapter) {
      continue;
    }

    const spotifyUrl = item.external_urls?.spotify;
    if (spotifyUrl) {
      spotifyMap.set(chapter.episodeId, {
        id: chapter.episodeId,
        title: chapter.cleanTitle,
        description: extractFirstParagraph(item.description || ""),
        spotify_url: spotifyUrl,
      });
    }
  }

  return spotifyMap;
};
