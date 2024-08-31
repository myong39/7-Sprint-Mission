import { getArticle, getArticleComment } from "@/lib/articleApi";
import styles from "./BoardDetailArticle.module.scss";
import CommentsSection from "@/components/Layout/Comment/CommentsSection";
import RegisterForm from "@/components/Layout/RegisterForm/RegisterForm";
import GoBackToListButton from "@/components/Layout/Comment/GoBackToListButton";
import { useEffect, useState } from "react";
import {
  ArticleApiData,
  ArticleCommentApiData,
  CommentObject,
} from "@/types/ArticleTypes";
import { commentInfo, fields } from "./BoardDetailConfig";
import BoardDetailArticle from "./BoardDetailArticle";
import { useParams } from "react-router-dom";

const FreeBoardDetail = () => {
  const { id } = useParams<{ id: string }>();
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
      <RegisterForm fields={formFields} bottomButton={true} />
      <CommentsSection comments={comments} className={styles["comment"]} />
      <GoBackToListButton href="/boards" />
    </div>
  );
};

export default FreeBoardDetail;
