'use client';

import styles from './styles.module.scss';
import { TypewriterParagraph } from '@/components/TypewriterParagraph';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <h1 className={`${styles.heroTitle} glitch`} data-text="Frontend Army">
        Frontend Army
      </h1>
      <TypewriterParagraph className={styles.heroDescription}>
        Sumate a nuestro podcast y comunidad para explorar las tendencias en desarrollo web y compartir tu experiencia en el mundo Frontend.
      </TypewriterParagraph>
    </section>
  );
} 
