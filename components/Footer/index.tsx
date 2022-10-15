import cx from 'classnames';

import { SOCIAL_LINKS } from '../../constants';

import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={cx('title-3', styles.socialTitle)}>Redes sociales</h3>
      <ul className={styles.linkContainer}>
        {Object.values(SOCIAL_LINKS).map(({ href, icon: Icon, title }) => (
          <li>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className={cx(styles.link, 'link')}
            >
              <Icon className={styles.socialLinkImg} />
              {title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
