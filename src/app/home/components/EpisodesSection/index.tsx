import { getEpisodes } from "@/services/episodes";
import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { EpisodeCard } from "@/components/EpisodeCard";

export const EpisodesSection: React.FC = async () => {
  const episodes = await getEpisodes(6);
  return (
    <section className={`flex flex-col items-center gap-20 ${styles.episodesSection}`}>
      <h2 className="title-1">Podcast</h2>
      <div className={styles.episodesContainer}>
        {episodes?.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
      <button className="button shiny-glowing-border">Ver todos los capítulos<FontAwesomeIcon icon={faArrowRight} /></button>
    </section>
  );
} 
