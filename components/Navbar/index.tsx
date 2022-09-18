import cx from 'classnames';
import Link from 'next/link';

import styles from './styles.module.scss';
import logo from '../../assets/images/logo.svg';

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <Link href="/#">
        <a className={styles.logoLink}>
          <img src={logo.src} alt="Logo" className={styles.logo} />
        </a>
      </Link>
      <Link href="/#intro">
        <a className={cx(styles.link, 'link')}>Introducción</a>
      </Link>
      <Link href="/#vision">
        <a className={cx(styles.link, 'link')}>Visión</a>
      </Link>
      <Link href="/#us">
        <a className={cx(styles.link, 'link')}>Quienes somos</a>
      </Link>
      <Link href="/#videos">
        <a className={cx(styles.link, 'link')}>Videos</a>
      </Link>
      <Link href="/#community">
        <a className={cx(styles.link, 'link')}>Comunidad</a>
      </Link>
    </nav>
  );
}

export default Navbar;
