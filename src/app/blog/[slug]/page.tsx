import { MDXRemote } from "next-mdx-remote/rsc";
import { fetchPost, fetchPosts } from '@/app/api/blogpost';
import styles from './styles.module.css';

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
    metadataBase: new URL('https://www.frontend-army.com'),
    title: metadata.title,
    description: metadata.description,
    images: [metadata.cover],
    url: `https://www.frontend-army.com/blog/${params.slug}`,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [metadata.cover],
      url: `https://www.frontend-army.com/blog/${params.slug}`,
    },
    twitter: {
      card : 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.cover],
      url: `https://www.frontend-army.com/blog/${params.slug}`,
    },
    linkedin: {
      title: metadata.title,
      description: metadata.description,
      images: [metadata.cover],
      url: `https://www.frontend-army.com/blog/${params.slug}`,
    }
  };
}

const components = {
  p: (props: any) => <p className="my-2 leading-normal" {...props} />,
  blockquote: (props: any) => <code className="border-l-4 border-gray-300 pl-2" {...props} />,
  h1: (props: any) => <h1 className="text-4xl font-bold mb-2 leading-tight" {...props} />,
  h2: (props: any) => <h1 className="text-3xl font-bold mb-2 leading-tight" {...props} />,
}

export default async function Post({
  params,
}: {
  params: { slug: string; }
}) {
  const { source } = await fetchPost(params.slug);
  return (
      <article className={styles.blog}>
          <MDXRemote
            source={source}
            components={components}
          />
      </article>
  );
}
