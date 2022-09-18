import styles from './styles.module.scss';

function Home() {
  return (
    <main className={styles.main}>
      <section id="introduction" className={styles.section}>
        Introduccion
      </section>
      <section id="vision" className={styles.section}>
        Vision
      </section>
      <section id="us" className={styles.section}>
        Quienes somos
      </section>
      <section id="videos" className={styles.section}>
        Videos
      </section>
      <section id="community" className={styles.section}>
        Community
      </section>
    </main>
  );
}

export default Home;
