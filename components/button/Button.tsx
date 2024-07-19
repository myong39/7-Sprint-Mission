import { ButtonHTMLAttributes, FormEvent } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  handleClick?: any;
}

function Button({ size, handleClick, ...props }: IButton) {
  const sizeClassName = classNames({
    [styles.large]: size === 'large',
    [styles.medium]: size === 'medium',
    [styles.small]: size === 'small',
  });

  return (
    <button
      onClick={handleClick}
      className={classNames(styles.button, sizeClassName)}
      {...props}
    ></button>
  );
}

export default Button;
