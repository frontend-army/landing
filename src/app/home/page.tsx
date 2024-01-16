import Image from 'next/image';
import styles from './styles.module.css';
import { AboutSection } from './components/AboutSection';
import { HeroSection } from './components/HeroSection';
import { EpisodesSection } from './components/EpisodesSection';

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EpisodesSection />
      {/* <section>blog</section> */}
    </main>
  );
}
