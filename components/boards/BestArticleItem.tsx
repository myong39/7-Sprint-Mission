import styles from "./Freeboard.module.scss";
import badgeImg from "@/public/images/icons/img_badge.svg";
import favoriteImg from "@/public/images/icons/ic_heart.svg";
import { ArticleProp } from "@/types/articleTypes";
import { getFormatTime } from "@/utils/Utils";
import noImg from "@/public/images/icons/no_img.svg";

export default function BestArticleItem({
  article: { createdAt, image, likeCount, title, writer },
}: ArticleProp) {
  const titleImage = image ? image : noImg.src;

  return (
    <div className={styles["best-card"]}>
      <img className={styles.badge} src={badgeImg.src} alt="Best 뱃지" />
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
            <div className={styles["favorite-wrapper"]}>
              <img
                className={styles["favorite"]}
                src={favoriteImg.src}
                alt="즐겨찾기"
              />
              <span className={styles["favorite-count"]}>{likeCount}</span>
            </div>
          </div>
          <span className={styles["date"]}>
            {getFormatTime(createdAt, false)}
          </span>
        </div>
      </div>
    </div>
  );
}
