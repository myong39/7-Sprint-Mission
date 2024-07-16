import ArticleCard from "@/components/ArticleCard";

export function AllArticlesSection({ articles }) {
  return (
    <>
      <div>
        <h1>게시글</h1>
        <div>글쓰기</div>
      </div>
      <div>
        <div>검색</div>
        <div>정렬</div>
      </div>
      {articles?.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </>
  );
}