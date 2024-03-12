import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import FeaLogo from "@/assets/fea_logo.png";
import argentinaFlag from "@/assets/argentina_flag.svg?url";
import colombiaFlag from "@/assets/colombia_flag.svg?url";
import spainFlag from "@/assets/spain_flag.svg?url";
import styles from "./styles.module.css";
import { socials } from "@/utils/socials";

export const Footer: React.FC = () => {
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
        <div className={`${styles.footerInfoColumn} ${styles.footerGeneralInfoSection}`}>
          <p className={styles.footerText}>
            Frontend Army® 2024, todos los derechos reservados.
          </p>
          <p className={`${styles.footerText} mb-auto`}>
            Hecho recontra manija en Argentina&nbsp;⭐⭐⭐
          </p>
        </div>
        <div className={`${styles.footerInfoColumn} ${styles.footerSocialsSection}`}>
          <h4 className={styles.footerTitle}>Encontranos en:</h4>
          <ul className={styles.footerSocialItems}>
            {socials.map((social) => (
              <li key={social.url} className={styles.footerSocialItem}>
                <a href={social.url}>
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.footerInfoColumn} ${styles.footerScheduleSection}`}>
          <h4 className={styles.footerTitle}>
            Horarios de streaming:
          </h4>
          <div className={styles.footerStreamingSession}>
            <h5 className={styles.footerScheduleTitle}>
              Lunes: Coding Sessions
            </h5>
            <p className={styles.footerSchedule}>
              <span className="flex gap-2 items-center">18:30hs <Image width={20} height="auto" src={argentinaFlag} alt="Argentina's Flag" /></span> -{' '}
              <span className="flex gap-2 items-center">16:30hs <Image width={20} height="auto" src={colombiaFlag} alt="Colombia's Flag" /></span> -{' '}
              <span className="flex gap-2 items-center">22:30hs <Image width={20} height="auto" src={spainFlag} alt="Spain's Flag" /></span>
            </p>
          </div>
          <div className={styles.footerStreamingSession}>
            <h5 className={styles.footerScheduleTitle}>
              Miércoles: Charlas & Podcast
            </h5>
            <p className={styles.footerSchedule}>
              <span className="flex gap-2 items-center">18:30hs <Image width={20} height="auto" src={argentinaFlag} alt="Argentina's Flag" /></span> -{' '}
              <span className="flex gap-2 items-center">16:30hs <Image width={20} height="auto" src={colombiaFlag} alt="Colombia's Flag" /></span> -{' '}
              <span className="flex gap-2 items-center">22:30hs <Image width={20} height="auto" src={spainFlag} alt="Spain's Flag" /></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
