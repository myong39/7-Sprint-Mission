import React, { useState, useEffect } from "react";
import invisible from "../../../assets/images/icons/eye-invisible.svg";
import visible from "../../../assets/images/icons/eye-visible.svg";
import {
  validateEmail,
  validatePassword,
  validateNickname,
  validatePasswordConfirm,
} from "../../../utils/authValidation";

interface ValidationInputProps {
  id: string;
  type: "email" | "text" | "password" | "passwordConfirm";
  name: string;
  placeholder: string;
  onValid: (isValid: boolean) => void;
}

const ValidationInput: React.FC<ValidationInputProps> = ({
  id,
  type,
  name,
  placeholder,
  onValid,
}) => {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    onValid(isValid);
  }, [isValid, onValid]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const validate = (value: string) => {
    let valid = true;
    let error = "";

    switch (type) {
      case "email":
        valid = validateEmail(value);
        error = valid ? "" : "잘못된 이메일 형식입니다";
        break;
      case "password":
        valid = validatePassword(value);
        error = valid ? "" : "비밀번호는 8자 이상이어야 합니다";
        break;
      case "text":
        valid = validateNickname(value);
        error = valid ? "" : "닉네임을 입력해주세요";
        break;
      case "passwordConfirm":
        valid = validatePasswordConfirm(password, value);
        error = valid ? "" : "비밀번호가 일치하지 않습니다";
        break;
    }

    setIsValid(valid);
    setErrorMessage(error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (isInitial) {
      setIsInitial(false);
    }
    validate(e.target.value);
    if (type === "password") {
      setPassword(e.target.value);
    } else if (type === "passwordConfirm") {
      const passwordInput = document.getElementById(
        "password",
      ) as HTMLInputElement;
      if (passwordInput) {
        const passwordValue = passwordInput.value;
        const valid = validatePasswordConfirm(passwordValue, e.target.value);
        setIsValid(valid);
        setErrorMessage(valid ? "" : "비밀번호가 일치하지 않습니다");
      }
    }
  };

  return (
    <div className='input-box'>
      <label htmlFor={id} className='auth-label'>
        {name}
      </label>
      <div className='password-box'>
        <input
          type={
            (type === "password" || type === "passwordConfirm") && isVisible
              ? "text"
              : type === "passwordConfirm"
              ? "password"
              : type
          }
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={isValid || isInitial ? "" : "error"}
        />
        {(type === "password" || type === "passwordConfirm") && (
          <img
            src={isVisible ? visible : invisible}
            alt='비밀번호-숨김'
            className='password-button'
            onClick={toggleVisibility}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      <div
        className='error-message'
        style={{ display: isValid ? "none" : "block" }}
      >
        {errorMessage}
      </div>
    </div>
  );
};

export default ValidationInput;
