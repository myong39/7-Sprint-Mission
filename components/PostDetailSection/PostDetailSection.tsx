import React from "react";
import styles from "./PostDetailSection.module.scss";
import Image from "next/image";
import profileIcon from "public/ic_profile.svg";
import heartIcon from "public/ic_heart.svg";

interface PostItem {
  content: string;
  image?: string;
  likeCount: number;
  title: string;
  createdAt: string;
  writer: {
    nickname: string;
  };
}

const PostDetailSection = ({ item }: { item: PostItem }) => {
  const {
    content,
    image,
    likeCount,
    createdAt,
    title,
    writer: { nickname },
  } = item;

  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  return (
    <div className={styles["post-detail-section-container"]}>
      <h1 className={styles["post-detail-section-title"]}>{title}</h1>
      <div className={styles["post-detail-section-info"]}>
        <Image
          src={profileIcon}
          alt="프로필을 나타내는 아이콘"
          width={40}
          height={40}
          className={styles["post-detail-section-profile-image"]}
        />
        <span className={styles["post-detail-section-info-name"]}>
          {nickname}
        </span>
        <span className={styles["post-detail-section-info-date"]}>
          {formatDate(createdAt)}
        </span>
        <span className={styles["post-detail-section-info-likes"]}>
          <Image
            src={heartIcon}
            alt="좋아요를 나타내는 하트모양의 아이콘"
            width={32}
            height={32}
          />
          <span>{likeCount}</span>
        </span>
      </div>
      <p className={styles["post-detail-section-content"]}>{content}</p>
    </div>
  );
};

export default PostDetailSection;
