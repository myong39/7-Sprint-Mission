import { FormEvent, useEffect, useState } from "react";
import InputField from "./InputField";
import Button from "../Button";
import {
  RegisterFormProps,
  HandleChange,
  FormValues,
} from "@/types/RegisterTypes";
import { FIELDTYPE } from "./registerConfig";
import styles from "./RegisterForm.module.scss";

const RegisterForm: React.FC<RegisterFormProps> = ({
  titleText = "",
  buttonText = "등록",
  fields,
  bottomButton = false,
  href = "",
}) => {
  const initializeFormValues = () => {
    const initialValues: FormValues = {};
    Object.values(fields).forEach((field) => {
      initialValues[field.id] = field.type === "file" ? null : "";
    });
    return initialValues;
  };

  const [formValues, setFormValues] = useState<FormValues>(
    initializeFormValues()
  );
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
          [name]: value.trim(),
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

  useEffect(() => {
    setFormValues(initializeFormValues());
  }, [fields]);

  const formClassName = `${styles.form} ${
    bottomButton ? styles["bottom-button"] : ""
  }`;

  return (
    <form
      method="post"
      className={formClassName}
      onSubmit={handleSubmit}
      onBlur={handleBlur}
    >
      <div className={styles["title-wrapper"]}>
        <h1 className={styles.title}>{titleText}</h1>
        {!bottomButton && (
          <Button href={href} disabled={!isValid}>
            {buttonText}
          </Button>
        )}
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
      {bottomButton && (
        <div className={styles["bottom-button"]}>
          <Button href="" disabled={!isValid}>
            {buttonText}
          </Button>
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
