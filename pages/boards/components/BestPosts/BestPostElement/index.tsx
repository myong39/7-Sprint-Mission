import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import getPosts from "@/pages/api/Api";

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
      <div>
        <p className={styles["post-contents"]}>{post.title}</p>
        <div className={styles["nickname-and-like"]}>
          <p>{post.writer.nickname}</p>
          <p>{post.likeCount}</p>
        </div>
        <p>{new Date(post.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
}
