import { ChangeEvent, FormEvent } from "react";
import Comment from "./Comment";
import emptyImg from "@/assets/images/icons/Img_inquiry_empty.svg";
import { useState } from "react";
import { CommentType } from "@/types/ProductTypes";

const CommentsSection = ({
  productComments,
}: {
  productComments: CommentType[];
}) => {
  const isCommentEmpty = !productComments.length;
  const [isSubmitValid, setIsSubmitValid] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIsSubmitValid(!!e.target.value);
  };

  return (
    <div className="commentsSection">
      <form onSubmit={handleSubmit} className="comment-form">
        <h3>문의하기</h3>
        <textarea
          onChange={handleChange}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.

"
        />
        <button disabled={!isSubmitValid}>등록</button>
      </form>
      {isCommentEmpty && (
        <div className="emptyComment">
          <img src={emptyImg} alt="문의가 없다는 수화기 든 판다" />
          <h3>아직 문의가 없습니다.</h3>
        </div>
      )}
      {productComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsSection;
