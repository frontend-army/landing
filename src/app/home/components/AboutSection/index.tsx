import { HostCard } from "./components/HostCard";
import { hosts } from "@/utils/hosts";
import style from './styles.module.css';

interface Props {
}

export const AboutSection: React.FC<Props> = () => {
  return (
    <section className={`flex flex-col items-center gap-20 p-20 ${style.hostsSection}`}>
      <div className={style.aboutBg} />
      <h2 className="title-1">¿Quienes Somos?</h2>
      <div className={style.hostsContainer}>
        {hosts.map((host) => (<HostCard key={host.name} host={host} />))
        }
      </div>
    </section>
  );
} 
