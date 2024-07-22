import styles from "@/components/BestPost.module.css";
import Image from "next/image";
import best_img from "@/public/img_badge.svg";
import heart_ic from "@/public/ic_heart.svg";
import { PostProps } from "@/lib/type";

export default function BestPost({ article, ...rest }: PostProps) {
  const { title, image, writer, updatedAt, likeCount } = article;

  return (
    <div className={styles.container} {...rest}>
      <Image
        src={best_img}
        alt="베스트뱃지이미지"
        width="102"
        height="30"
        className={styles["badge-img"]}
      />
      <div className={styles["description-wrap"]}>
        <div className={styles.title}>{title}</div>
        {image && (
          <Image
            src={image}
            alt="게시글이미지"
            width="72"
            height="72"
            className={styles["post-img"]}
          />
        )}
      </div>
      <div className={styles["bottom-wrap"]}>
        <div className={styles["nickname-wrap"]}>
          <div className={styles.nickname}>{writer.nickname}</div>
          <div className={styles["favorite-wrap"]}>
            <button
              type="button"
              title="좋아요버튼"
              className={styles["favorite-btn"]}
            >
              <Image
                src={heart_ic}
                alt="좋아요아이콘"
                width="16"
                height="16"
                className={styles["favorite-img"]}
              />
            </button>
            <span className={styles["favorite-count"]}>{likeCount}</span>
          </div>
        </div>
        <div className={styles.date}>
          {updatedAt.replace(/-/g, ".").split("T")[0]}
        </div>
      </div>
    </div>
  );
}
