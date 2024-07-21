import Image from "next/image";
import kebabIcon from "@/assets/icons/ic_kebab.svg";
import profileImage from "@/assets/icons/ic_profile.svg";
import likeIcon from "@/assets/icons/ic_heart.svg";
import Comment from "./components/Comment";
import backIcon from "@/assets/icons/ic_back.svg";
import NotComment from "./components/NotComment";
import styles from "./styles.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  getArticleById,
  getArticleComments,
  Article,
  Comment as CommentType,
} from "@/services/articles";

function BoardsDetail() {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [comments, setComments] = useState<CommentType[]>([]);
  const router: any = useRouter();
  const { id } = router.query;

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const handleBackListButtonClick = () => {
    router.push("/boards");
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const fetchedArticle = await getArticleById(Number(id));
        setArticle(fetchedArticle);

        const params = { articleId: Number(id), limit: 10 };
        const { list } = await getArticleComments(Number(id), 10);
        setComments(list);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다..!", error);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (!article) {
    return <div>게시글이 없습니다..!</div>;
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["title-container"]}>
          <p className={styles["title"]}>{article.title}</p>
          <Image src={kebabIcon} alt="케밥 아이콘" width={24} height={24} />
        </div>

        <div className={styles["user-container"]}>
          <div className={styles["user-wrapper"]}>
            <Image
              className={styles["user-profile-image"]}
              src={profileImage}
              alt="프로필"
              width={24}
              height={24}
            />
            <span className={styles["user-name"]}>
              {article.writer.nickname}
            </span>
            <span className={styles["date"]}>
              {new Date(article.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className={styles["like-wrapper"]}>
            <Image src={likeIcon} alt="좋아요" width={24} height={24} />
            <span className={styles["like-count"]}>{article.likeCount}</span>
          </div>
        </div>
      </div>
      <p className={styles["description"]}>{article.content}</p>

      <div className={styles["comment-container"]}>
        <label className={styles["comment"]} htmlFor="comment">
          댓글 달기
        </label>
        <textarea
          id="comment"
          value={textAreaValue}
          onChange={handleTextAreaChange}
          className={styles["comment-textarea"]}
          placeholder="댓글을 입력해주세요."
        />
        <div className={styles["comment-button-container"]}>
          <div></div>
          <button
            className={styles["comment-button"]}
            disabled={!textAreaValue}
          >
            등록
          </button>
        </div>
      </div>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      {comments.length === 0 && <NotComment />}

      <div className={styles["back-button-container"]}>
        <button
          className={styles["back-button"]}
          onClick={handleBackListButtonClick}
        >
          목록으로 돌아가기
          <Image src={backIcon} alt="뒤로가기" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

export default BoardsDetail;
