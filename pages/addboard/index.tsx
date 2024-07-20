import styles from "./styles.module.scss";
import plusIcon from "@/assets/icons/ic_plus.png";
import { ST } from "next/dist/shared/lib/utils";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import deleteIcon from "@/assets/icons/ic_delete.svg";

export default function addboard() {
  const [preview, setPreview] = useState();
  const [value, setValue] = useState();
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    setValue(nextValue);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleCancelClick = () => {
    setPreview(null);
    setValue(null);
    fileInputRef.current.value = "";
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
    return () => URL.revokeObjectURL(nextPreview);
  }, [value]);

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
              <div className={styles["img-register-container"]}>
                <div
                  className={styles["img-register-box"]}
                  onClick={handleImageClick}
                >
                  <input
                    ref={fileInputRef}
                    className={styles["img-register"]}
                    type="file"
                    onChange={handleChange}
                  />
                  <div className={styles["img-register-button"]}>
                    <Image
                      className={styles["plus-icon"]}
                      src={plusIcon}
                      alt="파일추가버튼"
                    />
                    <p className={styles["register-button-text"]}>
                      이미지 등록
                    </p>
                  </div>
                </div>
                {preview && (
                  <div className={styles["preview-image-box"]}>
                    <Image
                      className={styles["preview-image"]}
                      src={preview}
                      alt="이미지 미리보기"
                      width="282"
                      height="282"
                    />
                    <button
                      className={styles["delete-preview-image"]}
                      onClick={handleCancelClick}
                    >
                      <Image
                        src={deleteIcon}
                        alt="미리보기 삭제"
                        width="8"
                        height="8"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
