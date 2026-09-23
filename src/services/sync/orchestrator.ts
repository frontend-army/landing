import { getSupabaseAdmin } from "@/utils/supabaseAdmin";
import { Episode } from "@/types/episode";
import { fetchYouTubePlaylistEpisodes } from "./youtubeSource";
import { fetchSpotifyEpisodes } from "./spotifySource";
import { toErrorMessage } from "./errors";
import { ParsedVideo, SpotifyEpisodeData, SyncOptions, SyncResult } from "./types";

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
    result.errors.push(`YouTube fetch error: ${toErrorMessage(err)}`);
  }

  let spotifyEpisodes = new Map<string, SpotifyEpisodeData>();
  try {
    spotifyEpisodes = await fetchSpotifyEpisodes();
  } catch (err: unknown) {
    result.errors.push(`Spotify fetch error: ${toErrorMessage(err)}`);
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
