import { InputHTMLAttributes } from 'react';
import styles from '@/components/input/Input.module.scss';
import checkJosa from '@/utils/checkJosa';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

function Input({ title, ...props }: InputProps) {
  return (
    <input
      className={styles['input']}
      placeholder={checkJosa(title) + ' 입력해주세요'}
      {...props}
    />
  );
}

export default Input;
