import TwitterLogo from '../assets/images/twitter.svg';
import TwitchLogo from '../assets/images/twitch.svg';
import YoutubeLogo from '../assets/images/youtube.svg';
import SpotifyLogo from '../assets/images/spotify.svg';
import DiscordLogo from '../assets/images/discord.svg';
import GithubLogo from '../assets/images/github.svg';

export const SOCIALS = {
  twitter: {
    title: 'Twitter',
    icon: TwitterLogo
  },
  twitch: {
    title: 'Twitch',
    icon: TwitchLogo
  },
  youtube: {
    title: 'Youtube',
    icon: YoutubeLogo
  },
  spotify: {
    title: 'Spotify',
    icon: SpotifyLogo
  },
  discord: {
    title: 'Discord',
    icon: DiscordLogo
  },
  github: {
    title: 'Github',
    icon: GithubLogo
  }
};

export const SOCIAL_LINKS = {
  twitter: {
    ...SOCIALS.twitter,
    href: 'https://twitter.com/frontend_army'
  },
  twitch: {
    ...SOCIALS.twitch,
    href: 'https://www.twitch.tv/frontend_army'
  },
  youtube: {
    ...SOCIALS.youtube,
    href: 'https://www.youtube.com/channel/UCZ-rzg0Rya_le0GtTH3piPQ'
  },
  spotify: {
    ...SOCIALS.spotify,
    href: 'https://open.spotify.com/show/0sN5AI1KvzNm46qhIPqppT?si=69865e1ae9fc4abc&nd=1'
  },
  discord: {
    ...SOCIALS.discord,
    href: 'https://discord.gg/FE7eTYFJ'
  },
  github: {
    ...SOCIALS.github,
    href: 'https://github.com/frontend-army'
  }
};
