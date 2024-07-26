import React from "react";
import backImg from "@/public/images/icons/ic_back.svg";
import Link from "next/link";
import styles from "./Commtent.module.scss";
import Image from "next/image";

export default function GoBackToListButton({ href = "" }: { href?: string }) {
  return (
    <Link href={href}>
      <button className={styles["go-back-button"]}>
        목록으로 돌아가기
        <img src={backImg.src} alt="뒤로 돌아가는 화살표" />
      </button>
    </Link>
  );
}
