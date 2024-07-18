import Logo from "./Logo";
import MenuTab from "./MenuTab";
import Profile from "./Profile";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-left"]}>
        <Logo />
        <MenuTab />
      </div>
      <Profile />
    </header>
  );
}
