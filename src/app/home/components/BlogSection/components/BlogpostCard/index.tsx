import Image from "next/image";
import { BlogpostSummary } from "@/types/blogpost";
import styles from './styles.module.css';

interface Props {
  postSummary: BlogpostSummary;
  isHorizontal: boolean;
}

export const BlogpostCard: React.FC<Props> = ({postSummary, isHorizontal}) => {
  return (
    <a className={`${styles.post} ${isHorizontal ? styles.postHorizontal : ''}`} href="https://google.com">
      <img className={styles.postCover} src={postSummary.cover}/>
      <div className={styles.postInfo}>
        <h3 className={styles.postTitle}>{postSummary.title}</h3>
        <p className={styles.postBody}>{postSummary.summary}</p>
        <div className={`${styles.postAuthor} flex items-center gap-2`}>
          <img className={styles.postAuthorAvatar} src={postSummary.author.avatar} />
          <p className={styles.postAuthorName}>{postSummary.author.name}</p>
        </div>
        <p className={styles.postDate}>14/01/2024</p>
      </div>
    </a>
  );
} 
