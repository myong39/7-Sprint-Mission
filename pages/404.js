import styles from '@/styles/404.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ActiveBtn from '@/components/ActiveBtn';

NotFound.hideNav = true;

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <Image
        src='/image/notFoundIcon.png'
        width={256}
        height={256}
        alt='not found page icon'
        priority
      />
      <div className={styles.contentWrapper}>
        <span className={styles.errorTitle}>Page not found</span>
        <span className={styles.errorMessage}>
          페이지의 주소가 잘못 입력되었거나 <br />
          주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </span>
        <Link href='/'>
          <ActiveBtn className={styles.homeBtn} children='홈으로' />
        </Link>
      </div>
    </div>
  );
}
