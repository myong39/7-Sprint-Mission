import kebabImg from "@/assets/images/icons/ic_kebab.svg";
import { getFormatTime, getElapsedTime } from "@/utils/Utils";
import { CommentType } from "@/types/ProductTypes";

const Comment = ({ comment }: { comment: CommentType }) => {
  // 경과 시간
  const elapsedTime = getElapsedTime(comment.updatedAt);
  // 업데이트 된 시간 포맷
  const formattedTime = getFormatTime(comment.updatedAt);

  return (
    <div className="comment">
      <div className="commentContentWrapper">
        <p>{comment.content}</p>
        <img className="kebabImage" src={kebabImg} alt="더보기" />
      </div>
      <div className="writerWrapper">
        <img
          src={comment.writer.image}
          alt={`${comment.writer.nickname}의 프로필 사진`}
        />
        <div className="nicknameWrapper">
          <h3>{comment.writer.nickname}</h3>
          <h4>
            {formattedTime} {`(${elapsedTime})`}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Comment;
