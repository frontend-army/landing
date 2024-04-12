import { StaticImageData } from "next/image";

interface socialLink {
  name: string;
  url: string;
}

export interface Host {
  name: string;
  avatar: StaticImageData;
  socials: Array<socialLink>;
  description: string;
}
