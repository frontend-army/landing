"use client";

import { Episode } from "@/types/episode";
import { EpisodeCard } from "@/components/EpisodeCard";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { getEpisodes } from "@/services/episodes";

interface Props {
  initialEpisodes: Array<Episode>
}

export const EpisodesList: React.FC<Props> = ({initialEpisodes}) => {
  const [episodes, setEpisodes] = useState<Array<Episode>>(initialEpisodes);
  const [page, setPage] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);
  const loadingTriggerRef = useRef(null);
  const loadingTriggerObserver = useIntersectionObserver(loadingTriggerRef, {});

  useEffect(() => {
    const loadMoreEpisodes = async () => {
      const episodesPage = await getEpisodes(9, page + 1);
      setPage((currentPage) => currentPage + 1);
      if (episodesPage?.length) {
        setEpisodes((currentEpisodes) => ([
          ...currentEpisodes,
          ...episodesPage
        ]));
      } else {
        setReachedEnd(true);
      }
    }

    if (loadingTriggerObserver?.isIntersecting) {
      console.log("triggered");
      loadMoreEpisodes();
    }
  }, [loadingTriggerObserver?.isIntersecting, page])

  return (
    <div className={styles.episodesContainer}>
      {episodes?.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
      {
        !reachedEnd && new Array(6).fill('').map((_, index) => (
          <div key={index + 100} className="episode-skeleton" ref={index === 1 ? loadingTriggerRef : undefined} />
        ))
      }
    </div>
  );
} 
