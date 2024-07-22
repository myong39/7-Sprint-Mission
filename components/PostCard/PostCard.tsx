import React from "react";
import styles from "./PostCard.module.scss";
import Image from "next/image";
import heartIcon from "public/ic_heart.svg";
import Link from "next/link";

interface PostItem {
  id: number;
  content: string;
  image?: string;
  likeCount: number;
  title: string;
  createdAt: string;
  writer: {
    nickname: string;
  };
}
const PostCard = ({ item }: { item: PostItem }) => {
  const {
    id,
    content,
    image,
    likeCount,
    createdAt,
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
    <Link href={`/boards/${id}`} className={styles["post-card-container"]}>
      <div className={styles["best-post-card-content"]}>
        <p>{content}</p>
        {image ? (
          <Image src={image} alt="게시글의 이미지" width={72} height={72} />
        ) : null}
      </div>
      <div className={styles["best-post-card-info"]}>
        <span className={styles["best-post-card-info-name"]}>{nickname}</span>
        <span className={styles["best-post-card-info-date"]}>
          {formatDate(createdAt)}
        </span>
        <span className={styles["best-post-card-info-likes"]}>
          <Image
            src={heartIcon}
            alt="좋아요수를 나타내는 하트모양아이콘"
            width={16}
            height={16}
          />
          <span className={styles["best-post-card-info-likes-count"]}>
            {likeCount}
          </span>
        </span>
      </div>
    </Link>
  );
};

export default PostCard;
