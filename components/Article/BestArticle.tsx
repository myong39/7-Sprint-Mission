import React from 'react';
import { Article } from '@/types/Article';
import style from './BestArticle.module.css';
import formatDate from '@/lib/formatDate';
import Image from 'next/image';
import bestMark from '@/public/images/FreeBoard/bestMark.png';
import { useRouter } from 'next/router';

const BestArticle: React.FC<Article> = ({ ...article }) => {
  const { title, image, likeCount, createdAt, writer, id } = article;
  const router = useRouter();
  const handleClick = () => {
    router.push(`/boards/${id}`);
  };
  const truncateTitle = (title: string) => {
    if (title.length > 29) {
      return title.substring(0, 25) + '...';
    }
    return title;
  };
  return (
    <div className={style.OutContainer} onClick={handleClick}>
      <div className={style.BestArticle}>
        <Image src={bestMark} alt="Best Mark" className={style.BestMark} />
        <div className={style.TitleAndImage}>
          <h2 className={style.Title}>{truncateTitle(title)}</h2>
          {image && (
            <div className={style.ImageContainer}>
              <Image
                src={image}
                width={48}
                height={44.57}
                alt="게시글 이미지 미리보기"
                className={style.BestImg}
              />
            </div>
          )}
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
