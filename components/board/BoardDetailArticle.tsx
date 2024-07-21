import { Article } from "@/types/articleTypes";
import styles from "./BoardDetailArticle.module.scss";
import defalutProfleImg from "@/public/images/icons/ic_user.svg";
import kebabImg from "@/public/images/icons/ic_kebab.svg";
import favoriteImg from "@/public/images/icons/ic_heart.svg";
import { getFormatTime } from "@/utils/Utils";

export default function BoardDetailArticle({
  article: {
    title,
    content,
    writer: { nickname },
    likeCount,
    createdAt,
  },
}: {
  article: Article;
}) {
  return (
    <section className={styles["board-detail-article-section"]}>
      <div className={styles["title-wrapper"]}>
        <h1>{title}</h1>
        <img src={kebabImg.src} />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["user-wrapper"]}>
          <img src={defalutProfleImg.src} />
          <h3>{nickname}</h3>
          <span>{getFormatTime(createdAt, false)}</span>
        </div>
        <span className={styles["vertical-divider"]}></span>
        <div className={styles["favorite-wrapper"]}>
          <img src={favoriteImg.src} />
          <span>{likeCount}</span>
        </div>
      </div>
      <span className={styles["horizontal-divider"]}></span>
      <span className={styles.content}>{content}</span>
    </section>
  );
}
