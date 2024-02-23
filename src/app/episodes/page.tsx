import { DotBackground } from "@/components/DotBackground";
import { EpisodeCard } from "@/components/EpisodeCard";
import { FloatingHeader } from "@/components/FloatingHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { getEpisodes } from "@/services/episodes";
import styles from "./styles.module.css";

export const revalidate = 3600;

export const metadata = {
  title: "Episodios",
  description: "Todos los episodios de la serie",
};

export default async function Episodes() {
  const episodes = await getEpisodes();
  return (
    <>
    <FloatingHeader />
    <DotBackground />
    <main className={`floating-header-separation ${styles.episodeContainer}`}>
      <SectionTitle>Todos los capitulos</SectionTitle>
      <div className={styles.episodesContainer}>
        {episodes?.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </main>
    </>
  );
};
