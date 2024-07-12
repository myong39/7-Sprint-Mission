import ArticleList from '../containers/Article/ArticleList'
import BestArticleList from '../containers/BestArticle/BestArticleList'

export default function BoardPage() {
  return (
    <>
      <BestArticleList />
      <ArticleList />
    </>
  )
}
