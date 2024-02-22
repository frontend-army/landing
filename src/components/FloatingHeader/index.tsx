import Image from "next/image";
import Link from "next/link";
import FeaLogo from "@/assets/fea_logo.png";
import styles from "./styles.module.css";

export const FloatingHeader: React.FC = () => {
  return (
    <header className={styles.floatingHeader}>
      <Link className={styles.homeLink} href="/">
        <Image src={FeaLogo} alt="" width={60} height={60} />
      </Link>
    </header>
  );
};
