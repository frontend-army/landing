import Introduction from '../Introduction';
import WhatWeDo from '../WhatWeDo';
import styles from './styles.module.scss';

function Home() {
  return (
    <main className={styles.main}>
      <Introduction />
      <WhatWeDo />
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
