import cx from 'classnames';

import styles from './styles.module.scss';
import logo from '../../assets/images/logo.svg';

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <a href="/#" className={styles.logoLink}>
        <img src={logo.src} alt="Logo" className={styles.logo} />
      </a>
      <a href="/#intro" className={cx(styles.link, 'link')}>
        Introducción
      </a>
      <a href="/#vision" className={cx(styles.link, 'link')}>
        Visión
      </a>
      <a href="/#us" className={cx(styles.link, 'link')}>
        Quienes somos
      </a>
      <a href="/#videos" className={cx(styles.link, 'link')}>
        Videos
      </a>
      <a href="/#community" className={cx(styles.link, 'link')}>
        Comunidad
      </a>
    </nav>
  );
}

export default Navbar;
