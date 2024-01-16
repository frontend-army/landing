import FeaLogo from '@/assets/fea_logo.png';
import Image from 'next/image';
import style from './styles.module.css';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <header className={style.header}>
      <Image src={FeaLogo} alt="" width={60} height={60} />
      <nav className={style.navbar}>
        <Link href="https://www.google.com" className={style.navLink}>Nosotros</Link>
        <Link href="/episodes" className={style.navLink}>Episodios</Link>
        <Link href="https://www.google.com" className={style.navLink}>Blog</Link>
      </nav>
    </header>
  );
} 
