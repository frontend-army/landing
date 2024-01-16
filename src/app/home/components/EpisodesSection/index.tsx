import { EpisodeCard } from "@/components/EpisodeCard";
import { getEpisodes } from "@/services/episodes";

export const EpisodesSection: React.FC = async () => {
  const episodes = await getEpisodes(4);
  return (

    <div className="grid grid-cols-2 gap-6 max-w-[1024px] mx-auto">
      {episodes?.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
} 
