import styles from "@/components/Header/styles.module.scss";
import ProfileImage from "./components/ProfileImage";
import HeaderList from "./components/List";
import Logo from "./components/Logo";

function Header() {
  return (
    <header className={styles["container"]}>
      <Logo />
      <HeaderList />
      <ProfileImage />
    </header>
  );
}

export default Header;
