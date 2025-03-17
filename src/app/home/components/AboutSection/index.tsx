"use client"

import { HostCard } from "./components/HostCard";
import { hosts } from "@/utils/hosts";
import styles from './styles.module.css';
import { SectionTitle } from "@/components/SectionTitle";
import Script from "next/script";
import { useEffect } from "react";

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
      <SectionTitle variant="white">Twitch</SectionTitle>
      <iframe
        src="https://player.twitch.tv/?frontend_army&parent=localhost"
        height="800"
        width="600"
      >
      </iframe>
    </section>
  );
} 
