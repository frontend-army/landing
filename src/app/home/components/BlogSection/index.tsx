import { fetchPosts } from "@/app/api/blogpost";
import { BlogpostCard } from "./components/BlogpostCard";
import { SeeMoreEpisodesButton } from "../EpisodesSection/components/SeeMoreEpisodesButton";
import styles from './styles.module.css';
import { SectionTitle } from "@/components/SectionTitle";

export const revalidate = 3600;

export const BlogSection: React.FC = async () => {
  const posts = await fetchPosts();
  return (
    <section id="blog" className={`${styles.blogSection} flex flex-col items-center`}>
      <SectionTitle className="mb-16">Nuestro Blog</SectionTitle>
      <div className={`${styles.posts} mb-12`}>
        {posts?.map((postSummary, index) => (
          <BlogpostCard key={postSummary.title} postSummary={postSummary} isHorizontal={index > 0} />
        ))}
      </div>
      {/* <button className="button shiny-glowing-border">Ver todos los posts</button> */}
    </section>
  );
} 
