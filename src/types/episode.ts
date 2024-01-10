interface EpisodeSource {
  name: string;
  url: string;
}

export interface Episode {
  id: string;
  title: string;
  description: string;
  sources: Array<EpisodeSource>;
}
