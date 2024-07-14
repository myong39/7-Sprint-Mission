import styles from "./styles.module.scss";
export default function addboard() {
  return (
    <>
      <div className={styles["page-container"]}>
        <div className={styles["title-and-button"]}>
          <p className={styles["form-title"]}>게시글 쓰기</p>
          <input
            className={styles["register-button"]}
            type="button"
            value="등록"
          />
        </div>
        <form>
          <div className={styles["form-box"]}>
            <div className={styles["title"]}>
              <label className={styles["label"]}>*제목</label>
              <input className={styles['title-input-box']} type="text" placeholder="제목을 입력해주세요" required />
            </div>
            <div className={styles["contents"]}>
              <label className={styles["label"]}>*내용</label>
              <textarea className={styles['contents-input-box']} placeholder="내용을 입력해주세요" required />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
