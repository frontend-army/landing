"use client"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import styles from './styles.module.css';
import ChevronRight from "@/assets/chevron-right.svg";
import { useAnimateOnScroll } from "@/hooks/useRevealOnScroll";
import Link from "next/link";

export const SeeMoreEpisodesButton: React.FC = () => {
  const {ref: buttonRef, isVisible: isButtonVisible} = useAnimateOnScroll({});

  return (
    <Link ref={buttonRef} className={`${styles.episodesSeeMore} ${isButtonVisible ? styles.isActive : 'opacity-0'} self-end`} href="/episodes">
      <span className={styles.episodesSeeMoreContent}>
          Ver mas capítulos
          <ChevronRight className={styles.episodesSeeMoreArrow} width={24} height={24} alt="" />
      </span>
    </Link>
  );
} 
