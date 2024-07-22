import { useEffect, useState } from "react";
import styles from "./Freeboard.module.scss";
import BestArticleItem from "./BestArticleItem";
import { getArticle } from "@/lib/articleApi";
import { Article, ArticleApiData } from "@/types/articleTypes";
import Link from "next/link";
import useDeviceType from "@/hooks/useDeviceType";
import { DeviceTypePageSize } from "@/constants/deviceSizesConstants";
import { ORDER_TYPE_ENUM } from "@/constants/orderConstants";

const { MOBILE_PAGE_SIZE, TABLET_PAGE_SIZE, DESKTOP_PAGE_SIZE } =
  DeviceTypePageSize;

export default function BestArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const { isMobile, isTablet } = useDeviceType();

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
    fetchData({ orderBy: ORDER_TYPE_ENUM.LIKE, pageSize: pageSize });
  }, [pageSize]);

  return (
    <section className={styles["best-article"]}>
      <h1 className={styles.title}>베스트 게시글</h1>
      <div className={styles["card-container"]}>
        {articles.map((article) => (
          <Link href={`/board/${article.id}`} key={article.id}>
            <BestArticleItem article={article} />
          </Link>
        ))}
      </div>
    </section>
  );
}
