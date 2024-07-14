import { useEffect, useState } from "react";
import styles from "./Freeboard.module.scss";
import BestArticleItem from "./BestArticleItem";
import { getArticle } from "@/lib/articleApi";
import { Article, ArticleApiData } from "@/types/ArticleTypes";
import Link from "next/link";
import useDeviceType from "@/hooks/useDeviceType";
import { DeviceTypePageSize } from "@/types/ArticleTypes";

const ORDERBY = "like";

export default function BestArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const { isMobile, isTablet } = useDeviceType();
  const { MOBILE_PAGE_SIZE, TABLET_PAGE_SIZE, DESKTOP_PAGE_SIZE } =
    DeviceTypePageSize;

  const pageSize = isTablet
    ? TABLET_PAGE_SIZE
    : isMobile
    ? MOBILE_PAGE_SIZE
    : DESKTOP_PAGE_SIZE;

  const fetchData = async ({ orderBy, pageSize }: ArticleApiData) => {
    try {
      const result = await getArticle({ orderBy, pageSize });

      setArticles(() => result.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData({ orderBy: ORDERBY, pageSize: pageSize });
  }, [pageSize]);

  return (
    <section className={styles["best-article"]}>
      <h1 className={styles.title}>베스트 게시글</h1>
      <div className={styles["card-container"]}>
        {articles.map((article) => (
          <Link href={`/article/${article.id}`} key={article.id}>
            <BestArticleItem article={article} />
          </Link>
        ))}
      </div>
    </section>
  );
}
