import { MDXRemote } from "next-mdx-remote/rsc";
import { fetchPost, fetchPosts } from "@/app/api/blogpost";
import styles from "./styles.module.css";
import { Code } from "bright"

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({
    slug: post.id
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata } = await fetchPost(slug);
  if (!metadata) {
    return {};
  }
  return {
    metadataBase: new URL("https://frontendarmy.tech"),
    title: metadata.title,
    description: metadata.description,
    images: [metadata.cover],
    url: `https://frontendarmy.tech/blog/${slug}`,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [metadata.cover],
      url: `https://frontendarmy.tech/blog/${slug}`
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [metadata.cover],
      url: `https://frontendarmy.tech/blog/${slug}`
    },
    linkedin: {
      title: metadata.title,
      description: metadata.description,
      images: [metadata.cover],
      url: `https://frontendarmy.tech/blog/${slug}`
    }
  };
}

const components = {
  p: (props: any) => <p className={styles.articleText} {...props} />,
  pre: (props: any) => (
    <Code lang="bash" {...props} />
  ),
  h1: (props: any) => (
    <h2 className={styles.articleSubtitle} {...props} />
  ),
  h2: (props: any) => (
    <h2 className={styles.articleSubtitle} {...props} />
  ),
  li: (props: any) => <li className="my-2 leading-normal list-disc ml-4" {...props} />
};

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const { source, metadata } = await fetchPost(slug);
  return (
    <div className="relative">
      <div className={styles.hero} style={{backgroundImage: `url(${metadata.cover})`}}>
        <h1 className={styles.blogpostTitle}>
          {metadata.title}
        </h1>
      </div>
      <article className={styles.article}>
        <MDXRemote source={source} components={components} />
      </article>
    </div>
  );
}
