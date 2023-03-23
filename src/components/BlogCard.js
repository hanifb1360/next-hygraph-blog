import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/BlogCard.module.css';

export default function BlogPost({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className={styles.card}>
      <Link href={'/posts/' + slug}>
        <img
          src={coverPhoto.url}
          alt=" this is a visual presentation of an article in this blog"
        />
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <img
              src={author.avatar.url}
              alt=" this is a visual presentation of the author of the article in this blog"
            />
            <h3 className={styles.authorName}>{author.name}</h3>
          </div>
          <div className={styles.date}>
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
