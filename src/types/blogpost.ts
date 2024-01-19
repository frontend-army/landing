interface BlogpostAuthor {
  name: string;
  avatar: string;
}

export interface BlogpostSummary {
  cover: string;
  title: string;
  summary: string;
  author: BlogpostAuthor;
}
