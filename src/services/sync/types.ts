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

export interface ParsedChapter {
  episodeId: string;
  cleanTitle: string;
}

export interface SyncOptions {
  dryRun?: boolean;
}
