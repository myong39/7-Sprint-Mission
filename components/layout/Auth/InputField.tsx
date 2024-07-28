import React, { useState } from "react";
import { useForm, Controller, Control, FieldValues } from "react-hook-form";
import styles from "./Auth.module.scss";
import { FieldInfo } from "@/types/AuthTypes";
import TogglePassword from "./TogglePassword";

interface InputFieldProps {
  field: FieldInfo;
  control: Control<FieldValues>;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ field, control, error }) => {
  const [inputType, setInputType] = useState(field.type);

  const handlePasswordVisible = (updatedVisible: boolean) => {
    if (field.id === "password" || field.id === "confirmPassword") {
      setInputType(updatedVisible ? "text" : "password");
    }
  };

  return (
    <div className={styles["input-area"]} key={field.id}>
      <label htmlFor={field.id}>{field.label}</label>
      <div
        className={
          styles[
            field.name === "password" || field.name === "confirmPassword"
              ? "password-input"
              : ""
          ]
        }
      >
        <Controller
          name={field.id}
          control={control}
          defaultValue=""
          rules={{
            required: field.required ? field.emptyErrorMessage : false,
            validate: field.validationFunction
              ? (value) =>
                  field.validationFunction(value) || field.invalidErrorMessage
              : undefined,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <input
              id={field.id}
              name={field.name}
              type={inputType}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              required={field.required}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              className={error ? styles["error-border"] : ""}
            />
          )}
        />
        {(field.name === "password" || field.name === "confirmPassword") && (
          <TogglePassword onPasswordVisible={handlePasswordVisible} />
        )}
      </div>
      {error && (
        <h3 className={styles["error-message"]}>
          {error || "에러가 발생했습니다."}
        </h3>
      )}
    </div>
  );
};

export default InputField;
