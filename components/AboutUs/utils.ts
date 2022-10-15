import pabloAvatar from '../../assets/images/pablo.jpg';
import tinchoAvatar from '../../assets/images/tincho.jpg';
import gaboAvatar from '../../assets/images/gabo.jpg';
import frankAvatar from '../../assets/images/frank.jpg';
import capiAvatar from '../../assets/images/capi.jpg';
import luquiAvatar from '../../assets/images/luqui.jpg';
import { SOCIALS } from '../../constants';

export const MEMBERS = [
  {
    name: 'Gabriel Zanzotti',
    img: gaboAvatar,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    socials: [
      {
        ...SOCIALS.twitter,
        href: 'https://twitter.com/SKOLZZ'
      },
      {
        ...SOCIALS.github,
        href: 'https://github.com/SKOLZ'
      }
    ]
  },
  {
    name: 'Damián Finkelstein',
    img: capiAvatar,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    socials: [
      {
        ...SOCIALS.twitter,
        href: 'https://twitter.com/damfinkel'
      },
      {
        ...SOCIALS.github,
        href: 'https://github.com/damfinkel'
      }
    ]
  },
  {
    name: 'Pablo Ferro',
    img: pabloAvatar,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    socials: [
      {
        ...SOCIALS.twitter,
        href: 'https://twitter.com/pabloeferro'
      },
      {
        ...SOCIALS.github,
        href: 'https://github.com/pabloferro'
      }
    ]
  },
  {
    name: 'Lucas Zibell',
    img: luquiAvatar,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    socials: [
      {
        ...SOCIALS.twitter,
        href: 'https://twitter.com/lucas_zibell'
      },
      {
        ...SOCIALS.github,
        href: 'https://github.com/lucaszibell'
      }
    ]
  },
  {
    name: 'Francisco Iglesias',
    img: frankAvatar,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    socials: [
      {
        ...SOCIALS.github,
        href: 'https://github.com/frankiglesias'
      }
    ]
  },
  {
    name: 'Martín Callegari',
    img: tinchoAvatar,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    socials: [
      {
        ...SOCIALS.twitter,
        href: 'https://twitter.com/TiinchoKaleghar'
      },
      {
        ...SOCIALS.github,
        href: 'https://github.com/mcallegari10'
      }
    ]
  }
];
