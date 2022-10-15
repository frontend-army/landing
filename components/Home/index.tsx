import AboutUs from '../AboutUs';
import Introduction from '../Introduction';
import WhatWeDo from '../WhatWeDo';
import styles from './styles.module.scss';

function Home() {
  return (
    <main className={styles.main}>
      <Introduction />
      <WhatWeDo />
      <AboutUs />
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
