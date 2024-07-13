import formatDate from '@/utils/formatDate';
import Image from 'next/image';
import BestBadge from './BestBadge';
import styles from './BestPost.module.scss';

function BestPost({ article }: { article: IPost }) {
  const { title, content, image, writer, likeCount, createdAt } = article;
  const { nickname } = writer;

  return (
    <div className={styles.post}>
      <BestBadge />

      <div className={styles.content}>
        <div className={styles.detail}>
          <p className={styles.description}>{content}</p>
          {image && (
            <div className={styles.image}>
              <Image src={image} alt={title} fill />
            </div>
          )}
        </div>
        <div className={styles.metadata}>
          <div className={styles.info}>
            <p className={styles.nickname}>{nickname}</p>
            <div className={styles.like}>
              <Image
                src='images/ic_heart.svg'
                width={16}
                height={16}
                alt='heart'
              />
              <p>{likeCount}</p>
            </div>
          </div>
          <p className={styles.date}>{formatDate(createdAt)}</p>
        </div>
      </div>
    </div>
  );
}

export default BestPost;
