import { MDXRemote } from "next-mdx-remote/rsc";
import { fetchPost, fetchPosts } from '@/app/api/blogpost';

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; };
}) {
  const { metadata } = await fetchPost(params.slug);
  if (!metadata) {
    return {};
  }
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function Post({
  params,
}: {
  params: { slug: string; };
}) {
  const { source } = await fetchPost(params.slug);
  return (
      <article>
          <MDXRemote
            source={source}
          />
      </article>
  );
}
