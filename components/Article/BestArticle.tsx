import React from 'react';
import { Article } from '@/types/Article';
import style from './BestArticle.module.css';
import formatDate from '@/lib/formatDate';
import Image from 'next/image';

const BestArticle: React.FC<Article> = ({ ...article }) => {
  const { title, image, likeCount, createdAt, writer } = article;
  return (
    <div className={style.BestArticle}>
      <div>
        <h2>{title}</h2>
        <div className={style.ImageContainer}>
          {image && <Image fill src={image} alt="게시글 이미지 미리보기" />}
        </div>
      </div>
      <div className={style.CardBottom}>
        <p>{writer.nickname}</p>
        <p>❤️{likeCount}</p>
        <p>{formatDate(createdAt)}</p>
      </div>
    </div>
  );
};

export default BestArticle;
