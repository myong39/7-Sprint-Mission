import React from 'react';
import Image from 'next/image';
import pandaLogo from '@/public/images/Header/pandaLogo.png';
import profile from '@/public/images/Header/profile.png';
import stlye from './Header.module.css';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/boards/`);
  };

  const handleClickGoHome = () => {
    router.push(`/`);
  };

  return (
    <div className={stlye.Container}>
      <div className={stlye.LogoAndMenu}>
        <Image
          src={pandaLogo}
          alt="판다 로고"
          onClick={handleClickGoHome}
          className={stlye.LogoImg}
        />
        <div className={stlye.HideLogo}>판다마켓</div>
        <ul className={stlye.HeaderMenu}>
          <li
            onClick={handleClick}
            className={
              router.pathname.startsWith('/boards') ? stlye.ActiveMenuItem : ''
            }
          >
            자유게시판
          </li>
          <li>중고마켓</li>
        </ul>
      </div>
      <div className={stlye.Profile}>
        <Image src={profile} alt="유저 프로필" className={stlye.UserImg} />
      </div>
    </div>
  );
};

export default Header;
