import { FormEvent, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/SearchForm.module.css";
import search_ic from "@/public/ic_search.svg";

export default function SearchForm() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = inputRef.current?.value.trim();

    if (!value || /^\s+$/.test(value)) {
      alert("검색어를 입력해주세요");
      return;
    }

    router.push(`board?keyword=${encodeURIComponent(value)}`);
  };

  return (
    <form className={styles["search-form"]} onSubmit={handleFormSubmit}>
      <label htmlFor="search" className={styles["search-label"]}>
        <Image
          src={search_ic}
          alt="검색아이콘"
          width="24"
          height="24"
          className={styles["search-img"]}
        />
      </label>
      <input
        ref={inputRef}
        className={styles["search-input"]}
        id="search"
        placeholder="검색할 상품을 입력해주세요"
      ></input>
    </form>
  );
}
