import { useEffect, useState } from "react";
import styles from "./Freeboard.module.scss";
import AllArticleItem from "./AllArticleItem";
import { Article, ArticleApiData } from "@/types/articleTypes";
import SearchInput from "@/components/layout/SearchInput";
import Button from "@/components/layout/Button";
import Link from "next/link";
import { getArticle } from "@/lib/articleApi";
import { useRouter } from "next/router";
import SortDropdown from "../layout/Dropdown/SortDropdown";
import {
  defaultOrderType,
  orderTypeKeysKR,
  orderTypeKR,
  orderTypeUS,
} from "@/constants/orderConstants";

export default function AllArticleList({
  initialArticles,
}: {
  initialArticles: Article[];
}) {
  const [articles, setArticles] = useState(initialArticles);
  const [orderBy, setOrderBy] = useState(defaultOrderType);
  const items = orderTypeKeysKR;

  const router = useRouter();
  const keyword = router.query.q;

  const handleOrderChange = (option: string) => {
    setOrderBy(orderTypeUS[option as keyof typeof orderTypeUS]);
  };

  const fetchData = async ({ orderBy, pageSize, keyword }: ArticleApiData) => {
    try {
      const searchKeyword = Array.isArray(keyword) ? keyword[0] : keyword;
      const result = await getArticle({
        orderBy,
        pageSize,
        keyword: searchKeyword,
      });

      setArticles(() => result.list);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSortBySearch = (value: string) => {
    const searchValue = value.trim();

    if (!searchValue) {
      router.push("/boards");
      return;
    }

    router.push(`/boards?q=${searchValue}`);
  };

  useEffect(() => {
    fetchData({ orderBy: orderBy, keyword: keyword });
  }, [orderBy, keyword]);

  return (
    <section className={styles["all-article"]}>
      <div className={styles["all-title-wrapper"]}>
        <h1 className={styles.title}>게시글</h1>
        <Button href="/addboard">글쓰기</Button>
      </div>
      <div className={styles["search-wrapper"]}>
        <SearchInput onSortBySearch={handleSortBySearch} />
        <SortDropdown
          onOrderChange={handleOrderChange}
          items={items}
          defaultOrderType={orderTypeKR[defaultOrderType]}
        />
      </div>
      {articles.length
        ? articles.map((article) => (
            <Link href={`/board/${article.id}`} key={article.id}>
              <AllArticleItem article={article} />
            </Link>
          ))
        : keyword && <div>{`'${keyword}'(으)로 검색된 결과가 없습니다.`}</div>}
    </section>
  );
}
