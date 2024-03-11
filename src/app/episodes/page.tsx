import { DotBackground } from "@/components/DotBackground";
import { FloatingHeader } from "@/components/FloatingHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { getEpisodes } from "@/services/episodes";
import styles from "./styles.module.css";
import { EpisodesList } from "./components/EpisodesList";
import { TypewriterParagraph } from '@/components/TypewriterParagraph';

export const revalidate = 3600;

export const metadata = {
  title: "Episodios",
  description: "Todos los episodios de la serie",
};

export default async function Episodes() {
  const episodes = await getEpisodes(9, 0);
  return (
    <>
    <FloatingHeader />
    <DotBackground />
    <main className={`floating-header-separation ${styles.episodesContainer}`}>
      <SectionTitle>Todos los capitulos</SectionTitle>
      {episodes && (
        <EpisodesList initialEpisodes={episodes} />
      )}
    </main>
    </>
  );
};
