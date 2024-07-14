import Image from "next/image";
import styles from "./styles.module.scss";
import heartIcon from "@/assets/icons/ic_heart.svg";
import { Article } from "@/pages/api/articles";
import bestBadge from "@/assets/images/img_badge.png";
import { useRouter } from "next/router";
interface BestPostProps {
  article: Article;
}

function BestPost({ article }: BestPostProps) {
  const router = useRouter();

  const handlePostClick = () => {
    router.push(`/boards/${article.id}`);
  };

  return (
    <div className={styles["container"]} onClick={handlePostClick}>
      <Image
        className={styles["best-badge"]}
        src={bestBadge}
        alt="베스트 뱃지"
        width={102}
        height={30}
      />
      <div className={styles["wrapper"]}>
        <div className={styles["best-post-title-container"]}>
          <p className={styles["title"]}>{article.title}</p>
          {article.image && (
            <div className={styles["post-image-container"]}>
              <Image
                className={styles["post-image"]}
                src={article.image}
                alt={article.title}
                width={46}
                height={46}
              />
            </div>
          )}
        </div>
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

export default BestPost;
