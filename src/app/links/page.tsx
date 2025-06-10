import { socials } from '@/utils/socials';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './styles.module.css';
import { FloatingHeader } from '@/components/FloatingHeader';

export const metadata = {
  title: "Links",
  description: "Links to my social media profiles and other platforms.",
  images: [],
  url: "https://frontendarmy.tech/links",
  openGraph: {
    title: "Links",
    description: "Links to my social media profiles and other platforms.",
    images: [],
    url: "https://frontendarmy.tech/links"
  },
  twitter: {
    card: "summary_large_image",
    title: "Links",
    description: "Links to my social media profiles and other platforms.",
    images: [],
    url: "https://frontendarmy.tech/links"
  },
  linkedin: {
    title: "Links",
    description: "Links to my social media profiles and other platforms.",
    images: [],
    url: "https://frontendarmy.tech/links"
  }
};

export default function Links() {
  return (
    <>
      <FloatingHeader logoPosition="center" priority />
      <main className={`${styles.socialsContainer} links`}>
        {socials.map((social) => (
          <a
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link al perfil de Frontend Army en ${social.name}`}
            className={styles.socialBox}
          >
            <FontAwesomeIcon icon={social.icon} className={styles.socialIcon} />
            <p className={styles.socialLabel}>
              {social.name}
            </p>
          </a>
        ))}
      </main>
    </>
  );
}
