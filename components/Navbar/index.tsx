import cx from 'classnames';
import { useState } from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';
import Logo from '../../assets/images/logo.svg';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleOpenSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navContainer}>
      <Link href="/#">
        <a className={styles.logoLink}>
          <Logo className={styles.logo} />
        </a>
      </Link>
      <div
        className={cx(styles.linkContainer, {
          [styles.sidebarActive]: isSidebarOpen
        })}
      >
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
      </div>
      <button
        type="button"
        onClick={handleOpenSidebar}
        className={styles.sidebarButton}
      >
        <i className={styles.hamburgerIcon} />
      </button>
    </nav>
  );
}

export default Navbar;
