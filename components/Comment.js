import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from '@/lib/axios';
import { formatDate } from '@/utils/formatDate';
import ActiveBtn from '@/components/ActiveBtn';
import styles from '@/components/Comment.module.css';
import kebabIcon from '@/assets/images/icons/kebabIcon.svg';
import profileIcon from '@/assets/images/icons/profileIcon.svg';
import commentEmptyImg from '@/assets/images/commentEmptyImg.png';
import backIcon from '@/assets/images/icons/backIcon.svg';

export default function Comment({ articleId }) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    if (articleId) {
      fetchComments(articleId);
    }
  }, [articleId]);

  const fetchComments = async (articleId, limit = 10, cursor = 1) => {
    try {
      const res = await axios.get(`articles/${articleId}/comments`, {
        params: {
          limit: limit,
        },
      });
      setCommentList(res.data.list);
    } catch (error) {
      console.error('Failed to fetch list:', error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {commentList.length > 0 ? (
          <div className={styles.commentContainer}>
            {commentList.map((comment) => (
              <div key={comment.id} className={styles.commentWrapper}>
                <div className={styles.comment}>
                  <div className={styles.commentTitle}>
                    <span className={styles.commentContent}>
                      {comment.content}
                    </span>
                    <Image
                      src={kebabIcon}
                      width={24}
                      height={24}
                      alt='kebob icon'
                    />
                  </div>
                  <div className={styles.commentWriter}>
                    <Image
                      src={comment.writer.image || profileIcon}
                      width={32}
                      height={32}
                      alt='comment writer profile icon'
                    />
                    <div className={styles.writingInfo}>
                      <span className={styles.nickname}>
                        {comment.writer.nickname}
                      </span>
                      <span className={styles.createdAt}>
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyCommentContainer}>
            <Image
              src={commentEmptyImg}
              width={140}
              height={140}
              alt='Image indicating that there are no comments.'
            />
            <span className={styles.emptyCommentMessage}>
              아직 댓글이 없어요,
              <p></p>
              <p></p>
              지금 댓글을 달아보세요!
            </span>
          </div>
        )}
      </div>
      <div className={styles.backBtnContainer}>
        <Link className={styles.backBtnLink} href='/boards'>
          <ActiveBtn className={styles.backBtn}>
            <span className={styles.backBtnText}>목록으로 돌아가기</span>
            <Image src={backIcon} width={24} height={24} alt='back icon' />
          </ActiveBtn>
        </Link>
      </div>
    </>
  );
}
