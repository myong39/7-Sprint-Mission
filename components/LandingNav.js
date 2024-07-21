import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ActiveBtn from '@/components/ActiveBtn';
import styles from '@/components/LandingNav.module.css';
import pandaMarketLogo from '@/assets/images/pandaMarketLogo.svg';
import pandaMarketLogoMobile from '@/assets/images/pandaMarketLogoMobile.svg';
import profileIcon from '@/assets/images/icons/profileIcon.svg';

export default function LandingNav() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLogin(true);
    }
  }, []);
  return (
    <div className={styles.NavContainer}>
      <Link href='/'>
        <Image
          className={styles.logoImg}
          src={pandaMarketLogo}
          width={153}
          height={51}
          art='pandaMarket logo'
        />
        <Image
          className={styles.logoMobileImg}
          src={pandaMarketLogoMobile}
          width={103}
          height={51}
          art='pandaMarket logo'
        />
      </Link>
      {isLogin ? (
        <Link href='#'>
          <Image src={profileIcon} width={40} height={40} alt='profile image' />
        </Link>
      ) : (
        <Link href='/auth/login'>
          <ActiveBtn className={styles.loginBtn}>로그인</ActiveBtn>
        </Link>
      )}
    </div>
  );
}
