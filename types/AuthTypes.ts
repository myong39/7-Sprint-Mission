import { FocusEvent } from "react";

type ValidationFunction = (
  input: string | FocusEvent<HTMLInputElement>
) => boolean;

export interface AuthFormProps {
  mode: "login" | "signup";
}

export interface FieldInfo {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  autoComplete: string;
  type?: string;
  className?: string;
  required?: boolean;
  emptyErrorMessage: string;
  invalidErrorMessage: string;
  isValid?: boolean;
  isEmpty?: boolean;
  value?: string | number | readonly string[] | undefined;
  validationFunction: ValidationFunction;
}
