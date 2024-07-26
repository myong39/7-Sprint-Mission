import React, { FormEvent, useEffect, useState } from "react";
import InputField from "./InputField";
import { AuthFormProps } from "../../../types/AuthTypes";
import { getFieldsByMode } from "./AuthConfig";
import { useLocation, useNavigate } from "react-router-dom";

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const { pathname } = useLocation();
  const inputFields = getFieldsByMode(mode);
  const buttonText = mode === "login" ? "로그인" : "회원가입";
  const [isValid, SetIsValid] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isValid) {
      navigate("/");
    }
  };

  const handleBlur = (e: FormEvent) => {
    const result = inputFields.every((field) => {
      return field.isValid;
    });

    SetIsValid(result);
  };

  useEffect(() => {
    SetIsValid(false);
  }, [pathname]);

  return (
    <>
      <form
        method="post"
        id={mode}
        className="form"
        onSubmit={handleSubmit}
        onBlur={handleBlur}
      >
        {inputFields.map((field) => (
          <InputField key={field.id} field={field} />
        ))}
        <button className="button pill-button acc-button" disabled={!isValid}>
          {buttonText}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
