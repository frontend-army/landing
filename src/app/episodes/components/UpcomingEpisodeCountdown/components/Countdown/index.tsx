"use client"

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  ms: number
}

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

export const Countdown: React.FC<Props> = ({ms}) => {
  const [msToNextEpisode, setMsToNextEpisode] = useState(ms - new Date().getTime());

  useEffect(() => {
    const msTo24HsBeforeEpisode = ms - new Date().getTime() - ONE_DAY_IN_MS
    if (msToNextEpisode < ONE_DAY_IN_MS) {
      const interval = setInterval(() => {
        setMsToNextEpisode((prev) => prev - 1000);
      }, 1000);
      
      return () => {
        clearInterval(interval);
      }
    } else {
      const timeout = setTimeout(() => {
        setMsToNextEpisode((prev) => prev - msTo24HsBeforeEpisode);
      }, msTo24HsBeforeEpisode);
      
      return () => {
        clearTimeout(timeout);
      }
    }
  }, [msToNextEpisode, ms]);

  const daysToNextEpisode = Math.floor(msToNextEpisode / (1000 * 60 * 60 * 24))
  const hsToNextEpisode = Math.floor((msToNextEpisode % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minsToNextEpisode = Math.floor((msToNextEpisode % (1000 * 60 * 60)) / (1000 * 60));
  const secsToNextEpisode = Math.floor((msToNextEpisode % (1000 * 60)) / 1000);

  if (daysToNextEpisode) {
    return <div className={styles.countdown}>{daysToNextEpisode} día{daysToNextEpisode > 1 ? "s" : ""}</div>
  }

  return (
    <div className={styles.countdown}>{hsToNextEpisode}:{minsToNextEpisode}:{secsToNextEpisode}</div>
  );
} 
