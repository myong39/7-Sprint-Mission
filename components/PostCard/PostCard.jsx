import React from "react";
import styles from "./PostCard.module.scss";
import Image from "next/image";

const PostCard = ({ item }) => {
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
    <div className={styles["post-card-container"]}>
      <div className={styles["best-post-card-content"]}>
        <p>{content}</p>
        {image ? (
          <Image src={image} alt="게시글의 이미지" width={72} height={72} />
        ) : null}
      </div>
      <div className={styles["best-post-card-info"]}>
        <span className={styles["best-post-card-info-name"]}>{nickname}</span>
        <span className={styles["best-post-card-info-date"]}>
          {" "}
          {formatDate(createdAt)}
        </span>
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
      </div>
    </div>
  );
};

export default PostCard;
