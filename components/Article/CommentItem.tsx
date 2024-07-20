import { Comment } from '@/types/Article';
import Image from 'next/image';
import formatTimeDiff from '@/util/formatTimeDiff';

const CommentItem: React.FC<Comment> = ({ content, createdAt, writer }) => {
  const date = formatTimeDiff(createdAt);

  return (
    <div>
      <div>{content}</div>
      <img src={writer.image} alt="유저이미지" />

      <div>
        <div>{writer.nickname}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export default CommentItem;
