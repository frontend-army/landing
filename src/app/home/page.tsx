import Image from "next/image";
import styles from "./styles.module.css";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { EpisodesSection } from "./EpisodesSection";

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
