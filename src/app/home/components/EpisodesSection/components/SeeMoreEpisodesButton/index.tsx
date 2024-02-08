"use client"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import styles from './styles.module.css';
import ChevronRight from "@/assets/chevron-right.svg";
import Link from 'next/link';

export const SeeMoreEpisodesButton: React.FC = () => {
  const buttonRef = useRef(null);
  const buttonObserver = useIntersectionObserver(buttonRef, {
    threshold: 1,
    rootMargin: '0px 0px -50px 0px',
  });

  const isButtonVisible = !!buttonObserver?.isIntersecting;

  return (
    <Link ref={buttonRef} className={`self-end ${isButtonVisible ? styles.postsSeeMore : 'opacity-0'}`} href="/episodes">
      <span className={styles.postsSeeMoreContent}>
          Ver mas capítulos
          <ChevronRight className={styles.postsSeeMoreArrow} width={24} height={24} alt="" />
      </span>
    </Link>
  );
} 
