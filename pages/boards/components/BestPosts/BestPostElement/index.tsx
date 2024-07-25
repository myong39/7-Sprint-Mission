import styles from "./styles.module.scss";
import Image from "next/image";
import bestBadge from "@/assets/images/best_badge.svg";
import likeIcon from "@/assets/icons/ic_like.svg";

interface Post {
  id: number;
  title: string;
  writer: { nickname: string };
  likeCount: number;
  image?: string;
  updatedAt: string;
}

interface BestPostElementProps {
  post: Post;
}

export default function BestPostElement({ post }: BestPostElementProps) {
  return (
    <div className={styles["best-post-container"]}>
      <div className={styles["contents-wrapper"]}>
        <Image
          src={bestBadge}
          className={styles["best-badge"]}
          alt="베스트 뱃지"
          width={102}
          height={30}
        />
        <div className={styles["contents"]}>
          <p className={styles["post-title"]}>{post.title}</p>
          {post.image && (
            <div className={styles["post-image-box"]}>
              <Image
                width={42}
                height={42}
                className={styles["post-image"]}
                src={post.image}
                alt="게시글이미지"
              />
            </div>
          )}
        </div>
        <div className={styles["contents-footer"]}>
          <div className={styles["nickname-and-like"]}>
            <p>{post.writer.nickname}</p>
            <div className={styles["like"]}>
              <Image src={likeIcon} alt="좋아요하트" />
              <p>{post.likeCount}</p>
            </div>
          </div>
          <p className={styles["date"]}>
            {new Date(post.updatedAt).toLocaleDateString("ko-KR")}
          </p>
        </div>
      </div>
    </div>
  );
}
