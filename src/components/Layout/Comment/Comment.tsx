import kebabImg from "@/assets/images/icons/ic_kebab.svg";
import { getFormatTime, getElapsedTime } from "@/utils/Utils";
import { CommentType } from "@/types/ArticleTypes";
import styles from "./Commtent.module.scss";
import defaultProfileImg from "@/assets/images/icons/ic_user.svg";
import MenuDropdown from "../Dropdown/MenuDropdown";
import { useState } from "react";

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

  const [orderBy, setOrderBy] = useState("");
  const handleOrderChange = (option: string) => {
    setOrderBy(option);
  };

  return (
    <div className={styles.comment}>
      <div className={styles["comment-content-Wrapper"]}>
        <p>{content}</p>
        <div className={styles["kebab-image"]}>
          <MenuDropdown
            onOrderChange={handleOrderChange}
            items={["수정하기", "삭제하기"]}
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
      <div className={styles["horizontal-divider"]}></div>
    </div>
  );
};

export default Comment;
