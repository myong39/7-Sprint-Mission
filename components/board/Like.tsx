import styles from '@/components/board/Board.module.scss';
import Image from 'next/image';

function Like({ likeCount }: { likeCount: number }) {
  return (
    <div className={styles['like']}>
      <Image src='/images/ic_heart.svg' width={32} height={32} alt='heart' />
      <span>{likeCount}</span>
    </div>
  );
}

export default Like;
