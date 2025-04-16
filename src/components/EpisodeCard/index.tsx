"use client";

import { Episode } from "@/types/episode";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sourceIconMap } from "./utils";
import { MouseEvent, useCallback, useRef } from "react";
import { useAnimateOnScroll } from "@/hooks/useRevealOnScroll";

interface Props {
  episode: Episode;
}

export const EpisodeCard: React.FC<Props> = ({ episode }) => {
  const {ref, isVisible} = useAnimateOnScroll({portionOfVisibility: 0.5});
  const youtubeRef = useRef<HTMLAnchorElement>(null);
  const spotifyRef = useRef<HTMLAnchorElement>(null);

  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.classList.add(styles.buttonGlitch);
  };

  const handleMouseEnter = useCallback(() => {
    if (!youtubeRef.current || !spotifyRef.current) {
      return;
    }
    youtubeRef.current.classList.remove(styles.buttonGlitch);
    spotifyRef.current.classList.remove(styles.buttonGlitch);
  }, []);

  return (
    <div ref={ref} className={`${styles.episode} ${isVisible ? styles.isActive : ''}`}>
      <p className={styles.episodeNumber}>Capitulo {episode.id}:</p>
        <h3 className={styles.episodeTitle}>{episode.title}</h3>
      <p className={styles.episodeDescription}>{episode.description}</p>
      <div className={styles.episodeLinks}>
        <a
          className={`${styles.episodeLink} ${styles.youtube}`}
          ref={youtubeRef}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          href={episode.youtube_url}
          target="_blank"
          aria-label={`Link to episode ${episode.id} on Youtube`}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={sourceIconMap.youtube} />
          <span className={styles.episodeSourceName}>Youtube</span>
        </a>
        <a
          className={`${styles.episodeLink} ${styles.spotify}`}
          ref={spotifyRef}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          href={episode.spotify_url}
          aria-label={`Link to episode ${episode.id} on Spotify`}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={sourceIconMap.spotify} />
          <span className={styles.episodeSourceName}>Spotify</span>
        </a>
      </div>
    </div>
  );
};
