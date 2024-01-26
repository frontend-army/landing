import { fetchPosts } from "@/app/api/blogpost";
import { BlogpostCard } from "./components/BlogpostCard";
import styles from './styles.module.css';
import Image from "next/image";
import ChevronRight from "@/assets/chevron-right.svg";

interface Props {
}

export const BlogSection: React.FC<Props> = async () => {
  const posts = await fetchPosts();

  return (
    <section className={`${styles.blogSection} flex flex-col items-center gap-16`}>
      <h2 className="title-1">Nuestro Blog</h2>
      <div className={styles.postsWrapper}>
        <div className={styles.posts}>
          {posts?.map((postSummary, index) => (
            <BlogpostCard key={postSummary.title} postSummary={postSummary} isHorizontal={index > 0} />
          ))}
        </div>
        <button className={`${styles.postsSeeMore} self-end`} type="button">
          <span className={styles.postsSeeMoreContent}>
            Ver mas Posts
            <Image src={ChevronRight} className={styles.postsSeeMoreArrow} width={24} height={24} alt="" />
          </span>
        </button>
      </div>
    </section>
  );
} 
