import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, disabled }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Button;
