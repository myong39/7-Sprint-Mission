import Image from "next/image";
import styles from "@/components/BoardDetailInfo.module.css";
import { Articles } from "@/lib/type";
import kebab_ic from "@/public/ic_kebab.svg";
import profile_ic from "@/public/ic_profile.svg";
import heart_ic from "@/public/ic_heart_2.svg";

interface Props {
  article: Articles;
}

export default function BoardDetailInfo({ article }: Props) {
  const { title, likeCount, updatedAt, writer, content } = article;
  return (
    <div className={styles.container}>
      <div className={styles["top-wrap"]}>
        <h2 className={styles.title}>{title}</h2>
        <Image
          src={kebab_ic}
          alt="더보기버튼"
          width="24"
          height="24"
          className={styles["more-btn"]}
        />
      </div>
      <div className={styles["bottom-wrap"]}>
        <div className={styles["profile-wrap"]}>
          <Image src={profile_ic} alt="프로필이미지" width="40" height="40" />
          <div className={styles.nickname}>{writer.nickname}</div>
          <div className={styles.updatedAt}>
            {updatedAt.replace(/-/g, ".").split("T")[0]}
          </div>
        </div>
        <button type="button" title="좋아요버튼" className={styles["like-btn"]}>
          <Image
            src={heart_ic}
            alt="하트이미지"
            width="32"
            height="32"
            className={styles["like-img"]}
          />
          <span className={styles["like-count"]}>{likeCount}</span>
        </button>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
