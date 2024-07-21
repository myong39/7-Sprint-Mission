import { useRouter } from 'next/router';
import { getArticleComment, getArticleId } from '@/lib/axios';
import { useEffect, useState } from 'react';
import { Article, Comment } from '@/types/Article';
import style from '@/styles/boardsId.module.css';
import CommentItem from '@/components/Article/CommentItem';
import Image from 'next/image';

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
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.articleContainer}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      {article.image ? (
        <div className={style.ImgContainer}>
          <Image
            fill
            src={article.image}
            alt={'Img from User'}
            className={style.articleImage}
          />
        </div>
      ) : null}
      <div className={style.articleFooter}>
        <span>{article.writer.nickname}</span>
        <span>{new Date(article.createdAt).toLocaleDateString()}</span>
        <span>{article.likeCount}</span>
      </div>

      <div>
        <p>댓글달기</p>
        <input type="text" />
        <button>등록</button>
      </div>
      <div className={style.CoomentItemOutContainer}>
        {comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </div>
      <button>목록으로 돌아가기</button>
    </div>
  );
}
