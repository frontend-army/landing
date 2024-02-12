import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import FeaLogo from "@/assets/fea_logo.png";
import styles from "./styles.module.css";
import { socials } from "@/utils/socials";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="flex items-end w-full justify-between flex-wrap">
        <div>
          <Image
            className={styles.logo}
            src={FeaLogo}
            width="60"
            height="60"
            alt="Frontend Army Logo"
          />
          <p className={styles.footerText}>
            Frontend Army® 2024, todos los derechos reservados.
          </p>
        </div>
        <div>
          <p className={`${styles.footerText} mb-2`}>Miranos en vivo todos los:</p>
          <ul>
            <li>Lunes a las 18hs</li>
            <li>Miércoles a las 18hs</li>
          </ul>
        </div>
      </div>
      <p className={`${styles.footerText} mb-10`}>
        Hecho recontra manija en Argentina&nbsp;⭐⭐⭐
      </p>
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
    </footer>
  );
};
