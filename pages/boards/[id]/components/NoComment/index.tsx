import Image from "next/image";
import replyEmptyImage from "@/assets/images/img_reply_empty.png";
import styles from "@/pages/boards/[id]/components/NoComment/styles.module.scss";

function NoComment() {
  return (
    <div className={styles["container"]}>
      <Image src={replyEmptyImage} alt="댓글 없음" width={140} height={140} />
      <p className={styles["description"]}>
        아직 댓글이 없어요, <br />
        지금 댓글을 달아보세요!
      </p>
    </div>
  );
}

export default NoComment;
