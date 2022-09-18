import cx from 'classnames';

import TwitterLogo from '../../assets/images/twitter.svg';
import TwitchLogo from '../../assets/images/twitch.svg';
import YoutubeLogo from '../../assets/images/youtube.svg';
import SpotifyLogo from '../../assets/images/spotify.svg';
import DiscordLogo from '../../assets/images/discord.svg';
import GithubLogo from '../../assets/images/github.svg';

import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={cx('title-3', styles.socialTitle)}>Redes sociales</h3>
      <ul className={styles.linkContainer}>
        <li>
          <a
            href="https://www.twitch.tv/frontend_army"
            target="_blank"
            rel="noreferrer noopener"
            className={cx(styles.link, 'link')}
          >
            <img src={TwitchLogo.src} className={styles.icon} alt="Twitch" />
            Twitch
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCZ-rzg0Rya_le0GtTH3piPQ"
            target="_blank"
            rel="noreferrer noopener"
            className={cx(styles.link, 'link')}
          >
            <img src={YoutubeLogo.src} className={styles.icon} alt="Youtube" />
            Youtube
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/show/0sN5AI1KvzNm46qhIPqppT?si=5e4ab32938254028"
            target="_blank"
            rel="noreferrer noopener"
            className={cx(styles.link, 'link')}
          >
            <img src={SpotifyLogo.src} className={styles.icon} alt="Spotify" />
            Spotify
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/frontend_army"
            target="_blank"
            rel="noreferrer noopener"
            className={cx(styles.link, 'link')}
          >
            <img src={TwitterLogo.src} className={styles.icon} alt="Twitter" />
            Twitter
          </a>
        </li>
        <li>
          <a
            href="/"
            target="_blank"
            rel="noreferrer noopener"
            className={cx(styles.link, 'link')}
          >
            <img src={DiscordLogo.src} className={styles.icon} alt="Discord" />
            Discord
          </a>
        </li>
        <li>
          <a
            href="https://github.com/frontend-army"
            target="_blank"
            rel="noreferrer noopener"
            className={cx(styles.link, 'link')}
          >
            <img src={GithubLogo.src} className={styles.icon} alt="Github" />
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
