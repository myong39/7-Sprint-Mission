import { useState } from "react";
import styles from "@/components/BoardDetailWrite.module.css";

export default function BoardDetailWrite() {
  const [writeValue, setWriteValue] = useState("");

  return (
    <div className={styles.container}>
      <label htmlFor="write">댓글달기</label>
      <textarea
        name="write"
        id="write"
        value={writeValue}
        placeholder="댓글을 입력해주세요."
        onChange={(e) => setWriteValue(e.target.value)}
      />
      <div className={styles["write-btn-wrap"]}>
        <button type="button" disabled={!!writeValue}>
          등록
        </button>
      </div>
    </div>
  );
}
