import { FocusEvent } from "react";
import { FieldInfo } from "@/types/AuthTypes";

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
    isValid: false,
    isEmpty: false,
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
    invalidErrorMessage: "",
    isValid: false,
    isEmpty: false,
    value: "",
    validationFunction: () => true,
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
    isValid: false,
    isEmpty: false,
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
    isValid: false,
    isEmpty: false,
    value: "",
    validationFunction: checkPasswordMatch,
  },
};

// 공백 검사
export function checkEmpty(input: FocusEvent<HTMLInputElement>) {
  return input?.target.value.trim() === "";
}

// 이메일 철자 검사
export function checkEmail(
  input: string | FocusEvent<HTMLInputElement>
): boolean {
  if (typeof input === "string") {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(input);
  }

  return false;
}

// 비밀번호 길이 검사
export function checkPasswordLength(
  input: string | FocusEvent<HTMLInputElement>
): boolean {
  if (typeof input === "string") {
    return input.length >= 8;
  }
  return false;
}

// 비밀번호 일치 검사
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

// 유효성 검사 에러시 스타일 적용
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

// 유효성 검사 에러시 적용할 메시지
export function getErrorMessage(
  isEmpty: boolean,
  isValid: boolean,
  emptyErrorMessage: string,
  invalidErrorMessage: string
) {
  return isEmpty ? emptyErrorMessage : isValid ? "" : invalidErrorMessage;
}

// page mode에 따라 baseFields 적용하여 반환
export const getFieldsByMode = (mode: "login" | "signup") => {
  const baseFields = [fields["email"], fields["password"]];

  const additionalFieldsByMode: {
    [key: string]: (typeof fields)[keyof FieldInfo][];
  } = {
    signup: [fields["nickname"], fields["confirmPassword"]],
    // 추가로 모드가 늘어날 경우
  };

  return [...baseFields, ...(additionalFieldsByMode[mode] || [])];
};
