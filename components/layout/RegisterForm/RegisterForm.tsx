import React, { FormEvent, useState } from "react";
import InputField from "./InputField";
import Button from "../Button";
import { RegisterFormProps, HandleChange } from "@/types/registerTypes";
import { FIELDTYPE, FormValues } from "./registerConfig";
import styles from "./RegisterForm.module.scss";

export default function RegisterForm({
  titleText = "",
  buttonText = "등록",
  fields,
}: RegisterFormProps) {
  const [formValues, setFormValues] = useState<FormValues>({
    [FIELDTYPE.TITLE]: "",
    [FIELDTYPE.CONTENT]: "",
    [FIELDTYPE.IMAGE]: null,
  });
  const [isValid, setIsValid] = useState(false);

  const handleChange: HandleChange = (e) => {
    if (e instanceof File || e === null) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [FIELDTYPE.IMAGE]: e,
      }));
    } else {
      const target = e.target;
      const { name, value } = target;
      if (name in formValues) {
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      }
    }
  };

  const handleBlur = () => {
    const filteredFields = Object.entries(formValues).filter(
      ([key]) => key !== FIELDTYPE.IMAGE
    );

    const result = filteredFields.every(
      ([_, value]) => value !== null && value !== ""
    );

    setIsValid(result);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      method="post"
      className={styles.form}
      onSubmit={handleSubmit}
      onBlur={handleBlur}
    >
      <div className={styles["title-wrapper"]}>
        <h1 className={styles.title}>{titleText}</h1>
        <Button href="/boards" disabled={!isValid}>
          {buttonText}
        </Button>
      </div>
      {Object.values(fields).map((field) => (
        <div className={styles["input-wrapper"]} key={field.id}>
          <h2 className={styles["input-label"]}>{field.name}</h2>
          <InputField
            field={field}
            value={formValues[field.id]}
            onChange={handleChange}
          />
        </div>
      ))}
    </form>
  );
}
