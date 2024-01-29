import { EpisodeCard } from "@/components/EpisodeCard";
import { getEpisodes } from "@/services/episodes";

export const revalidate = 3600;

export default async function Episodes() {
  const episodes = await getEpisodes();
  return (
    <div className="grid grid-cols-2 gap-6 max-w-[1024px] mx-auto">
      {episodes?.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};
