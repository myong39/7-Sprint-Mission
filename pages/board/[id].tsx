import { getArticle, getArticleComment } from "@/lib/articleApi";
import styles from "@/components/board/BoardDetailArticle.module.scss";
import CommentsSection from "@/components/layout/Comment.tsx/CommentsSection";
import RegisterForm from "@/components/layout/RegisterForm/RegisterForm";
import GoBackToListButton from "@/components/layout/Comment.tsx/GoBackToListButton";
import { useEffect, useState } from "react";
import {
  ArticleApiData,
  ArticleCommentApiData,
  CommentObject,
} from "@/types/articleTypes";
import { useRouter } from "next/router";
import { commentInfo, fields } from "@/components/board/BoardDetailConfig";
import BoardDetailArticle from "@/components/board/BoardDetailArticle";

export default function FreeBoardDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [comments, setComments] = useState<CommentObject>(commentInfo);
  const formFields = fields;
  const [article, setArticle] = useState({
    id: 0,
    title: "",
    content: "",
    image: null,
    createdAt: "",
    updatedAt: "",
    isLiked: false,
    likeCount: 0,
    writer: {
      id: 0,
      nickname: "",
    },
  });

  const fetchDataArticle = async ({ articleId }: ArticleApiData) => {
    try {
      const result = await getArticle({
        articleId,
        detail: true,
      });

      setArticle(() => result);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataComment = async ({ articleId }: ArticleCommentApiData) => {
    try {
      const result = await getArticleComment({ articleId });

      setComments({
        ...comments,
        comments: result.list,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchDataArticle({ articleId: id });
      fetchDataComment({ articleId: id });
    }
  }, [id]);

  return (
    <div className={styles["freeboard-detail-main"]}>
      <BoardDetailArticle article={article} />
      <RegisterForm fields={formFields} bottomButon={true} />
      <CommentsSection comments={comments} className={styles["comment"]} />
      <GoBackToListButton href="/boards" />
    </div>
  );
}
