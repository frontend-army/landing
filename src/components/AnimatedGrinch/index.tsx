"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

export const AnimatedGrinch: React.FC = () => {
  const grinchRef = useRef<HTMLDivElement>(null);
  const [bgPosition, setBgPosition] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const grinch = grinchRef.current;
    if (!grinch) return;

    const onGrinchHover = () => {
      setIsHovering(true);
    };

    const onGrinchUnhover = () => {
      setIsHovering(false);
    };

    grinch.addEventListener("mouseenter", onGrinchHover);
    grinch.addEventListener("mouseleave", onGrinchUnhover);

    return () => {
      grinch.removeEventListener("mouseenter", onGrinchHover);
      grinch.removeEventListener("mouseleave", onGrinchUnhover);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovering) {
        setBgPosition((prev) => {
          const next = prev - 100;
          return next < -3700 ? -3700 : next;
        });
      } else {
        setBgPosition((prev) => {
          const next = prev + 100;
          return next > 0 ? 0 : next;
        });
      }
    }, 27);

    return () => {
      clearInterval(interval);
    };
  }, [isHovering]);

  return (
    <div
      ref={grinchRef}
      className={styles.grinch}
      style={{ "--bg-position-x": bgPosition }}
    />
  );
};
