import { HostCard } from "./components/HostCard";
import { hosts } from "@/utils/hosts";
import styles from './styles.module.css';

interface Props {
}

export const AboutSection: React.FC<Props> = () => {
  return (
    <section className={`flex flex-col items-center gap-20 p-20 ${styles.hostsSection}`}>
      <h2 className="title-1 white">¿Quienes Somos?</h2>
      <div className={styles.hostsContainer}>
        {hosts.map((host) => (<HostCard key={host.name} host={host} />))
        }
      </div>
    </section>
  );
} 
