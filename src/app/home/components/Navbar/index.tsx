"use client";

import FeaLogo from "@/assets/fea_logo.png";
import Image from "next/image";
import styles from "./styles.module.css";
import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const hamburgerInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const uncheckHamburgerHandler = (event: UIEvent) => {
      if (hamburgerInputRef.current && document.body.clientWidth > 900) {
        hamburgerInputRef.current.checked = false;
      }
    };

    window.addEventListener("resize", uncheckHamburgerHandler);

    return () => {
      window.removeEventListener("resize", uncheckHamburgerHandler);
    };
  }, []);

  const handleClick = useCallback(
    (id: string) => () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      if (hamburgerInputRef.current) {
        hamburgerInputRef.current.checked = false;
      }
    },
    [hamburgerInputRef]
  );
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={FeaLogo} alt="" width={60} height={60} />
      </Link>
      {
        pathname?.startsWith("/home") && (
          <>
            <nav className={styles.navbar}>
              <Link
                href="/home#episodes"
                onClick={handleClick("episodes")}
                className={styles.navLink}
              >
                Podcast
              </Link>
              {/* <Link
                href="/home#blog"
                onClick={handleClick("blog")}
                className={styles.navLink}
              >
                Blog
              </Link> */}
              <Link 
                href="/home#about"
                onClick={handleClick("about")}
                className={styles.navLink}
              >
                Nosotros
              </Link>
            </nav>
            <button type="button" className={styles.hamburger}>
              <input
                type="checkbox"
                className={styles.hamburgerInput}
                ref={hamburgerInputRef}
              />
            </button>
          </>
        )
      }
    </header>
  );
};
