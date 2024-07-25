import React, { useRef, useState, useEffect } from "react";
import styles from "./PostForm.module.scss";
import plusIcon from "public/icon_plus.svg";
import xIconBlue from "public/icon_x-blue.svg";
import Image from "next/image";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [ImageFile, setProductImageFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const isValid = title && content;

  const handleChangeInputValue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    setter: (value: string) => void
  ) => {
    setter(e.target.value);
  };

  const handleChangeInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProductImageFile(e.target.files[0]);
    }
  };

  const handleDeletePreview = () => {
    const inputNode = fileInputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    setProductImageFile(null);
    setFilePreview(null);
  };

  useEffect(() => {
    if (!ImageFile) return;
    setFilePreview(URL.createObjectURL(ImageFile));

    return () => {
      setProductImageFile(null);
      URL.revokeObjectURL(URL.createObjectURL(ImageFile));
    };
  }, [ImageFile]);

  return (
    <form className={styles["post-form-container"]}>
      <div className={styles["post-form-title-with-button"]}>
        <h1>게시물 쓰기</h1>
        <button disabled={!isValid}>등록</button>
      </div>
      <div className={styles["post-form-input"]}>
        <label htmlFor="title">* 제목</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => {
            handleChangeInputValue(e, setTitle);
          }}
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className={styles["post-form-input"]}>
        <label htmlFor="content">* 내용</label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(e) => {
            handleChangeInputValue(e, setContent);
          }}
          placeholder="내용을 입력해주세요"
        />
      </div>
      <div className={styles["post-form-input"]}>
        <label htmlFor="image">이미지</label>
        <div className={styles["post-form-file-input-box"]}>
          <label
            htmlFor="image"
            className={styles["post-form-file-input-add-image-button"]}
          >
            <Image
              src={plusIcon}
              alt="판매상품 이미지등록을 할 수 있는 플러스모양의 아이콘"
              width={48}
              height={48}
            />
            <span>이미지등록</span>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
            ref={fileInputRef}
            onChange={handleChangeInputFile}
          />
          {filePreview && (
            <div
              className={styles["post-form-file-input-preview-image-wrapper"]}
            >
              <Image
                className={styles["post-form-file-preview-image"]}
                src={filePreview}
                alt="등록한 판매상품 이미지 미리보기"
                width={282}
                height={282}
              />
              <button
                className={styles["post-form-file-preview-image-delete-button"]}
                onClick={handleDeletePreview}
              >
                <Image
                  src={xIconBlue}
                  alt="판매상품 미리보기 이미지를 삭제할수있는 X모양 아이콘"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default PostForm;
