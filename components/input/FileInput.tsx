import styles from '@/components/input/Input.module.scss';
import Image from 'next/image';
import {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  value?: any; // 이따 수정
  onChange?: any; // 이따 수정
}

function FileInput({ name, value, onChange }: Props) {
  const [preview, setPreview] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextImage = e.target.files?.[0];
    onChange(name, nextImage);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <div className={styles['file-input-wrapper']}>
      <button
        type='button'
        className={styles['file-input-btn']}
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <Image
          width={48}
          height={48}
          alt='plus-icon'
          src='images/ic_plus.svg'
        />
        <p>이미지 등록</p>
      </button>
      <input
        type='file'
        className={styles['file-input']}
        accept='iamge/png, image/jpeg, image/jpg'
        onChange={handleChange}
        ref={inputRef}
      />
      {value && (
        <div className={styles['preview']}>
          <Image fill alt='preview' src={preview} />
          <Image
            width={20}
            height={20}
            alt='x'
            src='images/ic_cancel.svg'
            onClick={handleClearClick}
          />
        </div>
      )}
    </div>
  );
}

export default FileInput;
