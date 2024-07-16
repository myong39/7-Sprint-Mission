import { useEffect, useState } from "react";
import styles from "./Freeboard.module.scss";
import AllArticleItem from "./AllArticleItem";
import { Article, ArticleApiData } from "@/types/articleTypes";
import SearchInput from "@/components/layout/SearchInput";
import Button from "@/components/layout/Button";
import Dropdown from "@/components/layout/Dropdown";
import Link from "next/link";
import { getArticle } from "@/lib/articleApi";
import { useRouter } from "next/router";

export default function AllArticleList({
  initialArticles,
}: {
  initialArticles: Article[];
}) {
  const [articles, setArticles] = useState(initialArticles);
  const [orderBy, setOrderBy] = useState<ArticleApiData["orderBy"]>("recent");

  const router = useRouter();
  const keyword = router.query.q;

  const handleOrderChange = (option: string) => {
    if (option === "recent" || option === "like") setOrderBy(option);
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
        <Button href="">글쓰기</Button>
      </div>
      <div className={styles["search-wrapper"]}>
        <SearchInput onSortBySearch={handleSortBySearch} />
        <Dropdown onOrderChange={handleOrderChange} />
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
