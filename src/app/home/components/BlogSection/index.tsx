import { BlogpostCard } from "./components/BlogpostCard";
import styles from './styles.module.css';

interface Props {
}

export const BlogSection: React.FC<Props> = () => {
  const mockedPostSummaries = [
    {
      cover: "https://placehold.it/100",
      title: "Serenity in the Wilderness",
      summary: "summary",
      author: {
        name: "John Doe",
        avatar: "https://placehold.it/100"
      }
    },
    {
      cover: "https://placehold.it/100",
      title: "Urban Symphony",
      summary: "summary",
      author: {
        name: "Jane Smith",
        avatar: "https://placehold.it/100"
      }
    }, 
    {
      cover: "https://placehold.it/100",
      title: "Whirlwind of Colors",
      summary: "summary",
      author: {
        name: "Alex Rodriguez",
        avatar: "https://placehold.it/100"
      }
    }
  ];

  return (
    <section className={`${styles.blogSection} flex flex-col items-center gap-20`}>
      <h2 className="title-1">Nuestro Blog</h2>
      <div className={styles.posts}>
        {mockedPostSummaries?.map((postSummary, index) => (
          <BlogpostCard key={postSummary.title} postSummary={postSummary} isHorizontal={index > 0} />
        ))}
      </div>
    </section>
  );
} 
