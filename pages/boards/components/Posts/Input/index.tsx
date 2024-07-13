import React from "react";
import styles from "./styles.module.scss";
import searchIcon from "@/assets/icons/ic_search.svg";
import Image from "next/image";
interface InputProps {
  placeholder?: string;
}

export default function Input() {
  return (
    <div className={styles["input-box"]}>
      <Image className={styles['search-icon']} src={searchIcon} alt="돋보기아이콘" />
      <input
        className={styles["input"]}
        type="text"
        name="searchItems"
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}
