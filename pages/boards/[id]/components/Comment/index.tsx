import styles from "./styles.module.scss";
import profileImg from "@/assets/icons/profileImg.svg";
import Image from "next/image";
import kebabIcon from "@/assets/icons/ic_kebab.svg";

export default function Comment() {
  return (
    <div className={styles["comment-card"]}>
      <div className={styles["card-top-line"]}>
        <p className={styles["comment-text"]}>
          혹시 사용기간이 어떻게 되실까요?
        </p>
        <Image src={kebabIcon} alt="케밥아이콘" />
      </div>
      <div className={styles["comment-information-container"]}>
        <Image src={profileImg} alt="프로필이미지" />
        <div className={styles["nickname-and-time"]}>
          <p className={styles["nickname"]}>nickname</p>
          <p className={styles["time"]}>1시간전</p>
        </div>
      </div>
    </div>
  );
}
