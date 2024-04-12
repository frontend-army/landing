interface EpisodeSource {
  name: string;
  url: string;
}

export interface Episode {
  created_at: string;
  id: string;
  title: string;
  description: string;
  youtube_url: string;
  spotify_url: string;
}
