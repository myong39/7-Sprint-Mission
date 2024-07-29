import Link from "next/link";
import styles from "@/components/Header/components/List/styles.module.scss";

function HeaderList() {
  return (
    <div className={styles["item"]}>
      <Link href="/boards" className={styles["item-list"]}>
        자유게시판
      </Link>
      <Link href="/items" className={styles["item-list"]}>
        중고마켓
      </Link>
    </div>
  );
}

export default HeaderList;
