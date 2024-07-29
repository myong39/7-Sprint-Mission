import Image from "next/image";
import styles from "@/pages/boards/components/BestArticle/BestArticleItem/styles.module.scss";
import heartIcon from "@/assets/icons/ic_heart.svg";
import { Article } from "@/services/articles";
import bestBadge from "@/assets/images/img_badge.svg";
import Link from "next/link";
interface BestArticleItemProps {
  article: Article;
}

function BestArticleItem({ article }: BestArticleItemProps) {
  return (
    <div className={styles["container"]}>
      <Image
        className={styles["best-badge"]}
        src={bestBadge}
        alt="베스트 뱃지"
        width={102}
        height={30}
      />
      <div className={styles["wrapper"]}>
        <Link
          className={styles["best-post-title-container"]}
          href={`/boards/${article.id}`}
        >
          <p className={styles["title"]}>{article.title}</p>
          {article.image && (
            <div className={styles["post-image-container"]}>
              <img
                className={styles["post-image"]}
                src={article.image}
                alt={article.title}
                width={46}
                height={46}
              />
            </div>
          )}
        </Link>
        <div className={styles["post-user-container"]}>
          <div className={styles["post-user-like"]}>
            <span className={styles["user-name"]}>
              {article.writer.nickname}
            </span>
            <div className={styles["like-wrapper"]}>
              <Image src={heartIcon} alt="좋아요" width={20} height={20} />
              <span className={styles["like-count"]}>{article.likeCount}</span>
            </div>
          </div>
          <span className={styles["date"]}>
            {new Date(article.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BestArticleItem;
