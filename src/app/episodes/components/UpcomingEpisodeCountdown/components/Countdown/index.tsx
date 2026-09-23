"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  ms: number;
}

export const Countdown: React.FC<Props> = ({ ms }) => {
  const [mounted, setMounted] = useState(false);
  const [msToNextEpisode, setMsToNextEpisode] = useState(0);

  useEffect(() => {
    setMounted(true);
    setMsToNextEpisode(ms - Date.now());

    const timeout = setInterval(() => {
      setMsToNextEpisode((prev) => prev - 1000);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [ms]);

  const daysToNextEpisode = Math.floor(msToNextEpisode / (1000 * 60 * 60 * 24));
  const hsToNextEpisode = Math.floor(
    (msToNextEpisode % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minsToNextEpisode = Math.floor(
    (msToNextEpisode % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secsToNextEpisode = Math.floor((msToNextEpisode % (1000 * 60)) / 1000);

  return (
    <p className={`${styles.countdown} ${!mounted ? styles.unmounted : ""}`.trim()}>
      <span className="flex flex-col items-center gap-1">
        <span
          className={styles.countdownNumber}
          style={{ "--value": daysToNextEpisode }}
        />
        <span className={styles.countdownLabel}>Días</span>
      </span>
      <span className="flex flex-col items-center gap-1">
        <span
          className={styles.countdownNumber}
          style={{ "--value": hsToNextEpisode }}
        />
        <span className={styles.countdownLabel}>Hs</span>
      </span>
      <span className="flex flex-col items-center gap-1">
        <span
          className={styles.countdownNumber}
          style={{ "--value": minsToNextEpisode }}
        />
        <span className={styles.countdownLabel}>Mins</span>
      </span>
      <span className="flex flex-col items-center gap-1">
        <span
          className={styles.countdownNumber}
          style={{ "--value": secsToNextEpisode }}
        />
        <span className={styles.countdownLabel}>Secs</span>
      </span>
    </p>
  );
};
