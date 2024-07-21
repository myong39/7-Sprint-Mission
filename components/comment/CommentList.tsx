import Comment from './Comment';
import styles from '@/components/comment/Comment.module.scss';
import Image from 'next/image';

function CommentList({ commentList }: { commentList: IComment[] }) {
  if (commentList.length == 0) {
    return (
      <div className={styles['empty-comment-list']}>
        <Image
          src='/images/Img_reply_empty.svg'
          alt='empty'
          width={140}
          height={140}
        />
        <p>
          아직 댓글이 없어요,
          <br />
          지금 댓글을 달아보세요!
        </p>
      </div>
    );
  }
  return (
    <div className={styles['comment-list']}>
      {commentList.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default CommentList;
