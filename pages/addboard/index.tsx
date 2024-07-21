import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import plusIcon from "@/assets/icons/ic_plus.svg";
import cancelIcon from "@/assets/icons/ic_cancel.svg";
import classNames from "classnames";

function AddBoard() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [titleInputValue, setTitleInputValue] = useState("");
  const [contentTextAreaValue, setContentTextAreaValue] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const activeButton = titleInputValue && contentTextAreaValue;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInputValue(e.target.value);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentTextAreaValue(e.target.value);
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current && !previewImage) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageCancel = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["add-post-container"]}>
        <label className={styles["add-post"]}>게시글 쓰기</label>
        <button
          className={classNames(styles["add-post-button"], {
            [styles["active"]]: activeButton,
          })}
          disabled={!activeButton}
        >
          등록
        </button>
      </div>
      <div className={styles["title-container"]}>
        <label className={styles["title"]} htmlFor="title">
          *제목
        </label>
        <input
          className={styles["title-input"]}
          type="text"
          id="title"
          value={titleInputValue}
          onChange={handleInputChange}
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className={styles["content-container"]}>
        <label className={styles["content"]}>*내용</label>
        <textarea
          className={styles["content-textarea"]}
          value={contentTextAreaValue}
          onChange={handleTextAreaChange}
          placeholder="내용을 입력해주세요"
        />
      </div>
      <div className={styles["add-image-container"]}>
        <label className={styles["add-image"]} htmlFor="image-upload">
          이미지
        </label>
        <div
          className={styles["add-image-wrapper"]}
          onClick={handleFileInputClick}
        >
          <input
            className={styles["add-image-input"]}
            ref={fileInputRef}
            type="file"
            id="image-upload"
            placeholder="이미지 등록"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <Image
            className={styles["plus-image-icon"]}
            src={plusIcon}
            alt="플러스"
            width={48}
            height={48}
          />
          <span className={styles["add-image-span"]}>이미지 등록</span>
          {previewImage && (
            <div className={styles["preview-image-wrapper"]}>
              <Image
                src={previewImage}
                alt="미리보기"
                width={282}
                height={282}
                className={styles["preview-image"]}
              />
              <button
                className={styles["preview-image-cancel-button"]}
                onClick={handleImageCancel}
              >
                <Image
                  src={cancelIcon}
                  alt="이미지 삭제"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddBoard;
