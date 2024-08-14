import Image from 'next/image';
import styles from '@/pages/login/LoginPage.module.scss';
import GoogleLogo from '@/assets/google.svg';
import KakaoLogo from '@/assets/kakao.svg';

function EasyLogin() {
  return (
    <div className={styles['easy-login-container']}>
      <div>
        <span>간편 로그인하기</span>
        <div>
          <GoogleLogo />
          <KakaoLogo />
        </div>
      </div>
    </div>
  );
}

export default EasyLogin;
