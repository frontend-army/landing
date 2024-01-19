import { createClient } from "@/prismicio";


const client = createClient();

export async function fetchPosts() {
  const posts = await client.getByType("blogpost");
  return posts.results.map((post) => ({
    uid: post.uid,
    title: post.data.title,
    subtitle: post.data.summary,
    cover: post.data.cover.url,
    author: {
      name: post.data.author[0]?.name,
      avatar: post.data.author[0]?.avatar.url,
    },
  }));
}
