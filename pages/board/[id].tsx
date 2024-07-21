import { getArticle, getArticleComment } from "@/lib/articleApi";
import styles from "@/components/board/BoardDetailArticle.module.scss";
import CommentsSection from "@/components/layout/Comment.tsx/CommentsSection";
import RegisterForm from "@/components/layout/RegisterForm/RegisterForm";
import GoBackToListButton from "@/components/layout/Comment.tsx/GoBackToListButton";
import { useEffect, useState } from "react";
import { ArticleCommentApiData, CommentObject } from "@/types/articleTypes";
import { useRouter } from "next/router";
import { commentInfo } from "@/components/board/BoardDetailConfig";

export default function FreeBoardDetail() {
  const content = "";
  const router = useRouter();
  const { id } = router.query;
  const [comments, setComments] = useState<CommentObject>(commentInfo);

  const fetchData = async ({ articleId }: ArticleCommentApiData) => {
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
    fetchData({ articleId: id });
  }, []);

  return (
    <div className={styles.main}>
      <RegisterForm fields={{}} />
      <CommentsSection comments={comments} />
      <GoBackToListButton href="/boards" />
    </div>
  );
}
