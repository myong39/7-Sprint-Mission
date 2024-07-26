import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from '@/lib/axios';
import { isFormValid } from '@/utils/isFormValid';
import { formatDate } from '@/utils/formatDate';
import { getAccessToken, isLoggedIn } from '@/utils/signIn';
import Nav from '@/components/Nav';
import Container from '@/components/Container';
import Comment from '@/components/Comment';
import styles from '@/styles/board.module.css';
import kebabIcon from '@/assets/images/icons/kebabIcon.svg';
import profileIcon from '@/assets/images/icons/profileIcon.svg';
import likeIcon from '@/assets/images/icons/likeIcon.svg';

export default function Board() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (id) {
      fetchPost(id);
    }
  }, [id]);

  const fetchPost = async (articleId) => {
    try {
      const res = await axios.get(`/articles/${articleId}`);
      setPost(res.data);
    } catch (error) {
      console.error('Failed to fetch post:', error);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn()) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      const accessToken = getAccessToken();
      await axios.post(
        `/articles/${id}/comments`,
        { content: comment },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setComment('');
    } catch (error) {
      alert('댓글 등록에 실패했습니다.');
    }
  };

  if (!post) return <div>Post not found</div>;

  return (
    <>
      <Nav />
      <Container>
        <div className={styles.boardContainer}>
          <div className={styles.articleContainer}>
            <div className={styles.articleWrapper}>
              <div className={styles.articleTitle}>
                <span className={styles.title}>{post.title}</span>
                <Image
                  src={kebabIcon}
                  width={24}
                  height={24}
                  alt='kebob icon'
                />
              </div>
              <div className={styles.articleInfo}>
                <div className={styles.createInfo}>
                  <Image
                    src={profileIcon}
                    width={40}
                    height={40}
                    alt='profile image'
                  />
                  <div className={styles.writingInfo}>
                    <span className={styles.nickname}>
                      {post.writer.nickname}
                    </span>
                    <span className={styles.createdAt}>
                      {formatDate(post.createdAt)}
                    </span>
                  </div>
                </div>
                <div className={styles.likeArticleContainer}>
                  <div className={styles.likeArticleWrapper}>
                    <Image
                      className={styles.likeIcon}
                      src={likeIcon}
                      width={32}
                      height={32}
                      alt='like icon'
                    />
                    <span className={styles.likeCount}>{post.likeCount}</span>
                  </div>
                </div>
              </div>
              <div className={styles.dividingLine}> </div>
            </div>
            <div className={styles.articleContent}>
              <span>{post.content}</span>
            </div>
          </div>
          <div className={styles.commentContainer}>
            <span className={styles.commentTitle}>댓글 달기</span>
            <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
              <input
                className={styles.commentInput}
                placeholder='댓글을 입력해주세요.'
                value={comment}
                onChange={handleCommentChange}
              ></input>
              <button
                className={`${styles.registrationBtn} ${
                  isFormValid({ comment }, ['comment']) ? styles.active : ''
                }`}
                disabled={!isFormValid({ comment }, ['comment'])}
              >
                등록
              </button>
            </form>
          </div>
          <Comment articleId={id} />
        </div>
      </Container>
    </>
  );
}
