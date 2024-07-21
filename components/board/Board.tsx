import Image from 'next/image';
import styles from '@/components/board/Board.module.scss';
import formatDate from '@/utils/formatDate';
import Like from './Like';
import ProfileImage from '../ProfileImage';

function Board({ article }: TArticle) {
  const { id, title, content, image, writer, likeCount, createdAt, updatedAt } =
    article;
  const { nickname } = writer;

  return (
    <div className={styles['board']}>
      <div className={styles['header']}>
        <h2 className={styles['title']}>{title}</h2>
        <div className={styles['header-content']}>
          <div className={styles['information']}>
            <div className={styles['img']}>
              <ProfileImage />
            </div>
            <div className={styles['name-date']}>
              <p className={styles['nickname']}>{nickname}</p>
              <p className={styles['date']}>{formatDate(createdAt)}</p>
            </div>
          </div>
          <div className='border'></div>
          <Like likeCount={likeCount} />
        </div>
      </div>
      <p className={styles['content']}>{content}</p>
    </div>
  );
}

export default Board;
