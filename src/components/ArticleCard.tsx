export default function ArticleCard({ article }) {
  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </>
  );
}