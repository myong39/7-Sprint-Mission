import React from "react";
import styles from "./BestPostCard.module.scss";
import Image from "next/image";

const BestPostCard = ({ item }) => {
  const {
    content,
    image,
    likeCount,
    createdAt,
    writer: { nickname },
  } = item;

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  return (
    <div className={styles["best-post-card-container"]}>
      <div className={styles["best-post-card-badge"]}>
        <Image
          src="/ic_medal.svg"
          alt="베스트상품에 붙는 메달모양 뱃지"
          width={16}
          height={16}
        />
        <span>Best</span>
      </div>
      <div className={styles["best-post-card-content"]}>
        <p>{content}</p>
        {image ? (
          <Image
            src={image}
            alt="베스트게시글의 이미지"
            width={72}
            height={72}
          />
        ) : null}
      </div>
      <div className={styles["best-post-card-info"]}>
        <span className={styles["best-post-card-info-name"]}>{nickname}</span>
        <span className={styles["best-post-card-info-likes"]}>
          <Image
            src="/ic_heart.svg"
            alt="좋아요수를 나타내는 하트모양아이콘"
            width={16}
            height={16}
          />
          <span className={styles["best-post-card-info-likes-count"]}>
            {likeCount}
          </span>
        </span>
        <span className={styles["best-post-card-info-date"]}>
          {formatDate(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default BestPostCard;
