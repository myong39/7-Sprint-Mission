import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import bestBadge from "@/assets/images/best_badge.svg";
import likeIcon from "@/assets/icons/ic_like.svg";

interface Post {
  id: number;
  title: string;
  writer: { nickname: string };
  likeCount: number;
  updatedAt: string;
}

interface BestPostElementProps {
  post: Post;
}

export default function BestPostElement({ post }: BestPostElementProps) {
  return (
    <div className={styles["best-post-container"]}>
      <div className={styles["contents-wrapper"]}>
        <Image
          src={bestBadge}
          className={styles["best-badge"]}
          alt="베스트 뱃지"
        />
        <p className={styles["post-contents"]}>{post.title}</p>
        <div className={styles["contents-footer"]}>
          <div className={styles["nickname-and-like"]}>
            <p>{post.writer.nickname}</p>
            <div className={styles["like"]}>
              <Image src={likeIcon} alt="좋아요하트" />
              <p>{post.likeCount}</p>
            </div>
          </div>
          <p className={styles["date"]}>
            {new Date(post.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
