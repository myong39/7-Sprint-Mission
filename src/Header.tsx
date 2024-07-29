import logo from "./assets/logo.svg";
import logoMobile from "./assets/logo_mobile.svg";
import mypage_ic from "./assets/ic_mypage.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const accessToken = localStorage.getItem("accessToken");

  return (
    <header>
      <div className="nav-container">
        <Link to="/">
          <button type="button" className="logo">
            <img
              src={logo}
              alt="판다마켓로고"
              width="153"
              height="51"
              className="logo-pt"
            />
            <img
              src={logoMobile}
              alt="판다마켓로고"
              width="81"
              height="27"
              className="logo-m"
            />
          </button>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/community"
                className={({ isActive }) => `link ${isActive ? "active" : ""}`}
              >
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/items"
                className={({ isActive }) =>
                  `link ${
                    isActive || location.pathname === "/additem" ? "active" : ""
                  }`
                }
              >
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {!accessToken ? (
          <Link to="/login">
            <button type="button" className="login-btn">
              로그인
            </button>
          </Link>
        ) : (
          <Link to="/mypage">
            <img
              src={mypage_ic}
              alt="마이페이지아이콘"
              width="40"
              height="40"
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
