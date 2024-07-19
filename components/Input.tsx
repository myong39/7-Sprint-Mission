import { InputHTMLAttributes } from 'react';
import styles from '@/components/Input.module.scss';
import checkJosa from '@/utils/checkJosa';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function Input({ name, children, ...props }: InputProps) {
  return (
    <input
      className={styles['input']}
      placeholder={checkJosa(name) + ' 입력해주세요'}
      {...props}
    ></input>
  );
}

export default Input;
