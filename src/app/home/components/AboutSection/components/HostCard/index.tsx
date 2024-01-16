import { Host } from "@/types/host";
import Image from "next/image";
import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialsIconMap } from "./utils";

interface Props {
  host: Host
};

export const HostCard: React.FC<Props> = ({host}) => {
  return (
    <div className={styles.host}>
      <Image className={styles.hostAvatar} src={host.avatar} alt={`${host.name}'s profile picture`} width={220} height={200} />
      <div className={styles.hostSocials}>
        {
          host.socials.map(social =>(
            <a key={social.url} className={styles.hostSocial} href={social.url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={socialsIconMap[social.name.toLocaleLowerCase()]} />
            </a>
          ))
        }
      </div>
      <p className={styles.hostName}>{host.name}</p>
      <p className={styles.hostDescription}>{host.description}</p>
    </div>
  );
} 
