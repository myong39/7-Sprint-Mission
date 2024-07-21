import React, { FormEvent, useState } from "react";
import InputField from "./InputField";

import Button from "../Button";
import { AuthFormProps, HandleChange } from "@/types/registerTypes";
import { FIELDTYPE, FormValues } from "./registerConfig";

export default function RegisterForm({
  titleText = "",
  buttonText = "",
  fields,
}: AuthFormProps) {
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
    <>
      <form
        method="post"
        className="form"
        onSubmit={handleSubmit}
        onBlur={handleBlur}
      >
        <h1>{titleText}</h1>
        {Object.values(fields).map((field) => (
          <div key={field.id}>
            <h2>{field.placeholder || field.name}</h2>
            <InputField
              field={field}
              value={formValues[field.id]}
              onChange={handleChange}
            />
          </div>
        ))}
        <Button href="/" disabled={!isValid}>
          {buttonText}
        </Button>
      </form>
    </>
  );
}
