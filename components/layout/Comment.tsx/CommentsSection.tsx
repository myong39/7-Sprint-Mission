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
}: CommentsSectionProp) {
  const isCommentEmpty = !comments.length;

  return (
    <div className={styles["comments-section"]}>
      {isCommentEmpty && (
        <div className={styles["empty-comment"]}>
          <img src={src} alt={alt} />
          <h3 style={{ whiteSpace: "pre-line" }}>{content}</h3>
        </div>
      )}
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
