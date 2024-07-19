import styles from '@/components/Input.module.scss';
import Image from 'next/image';

function FileInput() {
  return (
    <button className={styles['file-input']}>
      <Image width={48} height={48} alt='plus-icon' src='images/ic_plus.svg' />
      <p>이미지 등록</p>
    </button>
  );
}

export default FileInput;
