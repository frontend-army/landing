import { fetchPosts } from "@/app/api/blogpost";
import { BlogpostCard } from "./components/BlogpostCard";
import styles from './styles.module.css';

interface Props {
}

export const BlogSection: React.FC<Props> = async () => {
  const posts = await fetchPosts();

  return (
    <section className={`${styles.blogSection} flex flex-col items-center gap-20`}>
      <h2 className="title-1">Nuestro Blog</h2>
      <div className={styles.posts}>
        {posts?.map((postSummary, index) => (
          <BlogpostCard key={postSummary.title} postSummary={postSummary} isHorizontal={index > 0} />
        ))}
      </div>
    </section>
  );
} 
