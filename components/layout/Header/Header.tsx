import React from "react";
import Link from "next/link";
import userImage from "@/public/images/icons/ic_user.svg";
import logoImg from "@/public/images/icons/panda-market-logo.svg";
import styles from "./Header.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NavLink from "../../NavLink";
import Button from "../Button";

const Header: React.FC = () => {
  const router = useRouter();
  const isLogin = true;
  const isLoginOrSignupPage =
    router.pathname === "/login" || router.pathname === "/signup";

  useEffect(() => {}, [router]);

  return (
    <>
      {!isLoginOrSignupPage && (
        <header className={styles.nav}>
          <div className={styles["logo-menu"]}>
            <Link href="/">
              <img src={logoImg.src} alt="판다마켓 로고" />
            </Link>
            <div className={styles["menu-area"]}>
              <div className={styles.menu}>
                <h3 className={styles.title}>
                  <NavLink href="/boards">자유게시판</NavLink>
                </h3>
              </div>
              <div className={styles.menu}>
                <h3 className={styles.title}>
                  <NavLink href="/items">중고마켓</NavLink>
                </h3>
              </div>
            </div>
          </div>
          {!isLogin && (
            <Link href="/login">
              <Button href="">로그인</Button>
            </Link>
          )}
          {isLogin && <img src={userImage.src} alt="유저 로그인 프로필"></img>}
        </header>
      )}
    </>
  );
};

export default Header;
