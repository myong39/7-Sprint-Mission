import React, { useState } from "react";
import Link from "next/link";
import userImage from "@/public/images/icons/ic_user.svg";
import logoImg from "@/public/images/icons/panda-market-logo.svg";
import styles from "./Header.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NavLink from "../../NavLink";
import Button from "../Button";
import Image from "next/image";

const Header: React.FC = () => {
  const router = useRouter();
  const isLoginOrSignupPage = router.pathname === "/auth/[mode]";
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLogin(!!token);
  }, [router]);

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
          {!isLogin && <Button href="auth/login">로그인</Button>}
          {isLogin && <Image src={userImage} alt="유저 로그인 프로필" />}
        </header>
      )}
    </>
  );
};

export default Header;
