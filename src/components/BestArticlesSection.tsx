import axios from "@/lib/axios";
import BestArticleCard from "@/components/BestArticleCard";

export function BestArticlesSection({ articles }) {
  return (
    <>
      <h1>베스트 게시글</h1>
      {articles.map((article) => (
        <BestArticleCard key={`best-article-${article.id}`} bestArticle={article} />
      ))}
    </>
  );
}