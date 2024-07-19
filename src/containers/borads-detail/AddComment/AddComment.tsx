import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'
import Spinner from '@/src/components/Spinner/Spinner'
import styles from './AddComment.module.scss'

export default function AddComment() {
  const router = useRouter()
  const { id } = router.query
  const url = `/articles/${id}/comments`

  const [comment, setComment] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await axios.post(url, { content: comment })
      setComment('')
    } catch (err) {
      setError('댓글을 작성할 수 없습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  const isButtonDisabled = comment.trim() === '' || isLoading

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>댓글 달기</div>
      <form onSubmit={handleSubmit} className={styles.commentContainer}>
        <textarea
          className={styles.commentInput}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 입력해주세요."
          required
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <button
            className={styles.submitButton}
            type="submit"
            disabled={isButtonDisabled}
          >
            등록
          </button>
        )}
        {error && <div>{error}</div>}
      </form>
    </div>
  )
}
