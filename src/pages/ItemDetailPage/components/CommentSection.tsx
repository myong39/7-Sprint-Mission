import React, { useState } from "react";
import styles from "../ItemDetailPage.module.css";
import { Comment } from "../../../types/types";
import { BASE_URL } from "../../../api/item";
import { Button } from "../../../components/Button/Button";
import NoComment from "../../../assets/images/ui/empty-comments.svg";

interface CommentSectionProps {
  comments: Comment[];
  productId: string;
  reloadComments: () => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  comments,
  productId,
  reloadComments,
}) => {
  const [addComment, setAddComment] = useState("");

  const handleAddCommentSubmit = async () => {
    if (addComment.trim() === "") {
      return;
    }
    const newComment = {
      content: addComment,
    };
    await fetch(`${BASE_URL}/products/${productId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    setAddComment("");
    reloadComments();
  };

  const handleAddCommentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setAddComment(e.target.value);
  };

  return (
    <div className={styles.comments}>
      <div className={styles["comment-add"]}>
        <h2>문의하기</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddCommentSubmit();
          }}
        >
          <textarea
            value={addComment}
            placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
            onChange={handleAddCommentChange}
            className={styles["comment-input"]}
          />
          <div className={styles.submitCommentButton}>
            <Button
              text='등록'
              size='small'
              width=''
              onClick={handleAddCommentSubmit}
              disabled={addComment.trim() === ""}
            />
          </div>
        </form>
      </div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <img
              src={comment.writer.image}
              alt={comment.writer.nickname}
              className={styles["comment-profile-img"]}
            />
            <div className={styles["comment-details"]}>
              <div className={styles["comment-author"]}>
                {comment.writer.nickname}
              </div>
              <div className={styles["comment-date"]}>
                {new Date(comment.createdAt).toLocaleDateString()}
              </div>
              <div className={styles["comment-content"]}>{comment.content}</div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles["no-comment"]}>
          <img src={NoComment} alt='noComment' />
          <p>아직 문의가 없어요</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
