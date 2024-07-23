import { useRouter } from 'next/router';
import { getArticleComment, getArticleId } from '@/lib/axios';
import { useEffect, useState } from 'react';
import { Article, Comment } from '@/types/Article';
import style from '@/styles/boardsId.module.css';
import CommentItem from '@/components/Article/CommentItem';
import Image from 'next/image';
import profile from '@/asset/images/profile1.png';

export default function Board() {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState<Article | null>(null);
  useEffect(() => {
    const fetchBoard = async () => {
      if (id) {
        const article = await getArticleId(Number(id));
        setArticle(article);
      }
    };
    fetchBoard();
  }, [id]);

  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
      const fetchedComments = await getArticleComment(Number(id), 9);
      setComments(fetchedComments);
    };
    fetchComments();
  }, [id]);

  const [commentText, setCommentText] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value); // input 값 변경 시 상태 업데이트
  };

  const goToBoards = () => {
    router.push('/boards');
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.articleContainer}>
      <div className={style.articleWriterInfo}>
        <div className={style.WriterInfo}>
          <h1>{article.title}</h1>
          <div className={style.wrtierInfoBottom}>
            <div className={style.ImgNickAndDate}>
              <Image src={profile} alt={'UserImg'} width={40} height={40} />
              <div className={style.articleFooter}>
                <span>{article.writer.nickname}</span>
                <span className={style.CreateDate}>
                  {new Date(article.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <span className={style.LikeCount}>❤️ {article.likeCount}</span>
          </div>
        </div>
      </div>
      {article.image ? (
        <div className={style.ImgContainer}>
          <Image
            fill
            src={article.image}
            alt={'This Img is Uploaded from User'}
            className={style.articleImage}
          />
        </div>
      ) : null}
      <p className={style.Content}>{article.content}</p>
      <div>
        <p className={style.DoComment}>댓글달기</p>
        <div className={style.InputContainer}>
          <input
            type="text"
            placeholder={'댓글을 입력해주세요'}
            value={commentText}
            className={style.CommentInput}
            onChange={handleInputChange}
          />
          <button className={style.CommentButton} disabled={!commentText}>
            등록
          </button>
        </div>
      </div>
      <div className={style.CoomentItemOutContainer}>
        {comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </div>
      <div className={style.GoToBoardsContainer}>
        <button className={style.GotoBoards} onClick={goToBoards}>
          목록으로 돌아가기
        </button>
      </div>
    </div>
  );
}
