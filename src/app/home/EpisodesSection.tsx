import { EpisodeCard } from "@/components/EpisodeCard";
import { Episode } from "@/types/episode";
import { getEpisodes } from "@/services/episodes";

interface Props {}

export const EpisodesSection: React.FC<Props> = async () => {
  const episodes = await getEpisodes();
  return (
    <div className="flex gap-2">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};
