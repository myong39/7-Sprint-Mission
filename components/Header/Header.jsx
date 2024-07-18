import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles["header-wrapper"]}>
      <nav className={styles.gnb}>
        <div className={styles["gnb-left"]}>
          <Link href="/boards">
            <Image
              width={151}
              height={51}
              src="/logo_pandamarket.svg"
              alt="판다마켓로고 이미지"
            />
          </Link>
          <Link href="/boards">자유게시판</Link>
          <Link href="/boards">중고마켓</Link>
        </div>
        <Link
          href="/boards"
          className={`${styles["gnb-right"]} ${styles["gnb-login"]}`}
        >
          로그인
        </Link>
      </nav>
    </header>
  );
};

export default Header;
