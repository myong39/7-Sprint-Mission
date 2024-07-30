import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../../assets/images/logo/logo.svg";
import LogoText from "../../assets/images/logo/logo-text.svg";
import LoggedInImage from "../../assets/images/ui/ic_profile.svg";
import { Button } from "../Button/Button";
import useResize from "../../hooks/useResize";
import api from "../../api/auth";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const windowWidth = useResize();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isMobile = windowWidth <= 768;

  useEffect(() => {
    setIsLoggedIn(api.isLoggedIn());
  }, []);

  const handleButtonClick = (url: string) => () => {
    navigate(url);
  };

  const isHome = location.pathname === "/";

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBox}>
        <Link to='/' className={styles.navbarLogo}>
          <img src={isMobile ? LogoText : Logo} alt='logo-img' />
        </Link>
        {!isHome && (
          <ul className={styles.navbarLinks}>
            <li>
              <Link
                to='/board'
                className={location.pathname === "/board" ? styles.active : ""}
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                to='/items'
                className={location.pathname === "/items" ? styles.active : ""}
              >
                중고마켓
              </Link>
            </li>
          </ul>
        )}
        <div className={styles.buttonLogin}>
          {isLoggedIn ? (
            <img
              src={LoggedInImage}
              alt='Panda'
              className={styles.loggedInImage}
              onClick={handleButtonClick("/profile")}
            />
          ) : (
            <Button
              text='로그인'
              color='default'
              size='small'
              onClick={handleButtonClick("/login")}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
