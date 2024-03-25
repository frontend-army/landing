import { Host } from "@/types/host";
import skolzProfile from "@/assets/skolz_profile.png";
import frankProfile from "@/assets/frank_profile.png";
import pablitoProfile from "@/assets/pablito_profile.png";
import luquiProfile from "@/assets/luqui_profile.png";
import capiProfile from "@/assets/capi_profile.png";
import tinchoProfile from "@/assets/tincho_profile.png";

export const hosts: Array<Host> = [
  {
    name: "Gabriel Zanzotti",
    avatar: skolzProfile,
    socials: [
      { name: "Github", url: "https://github.com/SKOLZ" },
      { name: "Twitter", url: "https://twitter.com/SKOLZZ" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/SKOLZ/" },
    ],
    description:
      "Ingeniero en informática graduado del ITBA. Fanático de los videojuegos y el animé. Enfocado en CSS, React y Management.",
  },
  {
    name: "Damian Finkelstein",
    avatar: capiProfile,
    socials: [
      { name: "Github", url: "https://github.com/damfinkel" },
      { name: "Twitter", url: "https://twitter.com/damfinkel" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/damián-finkelstein-818b5133/",
      },
    ],
    description:
      "Lic. en Análisis de Sistemas graduado en la UBA. Gamer casual. Entusiasta del brunch. Frontend developer con especial expertise en React.",
  },
  {
    name: "Pablo Ferro",
    avatar: pablitoProfile,
    socials: [
      { name: "Github", url: "https://github.com/pabloferro" },
      { name: "Twitter", url: "https://twitter.com/pabloeferro" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/pablo-e-ferro/" },
    ],
    description:
      "Ingeniero en sistemas graduado de la UTN. Amante del cine y los juegos de mesa. Especializado en desarrollo con React & React Native.",
  },
  {
    name: "Lucas Zibell",
    avatar: luquiProfile,
    socials: [
      { name: "Github", url: "https://github.com/LucasZibell" },
      { name: "Twitter", url: "https://twitter.com/lucas_zibell" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/lucas-zibell" },
    ],
    description:
      "Ingeniero en sistemas graduado de la UTN. Experto en Pokémon y aficionado del café. Frontender con foco en entrevistas y mentoring.",
  },
  {
    name: "Francisco Iglesias",
    avatar: frankProfile,
    socials: [
      { name: "Github", url: "https://github.com/FrankIglesias" },
      { name: "Twitter", url: "https://twitter.com/Frankjiglesias" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/francisco-janin-iglesias/",
      },
    ],
    description:
      "Ingeniero en Sistemas de la UTN. Apasionado por la musica y por viajar. Frontend developer y ocasionalmente backend dev.",
  },
  {
    name: "Martin Callegari",
    avatar: tinchoProfile,
    socials: [
      { name: "Github", url: "https://github.com/mcallegari10" },
      { name: "Twitter", url: "https://twitter.com/TiinchoKaleghar" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/martín-callegari-81a97011b/",
      },
    ],
    description:
      "Experto en casi todo. Gamer y tiro cartones de Pokemon cada tanto. Frontend dev y siguiendo el path de game dev.",
  },
];
