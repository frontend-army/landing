import { BlogpostSummary } from "@/types/blogpost";
import { metadata } from '@/app/blog/aws-deploy-script-fe.mdx';
import { metadata as metadata2 } from '@/app/blog/deploy-frontend-apps.mdx';

export async function fetchPosts(): Promise<Array<BlogpostSummary>> {
  return [metadata, metadata2, metadata].map(
    (post, index) =>
      ({
        id: post.id + index,
        title: post.title,
        summary: post.description,
        cover: post.cover,
        date: post.date,
        author: {
          name: post.author,
          avatar: post.authorAvatar,
        },
      }) as BlogpostSummary
  );
}
