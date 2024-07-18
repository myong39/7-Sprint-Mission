import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/SearchForm.module.css";
import search_ic from "@/public/ic_search.svg";

export default function SearchForm() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    router.push(`board?keyword=${value}`);
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
        className={styles["search-input"]}
        id="search"
        placeholder="검색할 상품을 입력해주세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </form>
  );
}
