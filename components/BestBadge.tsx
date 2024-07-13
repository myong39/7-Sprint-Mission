import Image from 'next/image';
import styles from './BestBadge.module.scss';

function BestBadge() {
  return (
    <>
      <div className={styles.badge}>
        <Image src='images/ic_medal.svg' width={16} height={16} alt='medal' />
        <p>Best</p>
      </div>
    </>
  );
}

export default BestBadge;
