import { getEpisodes } from "@/services/episodes";
import styles from './styles.module.css';
import { EpisodeCard } from "@/components/EpisodeCard";
import { SeeMoreEpisodesButton } from "./components/SeeMoreEpisodesButton";
import { SectionTitle } from "@/components/SectionTitle";

export const revalidate = 3600;

export const EpisodesSection: React.FC = async () => {
  const episodes = await getEpisodes(6);
  return (
    <section className={`flex flex-col items-center gap-20 ${styles.episodesSection}`}>
      <SectionTitle>Podcast</SectionTitle>
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
