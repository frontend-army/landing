import { createClient } from "@/prismicio";
import { BlogpostSummary } from "@/types/blogpost";

const client = createClient();

export async function fetchPosts(): Promise<Array<BlogpostSummary>> {
  const posts = await client.getByType("blogpost");
  return posts.results.map(
    (post) =>
      ({
        id: post.uid,
        title: post.data.title,
        summary: post.data.summary,
        cover: post.data.cover.url,
        author: {
          name: post.data.author[0]?.name,
          avatar: post.data.author[0]?.avatar.url,
        },
      }) as BlogpostSummary
  );
}
