"use client"

import { useMemo } from "react";
import styles from './styles.module.css';
import { useAnimateOnScroll } from "@/hooks/useRevealOnScroll";

type SectionTitleVariants = 'white';

interface Props {
  className?: string;
  children: string;
  variant?: SectionTitleVariants;
}

export const SectionTitle: React.FC<Props> = ({children, className = '', variant}) => {
  const {ref, isVisible} = useAnimateOnScroll({});

  const formattedChildren = useMemo(() => {
    const letters = children.split('');
    const letterPositions = new Array(letters.length).fill('').map((_, index) => index);

    for (let i = letterPositions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letterPositions[i], letterPositions[j]] = [letterPositions[j], letterPositions[i]];
    }

    return letters.map((char, index) => (
      <span
        suppressHydrationWarning
        key={index}
        className={styles.sectionTitleLetter}
        style={{
          '--reveal-delay': `calc(${letterPositions[index]} * 0.1s + 0.2s)`,
          '--should-flicker': Math.random() > 0.7 ? '0.3s' : '0s'
        }}
      >
        {char}
      </span>
    ))
  }, [children])

  return (
    <h2 ref={ref} className={`${styles.title1} ${className} ${variant ? styles.white : ''} ${isVisible ? styles.titleVisible : 'opacity-0'}`}>{formattedChildren}</h2>
  );
} 
