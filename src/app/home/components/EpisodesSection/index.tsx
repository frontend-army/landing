import { EpisodeCard } from "@/components/EpisodeCard";
import { getEpisodes } from "@/services/episodes";
import divider from '@/assets/divider.svg';
import style from './styles.module.css';
import Image from "next/image";

export const EpisodesSection: React.FC = async () => {
  const episodes = await getEpisodes(4);
  return (
    <section className={`flex flex-col items-center gap-20 p-20 ${style.episodesSection}`}>
      <h2 className="title-1">Episodios Recientes</h2>
      {/* <Image src={divider} width="1920" height="100" alt="" className={style.episodesDivider} /> */}
      <div className="grid grid-cols-2 gap-6 max-w-[1024px] mx-auto">
        {episodes?.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
      <button className="button shiny-glowing-border">Ver todos los episodios</button>
    </section>
  );
} 
