import Image from "next/image";
import argentinaFlag from "@/assets/argentina_flag.svg?url";
import colombiaFlag from "@/assets/colombia_flag.svg?url";
import spainFlag from "@/assets/spain_flag.svg?url";
import styles from "./styles.module.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { getNextEpisode } from "./utils/getNextPodcastDate";
import { Countdown } from "./components/Countdown";

export const UpcomingEpisodeCountdown: React.FC = () => {
  const nextPodcastDate = getNextEpisode(new Date()).date;

  return (
    <div className={styles.upcomingEpisodeContainer}>
      <h3 className={styles.upcomingEpisodeTitle}>Próximo capítulo</h3>
      <div className={styles.upcomingEpisodeSchedule}>
        <p className="capitalize">
          {format(new Date(nextPodcastDate), "EEEE d 'de' MMMM", {
            locale: es,
          })}
        </p>
        <div className="flex gap-2">
          <span className="flex gap-1 items-center">
            18hs <Image width={20} src={argentinaFlag} alt="Argentina" />
          </span>
          <span className="flex gap-1 items-center">
            16hs <Image width={20} src={colombiaFlag} alt="Colombia" />
          </span>
          <span className="flex gap-1 items-center">
            22hs <Image width={20} src={spainFlag} alt="España" />
          </span>
        </div>
      </div>
      <div className={styles.upcomingEpisodeCountdown}>
        <Countdown ms={nextPodcastDate.getTime()} />
      </div>
    </div>
  );
};
