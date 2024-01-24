import { Episode } from "@/types/episode";
import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sourceIconMap } from "./utils";

interface Props {
  episode: Episode
};

export const EpisodeCard: React.FC<Props> = ({episode}) => {
  return (
    <div className={styles.episode}>
      <h4 className={styles.episodeNumber}>Capitulo {episode.id}:</h4>
      <h3 className={styles.episodeTitle}>{episode.title}</h3>
      <p className={styles.episodeDescription}>{episode.description}</p>
      <div className={styles.episodeLinks}>
            <a className={`${styles.episodeLink} ${styles.youtube}`} href={episode.youtube_url}>
              <FontAwesomeIcon icon={sourceIconMap.youtube} />
              <span className={styles.episodeSourceName}>Youtube</span>
            </a>
            <a className={`${styles.episodeLink} ${styles.spotify}`} href={episode.spotify_url}>
              <FontAwesomeIcon icon={sourceIconMap.spotify} />
              <span className={styles.episodeSourceName}>Spotify</span>
            </a>
      </div>
    </div>
  );
} 
