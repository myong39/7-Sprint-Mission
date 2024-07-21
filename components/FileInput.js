import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/FileInput.module.css';
import addImgIcon from '@/assets/images/icons/addImgIcon.svg';

export default function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = (e) => {
    e.stopPropagation();
    onChange(name, null);
    inputRef.current.value = '';
  };

  const handleDivClick = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className={styles.FileInputContainer}>
      <div className={styles.customFileInput} onClick={handleDivClick}>
        <div className={styles.addImgPlaceholder}>
          <Image src={addImgIcon} width={48} height={48} alt='add image icon' />
          <p>이미지 등록</p>
        </div>
      </div>
      {preview && (
        <div className={styles.customFileInput}>
          <Image
            src={preview}
            className={styles.previewImage}
            width={282}
            height={282}
            alt='Preview of attached files'
          />
          <button
            type='button'
            className={styles.clearButton}
            onClick={handleClearClick}
          >
            X
          </button>
        </div>
      )}
      <input
        type='file'
        name='imgFile'
        accept='image/*'
        style={{ display: 'none' }}
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  );
}
