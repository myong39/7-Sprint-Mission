import { Article } from "@/types/ArticleTypes";
import styles from "./BoardDetailArticle.module.scss";
import defalutProfleImg from "@/public/images/icons/ic_user.svg";
import kebabImg from "@/public/images/icons/ic_kebab.svg";
import favoriteImg from "@/public/images/icons/ic_heart.svg";
import { getFormatTime } from "@/utils/Utils";
import Image from "next/image";

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
        <Image src={kebabImg} alt="더보기" />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["user-wrapper"]}>
          <Image src={defalutProfleImg} alt="기본 유저 프로필" />
          <h3>{nickname}</h3>
          <span>{getFormatTime(createdAt, false)}</span>
        </div>
        <span className={styles["vertical-divider"]}></span>
        <div className={styles["favorite-wrapper"]}>
          <Image src={favoriteImg} alt="즐겨찾기" />
          <span>{likeCount}</span>
        </div>
      </div>
      <span className={styles["horizontal-divider"]}></span>
      <span className={styles.content}>{content}</span>
    </section>
  );
}
