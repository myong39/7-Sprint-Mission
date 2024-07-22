import Comment from "./components/Comment";
import React from "react";
import profileImg from "@/assets/icons/profileImg.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import kebabIcon from "@/assets/icons/ic_kebab.svg";
import slashIcon from "@/assets/icons/slash.svg";
import heartIcon from "@/assets/icons/ic_like.svg";
import { useState } from "react";

export default function PostDetails() {
  const [formState, setFormState] = useState({
    comment: "",
  });
  const isFormValid = formState.comment;
  const handleInput = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={styles["frame"]}>
      <div className={styles["title-line"]}>
        <p className={styles["title"]}>
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?(title)
        </p>
        <Image src={kebabIcon} alt="케밥아이콘" width="24" />
      </div>
      <div className={styles["post-information-line"]}>
        <div className={styles["post-information"]}>
          <div className={styles["nickname-and-date"]}>
            <Image
              className={styles["profile-img"]}
              src={profileImg}
              alt="프로필이미지"
            />
            <p className={styles["nickname"]}>작성자 이름(writer.nickname)</p>
            <p className={styles["date"]}>작성한 날짜(createdAt)</p>
          </div>
          <Image src={slashIcon} alt="슬래시" />
          <div className={styles["like-count-box"]}>
            <Image src={heartIcon} alt="하트아이콘" width="32" />
            <p className={styles["like-count"]}>2000(likeCount)</p>
          </div>
        </div>
      </div>
      <div className={styles["content"]}>
        맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요? (content)
      </div>
      <div className={styles["comment-area"]}>
        <label className={styles["comment-label"]}>댓글달기</label>
        <textarea
          className={styles["comment-input-box"]}
          placeholder="댓글을 입력해주세요."
          onChange={handleInput}
          name="comment"
          required
        />
        <div className={styles["register-button-line"]}>
          <button
            className={`${styles["register-button"]} ${
              isFormValid ? styles["register-button-active"] : ""
            }`}
            disabled={!isFormValid}
            type="submit"
          >
            등록
          </button>
        </div>
      </div>
      <Comment />
    </div>
  );
}
