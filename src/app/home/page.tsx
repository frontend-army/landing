<<<<<<< HEAD
import Image from 'next/image';
import styles from './styles.module.css';
import { EpisodesSection } from './EpisodesSection';
import { AboutSection } from './components/AboutSection';
import { HeroSection } from './components/HeroSection';
=======
import Image from "next/image";
import styles from "./styles.module.css";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { EpisodesSection } from "./EpisodesSection";
>>>>>>> 9b3547af14a04fba8273295a010b56ecd6d6e7d1

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
