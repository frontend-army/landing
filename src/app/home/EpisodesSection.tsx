import { EpisodeCard } from "@/components/EpisodeCard";
import { getEpisodes } from "@/services/episodes";

interface Props {}

export const EpisodesSection: React.FC<Props> = async () => {
  const episodes = await getEpisodes();
  return (
    <div className="grid grid-cols-4 gap-2">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};
