import { useEffect, useState } from "react";
import BestPost from "./BestArticleItem";
import styles from "@/pages/boards/components/BestArticle/styles.module.scss";
import { getArticles, Article, ApiResponse } from "@/services/articles";

function BestArticle() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const params = {
          page: 1,
          pageSize: 3,
          orderBy: "like",
          keyword: "",
        };
        const response = await getArticles(params);
        const { data }: { data: ApiResponse<Article> } = response;
        setArticles(data.list);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다..!", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className={styles["container"]}>
      <label className={styles["title"]}>베스트 게시글</label>
      <div className={styles["best-post-wrapper"]}>
        {articles.map((article) => (
          <BestPost key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default BestArticle;
