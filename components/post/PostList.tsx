import formatDate from '@/utils/formatDate';
import classNames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './Post.module.scss';
import PostImage from './PostImage';
import axios from '@/lib/axios';

function Post({ article }: TArticle) {
  const { title, content, image, writer, likeCount, createdAt } = article;
  const { nickname } = writer;

  const detailClasses = classNames(styles.detail, {
    [styles.withImage]: !!image,
    [styles.withoutImage]: !image,
  });

  return (
    <div className={styles.post}>
      <div className={styles.content}>
        <div className={detailClasses}>
          <p className={styles.description}>{content}</p>
          {image && <PostImage image={image} title={title} />}
        </div>
        <div className={styles.metadata}>
          <div className={styles.info}>
            <Image
              src='images/ic_profile.svg'
              width={24}
              height={24}
              alt='profile'
            />

            <p className={styles.nickname}>{nickname}</p>
            <p className={styles.date}>{formatDate(createdAt)}</p>
          </div>
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
      </div>
    </div>
  );
}

function PostList({ order, q }: { order: TOrder; q: string }) {
  const [articles, setArticles] = useState<IPost[]>([]);

  const handleLoadBestPostList = async (order: TOrder, q: string) => {
    try {
      const query = q
        ? `/articles?page=1&pageSize=10&orderBy=${order}&keyword=${q}`
        : `/articles?page=1&pageSize=10&orderBy=${order}`;
      const res = await axios.get(query);
      const articles = res.data.list;
      setArticles(articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      handleLoadBestPostList(order, q as string);
    } catch (err) {
      console.error(err);
    }
  }, [order, q]);

  return (
    <>
      {articles.map((article) => {
        return <Post key={article.id} article={article} />;
      })}
    </>
  );
}

export default PostList;
