import React from 'react';
import style from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, disabled }) => {
  return (
    <div>
      <button className={style.Button} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Button;
