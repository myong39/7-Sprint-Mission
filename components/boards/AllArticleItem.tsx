import { ArticleProp } from "@/types/articleTypes";
import styles from "./Freeboard.module.scss";
import favoriteImg from "@/public/images/icons/ic_heart.svg";
import { getFormatTime } from "@/utils/Utils";

export default function AllArticleItem({
  article: { createdAt, image, likeCount, title, writer },
}: ArticleProp) {
  return (
    <div className={styles["all-card"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["title-wrapper"]}>
          <h2 className={styles["card-title"]}>{title}</h2>
          {image && (
            <div className={styles["item-box"]}>
              <img className={styles.item} src={image} alt="대표 이미지" />
            </div>
          )}
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
              src={favoriteImg.src}
              alt="즐겨찾기"
            />
            <span className={styles["favorite-count"]}>{likeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
