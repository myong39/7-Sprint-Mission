import React, { useEffect } from "react";
import "./Header.css";
import { pandaMarketLogoImage } from "../../assets/images";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="header-wrapper">
      <nav className="gnb">
        <div className="gnb-left">
          <a href="/">
            <img
              className="gnb-logo"
              src={pandaMarketLogoImage}
              alt="판다마켓로고 이미지"
            />
          </a>
          <a>자유게시판</a>
          <a className={`${location.pathname == "/items" ? "selected" : ""}`}>
            중고마켓
          </a>
        </div>
        <a href="/Login" className="gnb-right gnb-login">
          로그인
        </a>
      </nav>
    </header>
  );
};

export default Header;
