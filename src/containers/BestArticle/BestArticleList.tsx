import { useState, useEffect } from 'react'
import useFetechData from '@/src/hooks/useFetechData'
import { ArticleListResponse } from '@/src/interfaces/Article.interface'
import BestArticle from './BestArticle'
import Spiner from '@/src/components/Spinner/Spinner'
import styles from './BestArticle.module.scss'

const getPageSize = () => {
  if (typeof window === 'undefined') {
    return 3
  }

  const width = window.innerWidth
  if (width < 768) return 1
  else if (width < 1280) return 2
  else return 3
}

export default function BestArticleList() {
  const [pageSize, setPageSize] = useState<number>(getPageSize())

  const fetechArticles = useFetechData<ArticleListResponse>(
    `articles?page=1`,
    pageSize,
    'like'
  )
  const { data: ArticleList, isLoading } = fetechArticles

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize())
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isLoading) {
    return <Spiner />
  }
  if (ArticleList?.totalCount === 0) {
    return <>게시글이 없습니다.</>
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>베스트 게시글</div>

      <div className={styles.articlesSection}>
        {ArticleList?.list?.map((article) => (
          <BestArticle article={article} key={article.id} />
        ))}
      </div>
    </div>
  )
}
