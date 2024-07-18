import styles from "@/styles/404.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div>존재하지않는페이지입니다</div>
      <Link href="/">
        <button type="button">홈으로 돌아가기</button>
      </Link>
    </div>
  );
}
