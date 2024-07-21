import All from "./components/All";
import Best from "./components/Best";
import styles from "./styles.module.scss";

function BestArticles() {
  return (
    <div className={styles["container"]}>
      <Best />
      <All />
    </div>
  );
}

export default BestArticles;
