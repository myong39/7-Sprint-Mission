import { Article } from "@/types/ArticleTypes";
import styles from "./BoardDetailArticle.module.scss";
import defalutProfleImg from "@/assets/images/icons/ic_user.svg";
import kebabImg from "@/assets/images/icons/ic_kebab.svg";
import favoriteImg from "@/assets/images/icons/ic_heart.svg";
import { getFormatTime } from "@/utils/Utils";

interface BoardDetailArticleProps {
  article: Article;
}

const BoardDetailArticle: React.FC<BoardDetailArticleProps> = ({
  article: {
    title,
    content,
    writer: { nickname },
    likeCount,
    createdAt,
  },
}) => {
  return (
    <section className={styles["board-detail-article-section"]}>
      <div className={styles["title-wrapper"]}>
        <h1>{title}</h1>
        <img src={kebabImg} alt="더보기" />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["user-wrapper"]}>
          <img src={defalutProfleImg} alt="기본 유저 프로필" />
          <h3>{nickname}</h3>
          <span>{getFormatTime(createdAt, false)}</span>
        </div>
        <span className={styles["vertical-divider"]}></span>
        <div className={styles["favorite-wrapper"]}>
          <img src={favoriteImg} alt="즐겨찾기" />
          <span>{likeCount}</span>
        </div>
      </div>
      <span className={styles["horizontal-divider"]}></span>
      <span className={styles.content}>{content}</span>
    </section>
  );
};

export default BoardDetailArticle;
