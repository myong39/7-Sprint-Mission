import React from 'react';
import { Article } from '@/types/Article';
import style from './BestArticle.module.css';
import formatDate from '@/lib/formatDate';
import Image from 'next/image';
import bestMark from '@/public/images/FreeBoard/bestMark.png';

const BestArticle: React.FC<Article> = ({ ...article }) => {
  const { title, image, likeCount, createdAt, writer } = article;
  return (
    <div className={style.OutContainer}>
      <div className={style.BestArticle}>
        <Image src={bestMark} alt="Best Mark" className={style.BestMark} />
        <div className={style.TitleAndImage}>
          <h2 className={style.Title}>{title}</h2>
          <div className={style.ImageContainer}>
            {image && <Image fill src={image} alt="게시글 이미지 미리보기" />}
          </div>
        </div>
        <div className={style.CardBottom}>
          <div className={style.NameAndLikeCount}>
            <p className={style.Name}>{writer.nickname}</p>
            <p className={style.LikeCount}>❤️{likeCount}</p>
          </div>
          <p className={style.Date}>{formatDate(createdAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default BestArticle;
