import { ArticleProp } from "@/types/ArticleTypes";
import styles from "./Freeboard.module.scss";
import favoriteImg from "@/public/images/icons/ic_heart.svg";
import { getFormatTime } from "@/utils/Utils";
import noImg from "@/public/images/icons/no_img.svg";
import Image from "next/image";

export default function AllArticleItem({
  article: { createdAt, image, likeCount, title, writer },
}: ArticleProp) {
  const titleImage = image || noImg.src;

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
            <Image
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
}
