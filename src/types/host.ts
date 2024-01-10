interface socialLink {
  name: string;
  url: string;
}

export interface Host {
  name: string;
  avatarUrl: string;
  socials: Array<socialLink>;
  description: string;
}
