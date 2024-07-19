export default function BestArticleCard({ bestArticle }) {
  return (
    <>
      <h2>{bestArticle.title}</h2>
      <p>{bestArticle.content}</p>
    </>
  );
}