import React from "react";
import logoImg from "@/public/images/icons/panda-market-logo.svg";
import Image from "next/image";
import styles from "./Auth.module.scss";
import Link from "next/link";

function GoHomeLogo() {
  return (
    <section className={styles["go-home-logo"]}>
      <Link href="/">
        <img src={logoImg.src} alt="판다 마켓 홈" width="396" />
      </Link>
    </section>
  );
}

export default GoHomeLogo;
