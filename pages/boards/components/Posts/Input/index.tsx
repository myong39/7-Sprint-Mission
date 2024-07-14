import React from "react";
import styles from "./styles.module.scss";
import searchIcon from "@/assets/icons/ic_search.svg";
import Image from "next/image";
import { useState } from "react";
interface InputProps {
  placeholder?: string;
}

export default function Input() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={styles["input-box"]}>
      <Image
        className={styles["search-icon"]}
        src={searchIcon}
        alt="돋보기아이콘"
      />
      <input
        className={styles["input"]}
        type="search"
        name="searchItems"
        placeholder="검색할 상품을 입력해주세요"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
