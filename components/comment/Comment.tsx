import ProfileImage from '../ProfileImage';
import styles from '@/components/comment/Comment.module.scss';
import elapsedTime from '@/utils/elapsedTime';
import Kebab from '../Kebab';

function Comment({ comment }: TComment) {
  const { id, writer, content, updatedAt, createdAt } = comment;
  const { image, nickname } = writer;

  return (
    <div className={styles['comment']}>
      <p className={styles['content']}>{content}</p>
      <div className={styles['writer']}>
        <div className={styles['profile']}>
          <ProfileImage />
        </div>
        <div>
          <p className={styles['nickname']}>{nickname}</p>
          <p className={styles['date']}>{elapsedTime(createdAt)}</p>
        </div>
      </div>
      <Kebab />
    </div>
  );
}

export default Comment;
