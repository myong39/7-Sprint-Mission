import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuTab() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Link
        href="/boards"
        className={
          pathname === "/boards"
            ? styles["menu-tab-active"]
            : styles["menu-tab"]
        }
      >
        자유게시판
      </Link>
      <Link
        href="/items"
        className={
          pathname === "/items" ? styles["menu-tab-active"] : styles["menu-tab"]
        }
      >
        중고마켓
      </Link>
    </>
  );
}
