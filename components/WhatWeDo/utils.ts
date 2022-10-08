import { useEffect, useRef, useState } from 'react';

import podcastImg from '../../assets/images/podcast.webp';
import communityImg from '../../assets/images/community.jpg';
import codeImg from '../../assets/images/code.webp';

import TwitterLogo from '../../assets/images/twitter.svg';
import TwitchLogo from '../../assets/images/twitch.svg';
import YoutubeLogo from '../../assets/images/youtube.svg';
import SpotifyLogo from '../../assets/images/spotify.svg';
import DiscordLogo from '../../assets/images/discord.svg';
import GithubLogo from '../../assets/images/github.svg';

export const SOCIAL_LINKS = {
  twitter: {
    title: 'Twitter',
    icon: TwitterLogo,
    href: 'https://twitter.com/frontend_army'
  },
  twitch: {
    title: 'Twitch',
    icon: TwitchLogo,
    href: 'https://www.twitch.tv/frontend_army'
  },
  youtube: {
    title: 'Youtube',
    icon: YoutubeLogo,
    href: 'https://www.youtube.com/channel/UCZ-rzg0Rya_le0GtTH3piPQ'
  },
  spotify: {
    title: 'Spotify',
    icon: SpotifyLogo,
    href: 'https://open.spotify.com/show/0sN5AI1KvzNm46qhIPqppT?si=69865e1ae9fc4abc&nd=1'
  },
  discord: {
    title: 'Discord',
    icon: DiscordLogo,
    href: 'https://discord.gg/FE7eTYFJ'
  },
  github: {
    title: 'Github',
    icon: GithubLogo,
    href: 'https://github.com/frontend-army'
  }
};

export const ITEMS = [
  {
    src: podcastImg,
    text: 'Podcasts miércoles por medio sobre tematicas de desarrollo enfocadas en Front-End',
    alt: 'Podcast',
    socials: [SOCIAL_LINKS.twitch, SOCIAL_LINKS.youtube, SOCIAL_LINKS.spotify]
  },
  {
    src: communityImg,
    text: 'Streams desarrollando webs junto con ustedes con herramientas distintas, compartiendo con la comunidad nuestra experiencia y opinión',
    alt: 'Community',
    socials: [SOCIAL_LINKS.discord]
  },
  {
    src: codeImg,
    text: 'Comunidad de desarrolladores compartiendo novedades, posts, desarrollos y debates',
    alt: 'JS Code',
    socials: [SOCIAL_LINKS.twitch, SOCIAL_LINKS.youtube]
  }
];

export const useObserveBottom = () => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    if (!rowRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio === 1) {
          setIsBottom(true);
        }
      },
      { threshold: [1], rootMargin: '0px 0px 10% 0px' }
    );

    observer.observe(rowRef.current);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    () => {
      observer.disconnect();
    };
  });

  return { isBottom, ref: rowRef };
};
