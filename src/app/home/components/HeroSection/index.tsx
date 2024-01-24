import styles from './styles.module.css';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <h1 className={`${styles.heroTitle} glitch`} data-text="Frontend Army">
        Frontend Army
      </h1>
      <p className={styles.heroDescription}>
        Únete a nuestra comunidad para explorar las tendencias en desarrollo web y compartir tu experiencia en el mundo Frontend.
      </p>
    </section>
  );
} 
