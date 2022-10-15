import { useEffect, useRef, useState } from 'react';

import podcastImg from '../../assets/images/podcast.webp';
import communityImg from '../../assets/images/community.jpg';
import codeImg from '../../assets/images/code.webp';

import { SOCIALS } from '../../constants';

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
