import AddComment from '@/src/containers/borads-detail/AddComment/AddComment'
import ArticleDetail from '@/src/containers/borads-detail/ArticleDetail/ArticleDetail'
import Comment from '@/src/containers/borads-detail/Comment/Comment'

export default function ArticlePage() {
  return (
    <>
      <ArticleDetail />
      <AddComment />
      <Comment />
    </>
  )
}
