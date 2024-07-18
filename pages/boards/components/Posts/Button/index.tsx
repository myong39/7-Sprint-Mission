import styles from "./styles.module.scss";

export default function WriteButton() {
  return (
    <>
      <button className={styles["write-button"]} type={"button"}>
        <span>글쓰기</span>
      </button>
    </>
  );
}
