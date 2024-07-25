import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function SearchInput(props: InputProps) {
  return (
    <>
      <input className={styles.search} {...props} />
    </>
  );
}

export default SearchInput;
