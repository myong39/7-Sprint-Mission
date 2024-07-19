import styles from '@/components/Input.module.scss';
import checkJosa from '@/utils/checkJosa';
import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

function InputTextArea({ name, ...props }: TextAreaProps) {
  return (
    <textarea
      className={styles['textarea']}
      placeholder={checkJosa(name) + ' 입력해주세요'}
      {...props}
    />
  );
}

export default InputTextArea;
