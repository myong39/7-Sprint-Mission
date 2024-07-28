import { FocusEvent } from "react";
import { FieldInfo, PageConfigType } from "@/types/AuthTypes";

enum FieldType {
  Email = "email",
  Nickname = "nickname",
  Password = "password",
  ConfirmPassword = "confirmPassword",
}

export const fields: { [id: string]: FieldInfo } = {
  [FieldType.Email]: {
    id: FieldType.Email,
    name: FieldType.Email,
    label: "이메일",
    placeholder: "이메일을 입력해주세요",
    autoComplete: FieldType.Email,
    type: FieldType.Email,
    required: true,
    emptyErrorMessage: "이메일을 입력해주세요.",
    invalidErrorMessage: "잘못된 이메일 형식입니다.",
    value: "",
    validationFunction: checkEmail,
  },
  [FieldType.Nickname]: {
    id: FieldType.Nickname,
    name: FieldType.Nickname,
    label: "닉네임",
    placeholder: "닉네임을 입력해주세요",
    autoComplete: FieldType.Nickname,
    type: "text",
    emptyErrorMessage: "닉네임을 입력해주세요.",
    invalidErrorMessage: "닉네임을 입력해주세요.",
    value: "",
    validationFunction: checkNotEmpty,
  },
  [FieldType.Password]: {
    id: FieldType.Password,
    name: FieldType.Password,
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요",
    autoComplete: "new-password",
    type: FieldType.Password,
    required: true,
    emptyErrorMessage: "비밀번호를 입력해주세요.",
    invalidErrorMessage: "비밀번호를 8자 이상 입력해주세요.",
    value: "",
    validationFunction: checkPasswordLength,
  },
  [FieldType.ConfirmPassword]: {
    id: FieldType.ConfirmPassword,
    name: FieldType.ConfirmPassword,
    label: "비밀번호 확인",
    placeholder: "비밀번호를 다시 입력해주세요",
    autoComplete: "new-password",
    type: "password",
    required: true,
    emptyErrorMessage: "비밀번호 확인을 입력해주세요.",
    invalidErrorMessage: "비밀번호가 일치하지 않습니다.",
    value: "",
    validationFunction: checkPasswordMatch,
  },
};

export function checkNotEmpty(value: string): boolean {
  return value.trim() !== "";
}

export function checkEmail(input: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(input);
}

export function checkPasswordLength(
  input: string | FocusEvent<HTMLInputElement>
): boolean {
  if (typeof input === "string") {
    return input.length >= 8;
  }
  return false;
}

export function checkPasswordMatch() {
  const inputPassword = document.querySelector("#password") as HTMLInputElement;
  const inputPasswordConfirmation = document.querySelector(
    "#confirmPassword"
  ) as HTMLInputElement;

  return inputPassword?.value === inputPasswordConfirmation?.value;
}

interface SetValidationErrorStyleProps {
  input: HTMLInputElement;
  errorMessage: Element | null;
  isChecked: boolean;
}

export const setValidationErrorStyle = ({
  input,
  errorMessage,
  isChecked,
}: SetValidationErrorStyleProps) => {
  if (isChecked) {
    input?.classList.add("error-border");
    errorMessage?.classList.add("visible-maker");
  } else {
    input?.classList.remove("error-border");
    errorMessage?.classList.remove("visible-maker");
  }
};

export function getErrorMessage(
  isEmpty: boolean,
  isValid: boolean,
  emptyErrorMessage: string,
  invalidErrorMessage: string
) {
  return isEmpty ? emptyErrorMessage : isValid ? "" : invalidErrorMessage;
}

export const getFieldsByMode = (mode: "login" | "signup") => {
  const baseFields = [fields[FieldType.Email], fields[FieldType.Password]];

  const additionalFieldsByMode: {
    [key in "signup" | "login"]?: FieldInfo[];
  } = {
    signup: [
      fields[FieldType.Email],
      fields[FieldType.Nickname],
      fields[FieldType.Password],
      fields[FieldType.ConfirmPassword],
    ],
  };

  return additionalFieldsByMode[mode] || baseFields;
};

export const pageConfig: { [key: string]: PageConfigType } = {
  login: {
    mode: "login",
    buttonText: "회원가입",
    infoMessage: "판다마켓이 처음이신가요? ",
    goToPage: "signup",
  },
  signup: {
    mode: "signup",
    buttonText: "로그인",
    infoMessage: "이미 회원이신가요? ",
    goToPage: "login",
  },
};
