import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/EasyLogin.module.css';
import kakaoIcon from '@/assets/images/icons/kakaoIcon.png';
import googleIcon from '@/assets/images/icons/googleIcon.png';

export default function EasyLogin() {
  return (
    <div className={styles.snsLogin}>
      <p className={styles.snsLoginTitle}>간편 로그인하기</p>
      <div className={styles.snsIcons}>
        <Link href='https://www.google.com/'>
          <Image
            src={googleIcon}
            alt='google login icon'
            width={42}
            height={42}
          />
        </Link>
        <Link href='https://www.kakaocorp.com/page/'>
          <Image
            src={kakaoIcon}
            alt='kakao login icon'
            width={42}
            height={42}
          />
        </Link>
      </div>
    </div>
  );
}
