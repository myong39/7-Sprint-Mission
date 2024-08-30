import { ArticleProp } from "@/types/ArticleTypes";
import styles from "./Freeboard.module.scss";
import favoriteImg from "@/assets/images/icons/ic_heart.svg";
import { getFormatTime } from "@/utils/Utils";
import noImg from "@/assets/images/icons/no_img.svg";

const AllArticleItem: React.FC<ArticleProp> = ({
  article: { createdAt, image, likeCount, title, writer },
}) => {
  const titleImage = image || noImg;

  return (
    <div className={styles["all-card"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["title-wrapper"]}>
          <h2 className={styles["card-title"]}>{title}</h2>
          <div className={styles["item-box"]}>
            <img className={styles.item} src={titleImage} alt="대표 이미지" />
          </div>
        </div>
        <div className={styles["writer-wrapper"]}>
          <div className={styles["nickname-wrapper"]}>
            <span className={styles["nickname"]}>{writer.nickname}</span>
            <span className={styles["date"]}>
              {getFormatTime(createdAt, false)}
            </span>
          </div>
          <div className={styles["favorite-wrapper"]}>
            <img
              className={styles["favorite"]}
              src={favoriteImg}
              alt="즐겨찾기"
            />
            <span className={styles["favorite-count"]}>{likeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArticleItem;
