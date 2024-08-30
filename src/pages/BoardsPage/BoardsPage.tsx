import { useEffect, useState } from "react";
import BestArticleList from "./BestArticleList";
import AllArticleList from "./AllArticleList";
import styles from "./Freeboard.module.scss";
import { Article } from "@/types/ArticleTypes";
import { getArticle } from "@/lib/articleApi";

const BoardsPage = () => {
  const [initialArticles, setInitialArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const bestRes = await getArticle();
        setInitialArticles(bestRes.list ?? []);
      } catch (error) {
        console.error(error);
        setInitialArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.main}>
      <BestArticleList />
      <AllArticleList initialArticles={initialArticles} />
    </div>
  );
};

export default BoardsPage;
