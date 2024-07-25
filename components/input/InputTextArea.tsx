import styles from '@/components/input/Input.module.scss';
import checkJosa from '@/utils/checkJosa';
import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
}

function InputTextArea({ title, ...props }: TextAreaProps) {
  return (
    <textarea
      className={styles['textarea']}
      placeholder={checkJosa(title) + ' 입력해주세요'}
      {...props}
    />
  );
}

export default InputTextArea;
