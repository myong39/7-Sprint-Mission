import Comment from "./Comment";
import { CommentsSectionProp } from "@/types/ArticleTypes";
import styles from "./Commtent.module.scss";
import LoadingSpinner from "../LoadingSpinner";

const CommentsSection: React.FC<CommentsSectionProp> = ({
  comments: {
    comments,
    imgUrl: { src, alt },
    content,
  },
  className,
  isLoading,
}) => {
  const isCommentEmpty = !comments.length;

  return (
    <section className={`${styles["comments-section"]} ${className}`}>
      {isLoading ? (
        <div className={styles["loading"]}>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {isCommentEmpty && (
            <div className={styles["empty-comment"]}>
              <img src={src} alt={alt} />
              <h3 style={{ whiteSpace: "pre-line" }}>{content}</h3>
            </div>
          )}
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </section>
  );
};

export default CommentsSection;
