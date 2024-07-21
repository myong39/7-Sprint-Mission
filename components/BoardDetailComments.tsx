import Image from "next/image";
import styles from "@/components/BoardDetailComments.module.css";
import { Comments } from "@/lib/type";
import kebab_ic from "@/public/ic_kebab.svg";
import profile_ic from "@/public/ic_profile.svg";
import reply_empty_img from "@/public/Img_reply_empty.svg";

interface Props {
  comments: Comments;
}

function timeAgo(dateString: string): string {
  const now = new Date();
  const pastDate = new Date(dateString);
  const secondsAgo = Math.floor((now.getTime() - pastDate.getTime()) / 1000);

  const units = [
    { name: "년", seconds: 31536000 },
    { name: "개월", seconds: 2592000 },
    { name: "일", seconds: 86400 },
    { name: "시간", seconds: 3600 },
    { name: "분", seconds: 60 },
    { name: "초", seconds: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(secondsAgo / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.name} 전`;
    }
  }

  return "방금 전";
}

export default function BoardDetailComments({ comments }: Props) {
  return (
    <div className={styles.container}>
      {comments.list.length > 0 ? (
        comments.list.map(({ id, content, updatedAt, writer }) => (
          <div className={styles["comment-wrap"]} key={id}>
            <div className={styles["top-wrap"]}>
              <p className={styles.comment}>{content}</p>
              <Image
                src={kebab_ic}
                alt="더보기버튼"
                width="24"
                height="24"
                className={styles["more-btn"]}
              />
            </div>
            <div className={styles["profile-wrap"]}>
              <Image
                src={profile_ic}
                alt="프로필이미지"
                width="32"
                height="32"
                className={styles["profile-img"]}
              />
              <div>
                <div className={styles["profile-name"]}>{writer.nickname}</div>
                <span className={styles["profile-time"]}>
                  {timeAgo(updatedAt)}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles["write-img-wrap"]}>
          <Image
            src={reply_empty_img}
            alt="댓글이미지"
            width="140"
            height="140"
            className={styles["write-img"]}
          />
          <div>
            아직 댓글이 없어요,
            <br /> 지금 댓글을 달아보세요!
          </div>
        </div>
      )}
    </div>
  );
}
