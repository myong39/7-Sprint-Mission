import kebabImg from "@/assets/images/icons/ic_kebab.svg";
import { getFormatTime, getElapsedTime } from "@/utils/Utils";
import { CommentType } from "@/types/ArticleTypes";
import styles from "./Commtent.module.scss";
import defaultProfileImg from "@/assets/images/icons/ic_user.svg";
import MenuDropdown from "../Dropdown/MenuDropdown";
import { useState } from "react";
import { useConfirm } from "../ConfirmPopup";
import { MENU_OPTION } from "@/types/UiTypes";

const Comment: React.FC<{ comment: CommentType }> = ({
  comment: {
    content,
    writer: { image, nickname },
    createdAt,
  },
}) => {
  const elapsedTime = getElapsedTime(createdAt);
  const formattedTime = getFormatTime(createdAt);
  const profileImg = image ? image : defaultProfileImg;

  const { confirm, ConfirmPopupComponent } = useConfirm();

  const handleOrderChange = async (option: string) => {
    if (option === MENU_OPTION.EDIT) {
    } else if (option === MENU_OPTION.DELETE) {
      const result = await confirm(
        "정말로 이 항목을 삭제하시겠습니까?",
        "삭제",
        "취소"
      );
      if (result) {
        alert("삭제되었습니다.");
      }
    }
  };

  return (
    <div className={styles.comment}>
      <div className={styles["comment-content-Wrapper"]}>
        <p>{content}</p>
        <div className={styles["kebab-image"]}>
          <MenuDropdown
            onOrderChange={handleOrderChange}
            items={[MENU_OPTION.EDIT, MENU_OPTION.DELETE]}
          />
        </div>
      </div>
      <div className={styles["writer-wrapper"]}>
        <img src={profileImg} alt={`${nickname}의 프로필 사진`} />
        <div className={styles["nickname-wrapper"]}>
          <h3>{nickname}</h3>
          <h4>
            {formattedTime} {`(${elapsedTime})`}
          </h4>
        </div>
      </div>
      <div className={styles["horizontal-divider"]}></div>{" "}
      {ConfirmPopupComponent}
    </div>
  );
};

export default Comment;
