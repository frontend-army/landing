import { getEpisodes } from "@/services/episodes";
import styles from './styles.module.css';
import { EpisodeCard } from "@/components/EpisodeCard";
import { SeeMoreEpisodesButton } from "./components/SeeMoreEpisodesButton";

export const revalidate = 3600;

export const EpisodesSection: React.FC = async () => {
  const episodes = await getEpisodes(6);
  return (
    <section id="episodes" className={`flex flex-col items-center gap-20 ${styles.episodesSection}`}>
      <h2 className="title-1">Podcast</h2>
      <div className={styles.episodesWrapper}>
        <div className={styles.episodesContainer}>
          {episodes?.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
        <SeeMoreEpisodesButton />
      </div>
    </section>
  );
} 
