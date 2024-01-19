import FeaLogo from '@/assets/fea_logo.png';
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image src={FeaLogo} alt="" width={60} height={60} />
      <nav className={styles.navbar}>
        <Link href="https://www.google.com" className={styles.navLink}>Nosotros</Link>
        <Link href="/episodes" className={styles.navLink}>Episodios</Link>
        <Link href="https://www.google.com" className={styles.navLink}>Blog</Link>
      </nav>
    </header>
  );
} 
