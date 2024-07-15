import React from 'react';
import style from './AllArticle.module.css';
import { Article } from '@/types/Article';
import Image from 'next/image';

const AllArticle: React.FC<Article> = ({
  id,
  title,
  createdAt,
  writer,
  image,
  likeCount,
}) => {
  return (
    <div className={style.article}>
      <img src={image} alt={title} className={style.articleImage} />
      <div className={style.articleContent}>
        <h2>{title}</h2>
        <div className={style.articleFooter}>
          <span>{writer.nickname}</span>
          <span>{createdAt}</span>
          <span>{likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default AllArticle;
