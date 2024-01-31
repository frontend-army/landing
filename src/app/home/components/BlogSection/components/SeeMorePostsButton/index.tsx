"use client"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import styles from './styles.module.css';
import ChevronRight from "@/assets/chevron-right.svg";
import Image from "next/image";


export const SeeMorePostsButton: React.FC = () => {
  const buttonRef = useRef(null);
  const buttonObserver = useIntersectionObserver(buttonRef, {
    threshold: 1,
    // freezeOnceVisible: true,
    rootMargin: '0px 0px -50px 0px',
  });

  const isButtonVisible = !!buttonObserver?.isIntersecting;

  return (
    <button ref={buttonRef} className={`self-end ${isButtonVisible ? styles.postsSeeMore : 'opacity-0'}`} type="button">
      <span className={styles.postsSeeMoreContent}>
          Ver mas Posts
          <ChevronRight className={styles.postsSeeMoreArrow} width={24} height={24} alt="" />
      </span>
    </button>
  );
} 
