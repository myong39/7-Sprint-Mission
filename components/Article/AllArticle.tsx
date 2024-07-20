import React from 'react';
import { useRouter } from 'next/router';
import style from './AllArticle.module.css';
import { Article } from '@/types/Article';
import Image from 'next/image';
import formatDate from '@/lib/formatDate';

const AllArticle: React.FC<Article> = ({
  id,
  title,
  createdAt,
  writer,
  image,
  likeCount,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/boards/${id}`);
  };

  const date = formatDate(createdAt);

  return (
    <div className={style.article} onClick={handleClick}>
      <img src={image} alt={title} className={style.articleImage} />
      {/* <Image src={image} alt={title} className={style.articleImage} /> */}
      <div className={style.articleContent}>
        <h2>{title}</h2>
        <div className={style.articleFooter}>
          <span>{writer.nickname}</span>
          <span>{date}</span>
          <span>{likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default AllArticle;
