import React, { useState } from "react";
import styles from "./styles.module.scss";
import searchIcon from "@/assets/icons/ic_search.svg";
import Image from "next/image";

interface InputProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
}

export default function Input({ placeholder, onSearch }: InputProps) {
  const [inputValue, setInputValue] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

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
        placeholder={placeholder || "검색할 항목을 입력해주세요"}
        value={inputValue}
        onChange={onChangeSearch}
      />
    </div>
  );
}
