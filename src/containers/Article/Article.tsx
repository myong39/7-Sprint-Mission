import Image from 'next/image'
import styles from './Article.module.scss'
import formatDate from '@/src/utils/formaDate'
import { Article } from '@/src/interfaces/Article.interface'
import defaultProfileIcon from '@/public/svgs/default-profile.svg'
import heartIcon from '@/public/svgs/heartIcon.svg'

export default function Article({ article }: { article: Article }) {
  const articleImage = article.image || ''
  const createdAt = formatDate(article.createdAt)

  return (
    <div className={styles.article}>
      <div className={styles.contentSection}>
        <div className={styles.title}>{article.title}</div>
        <div
          className={styles.image}
          style={{
            border: articleImage === '' ? 'none' : '1px solid var(--gray-200)',
          }}
        >
          {articleImage && (
            <Image
              src={articleImage}
              alt="게시글 이미지"
              width={50}
              height={50}
            />
          )}
        </div>
      </div>

      <div className={styles.subContentSection}>
        <div className={styles.writerSection}>
          <div className={styles.nickname}>
            <Image
              src={defaultProfileIcon}
              alt="기본 프로필 이미지"
              width={24}
              height={24}
            />
            {article.writer.nickname}
          </div>
          <div className={styles.date}>{createdAt}</div>
        </div>
        <div className={styles.likeCount}>
          <Image src={heartIcon} alt="하트 아이콘" width={20} height={20} />
          {article.likeCount}
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  )
}
