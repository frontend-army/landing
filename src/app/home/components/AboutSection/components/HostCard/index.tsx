"use client";

import { Host } from "@/types/host";
import Image from "next/image";
import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialsIconMap } from "./utils";
import { useAnimateOnScroll } from "@/hooks/useRevealOnScroll";

interface Props {
  host: Host
};

export const HostCard: React.FC<Props> = ({host}) => {
  const {ref, isVisible} = useAnimateOnScroll({});
  return (
    <div className={`expand-reveal ${isVisible ? "expand-active" : ""}`}>
      <div ref={ref} className={`${styles.host} expand-reveal-content`}>
        <Image className={styles.hostAvatar} src={host.avatar} alt={`${host.name}'s profile picture`} width={240} height={300} />
        <div className={styles.hostInfo}>
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
      </div>
    </div>
  );
} 
