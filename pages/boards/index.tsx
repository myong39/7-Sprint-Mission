import All from "./components/AllArticle";
import Best from "./components/BestArticle";
import styles from "@/pages/boards/styles.module.scss";

function Boards() {
  return (
    <div className={styles["container"]}>
      <Best />
      <All />
    </div>
  );
}

export default Boards;
