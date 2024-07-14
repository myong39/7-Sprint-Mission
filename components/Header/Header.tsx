import React from 'react';
import Image from 'next/image';
import pandaLogo from '@/public/images/pandaLogo.png';
import profile from '@/public/images/profile.png';
import stlye from './Header.module.css';

const Header = () => {
  return (
    <div className={stlye.Container}>
      <div className={stlye.PandaLogo}>
        <Image fill src={pandaLogo} alt="판다 로고" />
      </div>
      <ul className={stlye.HeaderMenu}>
        <li>자유 게시판</li>
        <li>중고 마켓</li>
      </ul>
      <div className={stlye.Profile}>
        <Image fill src={profile} alt="유저 프로필" />
      </div>
    </div>
  );
};

export default Header;
