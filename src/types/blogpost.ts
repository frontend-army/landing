interface BlogpostAuthor {
  name: string;
  avatar: string;
}

export interface BlogpostSummary {
  id: string;
  cover: string;
  title: string;
  summary: string;
  author: BlogpostAuthor;
  date: string;
}
