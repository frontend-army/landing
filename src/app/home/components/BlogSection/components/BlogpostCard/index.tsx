import Image from "next/image";
import { BlogpostSummary } from "@/types/blogpost";
import styles from './styles.module.css';
import ChevronSimpleRight from "@/assets/chevron-simple-right.svg";
import Link from 'next/link';
import { format } from "date-fns";

interface Props {
  postSummary: BlogpostSummary;
  isHorizontal: boolean;
}

export const BlogpostCard: React.FC<Props> = ({postSummary, isHorizontal}) => (
  <Link className={`${styles.post} ${isHorizontal ? styles.postHorizontal : ''}`} href={`/blog/${postSummary.id}`}>
    <Image width={592} height={333} className={styles.postCover} src={postSummary.cover} alt="" />
    <div className={styles.postInfo}>
      <p className={styles.postDate}>{format(postSummary.date,'dd/MM/yyyy')}</p>
      <h3 className={styles.postTitle}>{postSummary.title}</h3>
      <p className={styles.postBody}>{postSummary.summary}</p>
      <div className={`${styles.postAuthor} flex items-center gap-2`}>
        <Image className={styles.postAuthorAvatar} src={postSummary.author.avatar} width={40} height={40} alt={`${postSummary.author.name}'s avatar`} />
        <p className={styles.postAuthorName}>{postSummary.author.name}</p>
      </div>
      <div className={styles.postReadArrow}>
        <ChevronSimpleRight className={styles.postReadArrowIcon} />
      </div>
    </div>
  </Link>
);
