import kebabImg from "@/assets/images/icons/ic_kebab.svg";
import { getFormatTime, getElapsedTime } from "@/utils/Utils";
import { CommentType } from "@/types/ArticleTypes";
import styles from "./Commtent.module.scss";
import defaultProfileImg from "@/assets/images/icons/ic_user.svg";

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

  return (
    <div className={styles.comment}>
      <div className={styles["comment-content-Wrapper"]}>
        <p>{content}</p>
        <img className={styles["kebab-image"]} src={kebabImg} alt="더보기" />
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
