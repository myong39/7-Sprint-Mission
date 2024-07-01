import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  color?: "default" | "disabled";
  size?: "large" | "small";
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  color = "default",
  size = "large",
  width,
  onClick,
  disabled = false,
}) => {
  const buttonClasses = [styles.button, styles[color], styles[size]].join(" ");

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      style={{ width }}
    >
      {text}
    </button>
  );
};
