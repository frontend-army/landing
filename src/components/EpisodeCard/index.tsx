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
        {
          episode.sources.map((source) => (
            <a key={source.url} className={`${styles.episodeLink} ${styles[source.name.toLocaleLowerCase()]}`} href={source.url}>
              <FontAwesomeIcon icon={sourceIconMap[source.name.toLocaleLowerCase()]} />
              <i className={`fa-brands fa-${source.name.toLowerCase()}`}></i>
              <span className={styles.episodeSourceName}>{source.name}</span>
            </a>
          ))
        }
      </div>
    </div>
  );
} 
