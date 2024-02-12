"use client";

import FeaLogo from "@/assets/fea_logo.png";
import Image from "next/image";
import styles from "./styles.module.css";
import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const hamburguerInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const uncheckHamburguerHandler = (event: UIEvent) => {
      if (hamburguerInputRef.current && document.body.clientWidth > 900) {
        hamburguerInputRef.current.checked = false;
      }
    };

    window.addEventListener("resize", uncheckHamburguerHandler);

    return () => {
      window.removeEventListener("resize", uncheckHamburguerHandler);
    };
  }, []);

  const handleClick = useCallback(
    (id: string) => () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );
  return (
    <header className={styles.header}>
      <Link className={styles.homeLink} href="/">
        <Image src={FeaLogo} alt="" width={60} height={60} />
      </Link>
      {pathname === "/home" && (
        <>
          <nav className={styles.navbar}>
            <button
              onClick={handleClick("e pisodes")}
              className={styles.navLink}
            >
              Podcast
            </button>
            <button onClick={handleClick("blog")} className={styles.navLink}>
              Blog
            </button>
            <button onClick={handleClick("about")} className={styles.navLink}>
              Nosotros
            </button>
          </nav>
          <button type="button" className={styles.hamburguer}>
            <input
              type="checkbox"
              className={styles.hamburguerInput}
              ref={hamburguerInputRef}
            />
          </button>
        </>
      )}
    </header>
  );
};
