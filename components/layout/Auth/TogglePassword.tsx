import React, { useState } from "react";
import visibilityOn from "@/public/images/icons/btn_visibility_on.svg";
import visibilityOff from "@/public/images/icons/btn_visibility_off.svg";
import Image from "next/image";
import styles from "./Auth.module.scss";

interface Props {
  onPasswordVisible: (isVisible: boolean) => void;
}

const TogglePassword: React.FC<Props> = ({ onPasswordVisible }) => {
  const [isVisible, setVisible] = useState(false);
  const imgToggle = isVisible ? visibilityOn : visibilityOff;

  const handleClick = () => {
    const updatedVisible = !isVisible;
    setVisible(updatedVisible);
    onPasswordVisible(updatedVisible);
  };

  return (
    <button
      onClick={handleClick}
      className={styles["visibility-button"]}
      type="button"
    >
      <Image src={imgToggle} alt="비밀번호 가시성 토글" width="24" />
    </button>
  );
};

export default TogglePassword;
