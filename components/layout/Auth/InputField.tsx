import React, { useEffect, useState } from "react";
import TogglePassword from "./TogglePassword";
import { FieldInfo } from "../../../types/AuthTypes";
import { useLocation } from "react-router-dom";
import {
  checkEmpty,
  getErrorMessage,
  setValidationErrorStyle,
} from "./AuthConfig";

interface InputFieldProps {
  field: FieldInfo;
}

const InputField: React.FC<InputFieldProps> = ({ field }) => {
  const [value, setValue] = useState("");
  const [inputType, setInputType] = useState(field.type);
  const { pathname } = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const isValid = field.validationFunction(e.target.value);
    field.isEmpty = checkEmpty(e);
    field.isValid = !field.isEmpty && isValid;
    const errorElement = document.querySelector(`.error-message.${field.id}`);

    if (errorElement) {
      errorElement.textContent = getErrorMessage(
        field.isEmpty,
        isValid,
        field.emptyErrorMessage,
        field.invalidErrorMessage
      );
    }

    setValidationErrorStyle({
      input: e.target,
      errorMessage: errorElement,
      isChecked: field.isEmpty || !isValid,
    });
  };

  const handlePasswordVisible = (updatedVisible: boolean) => {
    if (field.id === "password" || field.id === "confirmPassword") {
      setInputType(updatedVisible ? "text" : "password");
    }
  };

  useEffect(() => {
    setValue("");
    const inputElement = document.querySelector(`#${field.id}`);
    const errorElement = document.querySelector(`.error-message.${field.id}`);
    inputElement?.classList.remove("error-border");
    errorElement?.classList.remove("visible-maker");
  }, [pathname, field.id]);

  return (
    <div className="input-area" key={field.id}>
      <label htmlFor={field.id}>{field.label}</label>
      <div
        className={
          field.name === "password" || field.name === "confirmPassword"
            ? "password-input"
            : ""
        }
      >
        <input
          id={field.id}
          name={field.name}
          type={inputType}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          required={field.required}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          className=""
        />
        {(field.name === "password" || field.name === "confirmPassword") && (
          <TogglePassword onPasswordVisible={handlePasswordVisible} />
        )}
      </div>
      <h3 id={`${field.id}-error`} className={`error-message ${field.name}`}>
        {field.emptyErrorMessage}
      </h3>
    </div>
  );
};

export default InputField;
