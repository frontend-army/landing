"use client"

import FeaLogo from '@/assets/fea_logo.png';
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export const Navbar: React.FC = () => {
  const hamburguerInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const uncheckHamburguerHandler = (event: UIEvent) => {
      if (hamburguerInputRef.current && document.body.clientWidth > 900) {
        hamburguerInputRef.current.checked = false;
      }
    }

    window.addEventListener("resize", uncheckHamburguerHandler);

    return () =>{
      window.removeEventListener("resize", uncheckHamburguerHandler)
    }
  }, []);

  return (
    <header className={styles.header}>
      <Image src={FeaLogo} alt="" width={60} height={60} />
      <nav className={styles.navbar}>
        <Link href="/episodes" className={styles.navLink}>Podcast</Link>
        <Link href="https://www.google.com" className={styles.navLink}>Blog</Link>
        <Link href="https://www.google.com" className={styles.navLink}>Nosotros</Link>
      </nav>
      <button type='button' className={styles.hamburguer}>
        <input type="checkbox" className={styles.hamburguerInput} ref={hamburguerInputRef} />
      </button>
    </header>
  );
} 
