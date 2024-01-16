import Image from 'next/image';
import styles from './styles.module.css';
import { EpisodesSection } from './EpisodesSection';
import { AboutSection } from './components/AboutSection';
import { HeroSection } from './components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EpisodesSection />
      {/* <section>blog</section> */}
    </main>
  )
}
