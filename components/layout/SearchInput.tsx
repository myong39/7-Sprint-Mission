import searchImg from "@/public/images/icons/ic_search.svg";
import styles from "./SearchInput.module.scss";
import { KeyboardEvent } from "react";
import Image from "next/image";

export default function SearchInput({
  onSortBySearch,
}: {
  onSortBySearch: (value: string) => void;
}) {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSortBySearch(event.currentTarget.value);
      event.currentTarget.value = "";
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="검색할 상품을 입력해주세요"
        onKeyDown={handleKeyDown}
      />
      <Image className={styles.search} src={searchImg} alt="검색 돋보기" />
    </div>
  );
}
