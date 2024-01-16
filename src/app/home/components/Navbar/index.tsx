import FeaLogo from '@/assets/fea_logo.png';
import Image from 'next/image';
import style from './styles.module.css';

export const Navbar: React.FC = () => {
  return (
    <header className={style.header}>
      <Image src={FeaLogo} alt="" width={60} height={60} />
      <nav className={style.navbar}>
        <a href="https://www.google.com" className={style.navLink}>Nosotros</a>
        <a href="https://www.google.com" className={style.navLink}>Episodios</a>
        <a href="https://www.google.com" className={style.navLink}>Blog</a>
      </nav>
    </header>
  );
} 
