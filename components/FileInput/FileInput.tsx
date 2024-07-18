import React, { useState, useRef } from 'react';
import Image from 'next/image';
import addimgfile from '@/asset/images/addboard/addimgfile.png';
import style from './FileInput.module.css';

interface FileInputProps {
  onChange: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setPreview(URL.createObjectURL(file));
      onChange(file);
    }
  };

  const handleRemoveImg = () => {
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    onChange(null);
  };

  return (
    <div className={style.FileInputContainer}>
      {preview ? (
        <div className={style.PreviewContainer}>
          <Image
            fill
            className={style.PreviewImg}
            src={preview}
            alt="이미지 미리보기"
          />
          <button className={style.RemoveButton} onClick={handleRemoveImg}>
            X
          </button>
        </div>
      ) : (
        <label className={style.FileLabel} htmlFor="upload-img">
          <Image
            className={style.FileImg}
            src={addimgfile}
            alt="이미지 등록"
            width={100}
            height={100}
          />
        </label>
      )}
      <input
        ref={inputRef}
        className={style.FileInput}
        id="upload-img"
        type="file"
        onChange={handleChangeImg}
      />
    </div>
  );
};

export default FileInput;
