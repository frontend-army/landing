import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import FeaLogo from "@/assets/fea_logo.png";
import argentinaFlag from "@/assets/argentina_flag.svg?url";
import colombiaFlag from "@/assets/colombia_flag.svg?url";
import spainFlag from "@/assets/spain_flag.svg?url";
import styles from "./styles.module.css";
import { socials } from "@/utils/socials";
import { getTimezonedHour } from "@/utils/date";

export const Footer: React.FC = () => {
  const argentinaStreamTime = getTimezonedHour(21, "AR");
  const colombiaStreamTime = getTimezonedHour(21, "CO");
  const spainStreamTime = getTimezonedHour(21, "ES");

  return (
    <footer className={styles.footer}>
      <Image
        className={styles.logo}
        src={FeaLogo}
        width="60"
        height="60"
        alt="Frontend Army Logo"
      />
      <div className={styles.footerInfo}>
        <div
          className={`${styles.footerInfoColumn} ${styles.footerGeneralInfoSection}`}
        >
          <p className={styles.footerText}>
            Frontend Army® 2025, todos los derechos reservados.
          </p>
          <p className={`${styles.footerText} mb-auto`}>
            Hecho recontra manija en Argentina&nbsp;⭐⭐⭐
          </p>
        </div>
        <div
          className={`${styles.footerInfoColumn} ${styles.footerSocialsSection}`}
        >
          <h4 className={styles.footerTitle}>Encontranos en:</h4>
          <ul className={styles.footerSocialItems}>
            {socials.map((social) => (
              <li key={social.url} className={styles.footerSocialItem}>
                <a
                  href={social.url}
                  aria-label={`Link to Frontend Army's ${social.name} profile`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`${styles.footerInfoColumn} ${styles.footerScheduleSection}`}
        >
          <h5 className={styles.footerTitle}>Horarios de streaming:</h5>
          <div className={styles.footerStreamingSession}>
            <h5 className={styles.footerScheduleTitle}>
              Lunes: Live Coding, Noticias y Podcast
            </h5>
            <p className={styles.footerSchedule}>
              <span className={styles.footerScheduleEntry}>
                {argentinaStreamTime}hs{" "}
                <Image width={20} src={argentinaFlag} alt="Argentina" />
              </span>
              <span className={styles.footerScheduleEntry}>
                {colombiaStreamTime}hs{" "}
                <Image width={20} src={colombiaFlag} alt="Colombia" />
              </span>
              <span className={styles.footerScheduleEntry}>
                {spainStreamTime}hs
                <Image width={20} src={spainFlag} alt="España" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
