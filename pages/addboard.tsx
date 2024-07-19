import { useRef, useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import styles from "@/styles/addboard.module.css";
import plus_ic from "@/public/ic_plus.svg";
import x_ic from "@/public/ic_X.svg";
import x_hover_ic from "@/public/ic_X_hover.svg";

export default function AddBoard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imgPreview, setImgPreview] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const deleteImgRef = useRef<HTMLImageElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImgFile(e.target.files[0]);
    }
  };

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setImgFile(null);
    setImgPreview("");
  };

  useEffect(() => {
    if (!imgFile) return;

    const nextPreview = URL.createObjectURL(imgFile);
    setImgPreview(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [imgFile]);

  return (
    <form className={styles.container}>
      <div className={styles["top-wrap"]}>
        <h2>게시글 쓰기</h2>
        <button
          type="button"
          className={styles["submit-btn"]}
          disabled={!title || !description}
        >
          등록
        </button>
      </div>
      <label htmlFor="title" className={styles.label}>
        *제목
      </label>
      <input
        type="text"
        id="title"
        placeholder="제목을 입력해주세요"
        className={styles["title-input"]}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description" className={styles.label}>
        *내용
      </label>
      <textarea
        name="description"
        id="description"
        placeholder="내용을 입력해주세요"
        className={styles["description-textarea"]}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="image" className={styles.label}>
        이미지
      </label>
      <input
        type="file"
        id="image"
        name="image"
        className={styles["image-input"]}
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      <div className={styles["image-container"]}>
        <button
          type="button"
          className={styles["image-btn"]}
          onClick={handleImageUploadClick}
        >
          <Image
            src={plus_ic}
            alt="플러스아이콘"
            width="48"
            height="48"
            className={styles["plus-img"]}
          />
          <span>이미지 등록</span>
        </button>
        {imgPreview && (
          <div className={styles["preview-wrap"]}>
            <Image
              src={imgPreview}
              alt="이미지미리보기"
              width="282"
              height="282"
              className={styles["image-preview"]}
            />
            <button
              type="button"
              title="닫기버튼"
              className={styles["image-delete"]}
              onClick={handleDeleteClick}
              onMouseEnter={() => {
                if (deleteImgRef.current) {
                  deleteImgRef.current.src = x_hover_ic.src;
                }
              }}
              onMouseLeave={() => {
                if (deleteImgRef.current) {
                  deleteImgRef.current.src = x_ic.src;
                }
              }}
            >
              <img
                src={x_ic.src}
                alt="삭제아이콘"
                className={styles["image-delete-img"]}
                width="20"
                height="20"
                ref={deleteImgRef}
              />
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
