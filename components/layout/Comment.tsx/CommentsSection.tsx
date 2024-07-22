import React from "react";
import Comment from "./Comment";
import { CommentsSectionProp } from "@/types/articleTypes";
import styles from "./Commtent.module.scss";

export default function CommentsSection({
  comments: {
    comments,
    imgUrl: { src, alt },
    content,
  },
  className,
}: CommentsSectionProp) {
  const isCommentEmpty = !comments.length;

  return (
    <section className={`${styles["comments-section"]} ${className}`}>
      {isCommentEmpty && (
        <div className={styles["empty-comment"]}>
          <img src={src} alt={alt} />
          <h3 style={{ whiteSpace: "pre-line" }}>{content}</h3>
        </div>
      )}
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  );
}
