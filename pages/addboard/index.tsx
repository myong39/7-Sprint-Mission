import styles from "./styles.module.scss";
import plusIcon from "@/assets/icons/ic_plus.png";
import { ST } from "next/dist/shared/lib/utils";
import Image from "next/image";

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
              <input
                className={styles["title-input-box"]}
                type="text"
                placeholder="제목을 입력해주세요"
                required
              />
            </div>
            <div className={styles["contents"]}>
              <label className={styles["label"]}>*내용</label>
              <textarea
                className={styles["contents-input-box"]}
                placeholder="내용을 입력해주세요"
                required
              />
            </div>
            <div className={styles["image"]}>
              <label className={styles["label"]}>이미지</label>
              <div className={styles["img-register-box"]}>
                <input className={styles["img-register"]} type="file" />
                <div className={styles["img-register-button"]}>
                  <Image
                    className={styles["plus-icon"]}
                    src={plusIcon}
                    alt="파일추가버튼"
                  />
                  <p className={styles["register-button-text"]}>이미지 등록</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
