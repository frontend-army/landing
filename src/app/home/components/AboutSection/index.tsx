import { HostCard } from "./components/HostCard";
import { hosts } from "@/utils/hosts";
import styles from './styles.module.css';
import { SectionTitle } from "@/components/SectionTitle";

interface Props {
}

export const AboutSection: React.FC<Props> = () => {
  return (
    <section id="about" className={`flex flex-col items-center gap-20 ${styles.hostsSection}`}>
      <div className={styles.aboutBg} />
      <SectionTitle variant="white">Nosotros</SectionTitle>
      <div className={styles.hostsContainer}>
        {
          hosts.map((host) => (
            <HostCard key={host.name} host={host} />
          ))
        }
      </div>
    </section>
  );
} 
