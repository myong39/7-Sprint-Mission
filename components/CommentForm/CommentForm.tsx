import React, { useState } from "react";
import styles from "./CommentForm.module.scss";

const CommentForm = () => {
  const [content, setContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  return (
    <form className={styles["comment-form-container"]}>
      <label htmlFor="comment">댓글달기</label>
      <textarea
        name="comment"
        id="comment"
        value={content}
        onChange={handleChange}
        placeholder="댓글을 입력해주세요"
      />
      <button disabled={!content}>등록</button>
    </form>
  );
};

export default CommentForm;
