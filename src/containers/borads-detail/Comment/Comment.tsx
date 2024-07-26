import Image from 'next/image'
import { useRouter } from 'next/router'
import useFetchData from '@/src/hooks/useFetechData'
import styles from './Comment.module.scss'
import { CommentListResponse } from '@/src/interfaces/Comment.interface'
import Spinner from '@/src/components/Spinner/Spinner'
import formatDate from '@/src/utils/formaDate'
import seemoreIcon from '@/public/svgs/seemore.svg'
import defaultProfileIcon from '@/public/svgs/default-profile.svg'
import commentIcon from '@/public/svgs/comment.svg'
import backIcon from '@/public/svgs/back-page.svg'
import { Fragment } from 'react'

export default function Comment() {
  const router = useRouter()
  const { id } = router.query
  const goToBoardsPage = () => {
    router.push('/boards')
  }
  const url = `/article/${id}/comments?limit=3`

  const fetechComments = useFetchData<CommentListResponse>(url)
  const { data: comments, isLoading } = fetechComments

  if (isLoading) {
    return <Spinner />
  }

  if (comments === undefined) {
    return (
      <Fragment key={commentIcon.id}>
        <Image
          src={commentIcon}
          alt="빈 댓글 아이콘"
          width={140}
          height={140}
        />
        <div className={styles.emptyComment}>
          아직 댓글이 없어요, <br />
          지금 댓글을 달아보세요!
        </div>
        <button className={styles.backButton} onClick={goToBoardsPage}>
          목록으로 돌아가기
          <Image src={backIcon} alt="뒤로 가기 아이콘" width={24} height={24} />
        </button>
      </Fragment>
    )
  }

  return (
    <div className={styles.container}>
      {comments?.list?.map((comment) => (
        <>
          <div className={styles.contentSection}>
            <div className={styles.content}>{comment.content}</div>
            <Image
              src={seemoreIcon}
              width={24}
              height={24}
              alt="더보기 아이콘"
            />
          </div>

          <div className={styles.writerSection}>
            <Image
              src={defaultProfileIcon}
              alt="기본 프로필 이미지"
              width={32}
              height={32}
            />
            <div className={styles.writer}>
              <div className={styles.nickname}>{comment.writer.nickname}</div>
              <div className={styles.createdAt}>
                {formatDate(comment.createdAt)}
              </div>
            </div>
          </div>

          <hr className={styles.hr} />
        </>
      ))}

      <div className={styles.backButtonSection}>
        <button className={styles.backButton} onClick={goToBoardsPage}>
          목록으로 돌아가기
          <Image src={backIcon} alt="뒤로 가기 아이콘" width={24} height={24} />
        </button>
      </div>
    </div>
  )
}
