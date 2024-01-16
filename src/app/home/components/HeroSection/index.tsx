import style from './styles.module.css';

export const HeroSection: React.FC = () => {
  return (
    <div className={style.hero}>
      <div className={style.heroBg} />
      <h1 className={`${style.heroTitle} glitch`} data-text="Frontend Army">
        Frontend Army
      </h1>
      <p className={style.heroDescription}>
        Únete a nuestra comunidad de podcast para explorar las tendencias en desarrollo web y compartir tu experiencia en el mundo Frontend con el resto.
      </p>
    </div>
  );
} 
