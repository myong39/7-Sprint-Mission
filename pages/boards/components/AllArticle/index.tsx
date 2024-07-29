import Image from "next/image";
import Dropdown from "./Dropdown";
import styles from "@/pages/boards/components/AllArticle/styles.module.scss";
import searchIcon from "@/assets/icons/ic_search.svg";
import AllPost from "./AllArticleItem";
import { useEffect, useMemo, useState } from "react";
import { getArticles, Article, ApiResponse } from "@/services/articles";
import Link from "next/link";

function All() {
  const options = ["최신순", "좋아요순"];
  const [orderBy, setOrderBy] = useState<"recent" | "like">("recent");
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const params = { orderBy, keyword: searchKeyword };
        const response = await getArticles(params);
        const { data }: { data: ApiResponse<Article> } = response;
        setArticles(data.list);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다..!", error);
      }
    };

    fetchArticles();
  }, [orderBy, searchKeyword]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => article.title.includes(searchKeyword));
  }, [articles, searchKeyword]);

  const handleSortChange = (option: string) => {
    if (option === "최신순") {
      setOrderBy("recent");
    } else if (option === "좋아요순") {
      setOrderBy("like");
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["all-post-top-header"]}>
        <label className={styles["title"]}>게시글</label>
        <Link href={`/addboard`}>
          <button className={styles["button"]}>글쓰기</button>
        </Link>
      </div>
      <div className={styles["all-post-bottom-header"]}>
        <div className={styles["search-container"]}>
          <Image
            src={searchIcon}
            alt="검색"
            className={styles["search-icon"]}
            width={24}
            height={24}
          />
          <input
            type="search"
            className={styles["search"]}
            placeholder="검색할 키워드를 입력해주세요"
            value={searchKeyword}
            onChange={handleSearchChange}
          />
        </div>
        <Dropdown
          options={options}
          defaultOption="최신순"
          onChange={handleSortChange}
        />
      </div>
      {filteredArticles.map((article) => (
        <AllPost key={article.id} article={article} />
      ))}
    </div>
  );
}

export default All;
