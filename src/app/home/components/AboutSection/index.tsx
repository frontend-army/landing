import { HostCard } from "./components/HostCard";
import { hosts } from "@/utils/hosts";
import style from './styles.module.css';

interface Props {
}

export const AboutSection: React.FC<Props> = () => {
  return (
    <div className="flex flex-col items-center gap-16 py-16">
      <h2 className="title-1">¿Quienes Somos?</h2>
      <div className={style.hostsContainer}>
        {hosts.map((host) => (<HostCard key={host.name} host={host} />))
        }
      </div>
    </div>
  );
} 
