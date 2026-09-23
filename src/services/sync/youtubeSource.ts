import { parseYouTubePlaylistRss } from "./parser";
import { ParsedVideo } from "./types";

const DEFAULT_YOUTUBE_CHANNEL_ID = "UCZ-rzg0Rya_le0GtTH3piPQ";

export const fetchYouTubePlaylistEpisodes = async (): Promise<ParsedVideo[]> => {
  const playlistId = process.env.YOUTUBE_PLAYLIST_ID;
  const channelId = process.env.YOUTUBE_CHANNEL_ID || DEFAULT_YOUTUBE_CHANNEL_ID;

  const url = playlistId
    ? `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`
    : `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "FrontendArmy-SyncBot/1.0",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch YouTube RSS feed: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  return parseYouTubePlaylistRss(xml);
};
