import useArticles from '@/lib/useArticles';
import formatDate from '@/utils/formatDate';
import Image from 'next/image';
import styles from './Post.module.scss';
import PostImage from './PostImage';

function Post({ article }: TArticle) {
  const { title, content, image, writer, likeCount, createdAt } = article;
  const { nickname } = writer;

  return (
    <div className={styles.post}>
      <div className={styles.content}>
        <div className={styles.detail}>
          <p className={styles.description}>{content}</p>
          {image && <PostImage image={image} title={title} />}
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

function PostList() {
  const { articles } = useArticles();
  return (
    <>
      {articles.map((article) => {
        return <Post key={article.id} article={article} />;
      })}
    </>
  );
}

export default PostList;
