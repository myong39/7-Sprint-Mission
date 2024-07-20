import React from 'react';
import { useRouter } from 'next/router';
import style from './AllArticle.module.css';
import { Article } from '@/types/Article';
import Image from 'next/image';
import formatDate from '@/lib/formatDate';
import profile1 from '@/asset/images/profile1.png';

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
      <div className={style.articleContent}>
        <div className={style.TitleAndImg}>
          <h2>{title}</h2>
          {image ? (
            <div className={style.ImgContainer}>
              <Image
                src={image}
                alt={'Img'}
                className={style.articleImage}
                width={48}
                height={44.57}
              />
            </div>
          ) : null}
        </div>
        <div className={style.articleFooter}>
          <Image
            src={profile1}
            alt={'유저 기본이미지'}
            className={style.BasicUserProfile}
          />
          <span>{writer.nickname}</span>
          <span>{date}</span>
          <span className={style.LikeCount}>❤️ {likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default AllArticle;
