import { InputFieldProps } from "@/types/registerTypes";
import React from "react";
import FileInput from "../FileInput/FileInput";
import styles from "./InputField.module.scss";

export default function InputField({
  field,
  value,
  onChange,
}: InputFieldProps) {
  switch (field.type) {
    case "textarea":
      return (
        <textarea
          name={field.name}
          value={value as string}
          onChange={onChange}
          placeholder={field.placeholder}
          className={`${styles.input} ${styles.textarea}`}
        />
      );

    case "file":
      return (
        <FileInput
          name={field.name}
          value={value as File}
          onChange={onChange}
          className={styles["file"]}
        />
      );

    case "input":
      return (
        <input
          type={field.type}
          name={field.name}
          onChange={onChange}
          placeholder={field.placeholder}
          className={styles["input"]}
        />
      );

    default:
      return null;
  }
}
