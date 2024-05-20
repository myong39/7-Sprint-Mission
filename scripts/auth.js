import { handlePasswordVisibilityToggle } from "./togglePasswordVisibility.js";
import { togglePasswordBtns, form, formInputsData } from "./constants.js";
import { handleValidateInput, handleValidateForm } from "./authValidation.js";

// 비밀번호 가시성 버튼 클릭 이벤트
togglePasswordBtns?.forEach((button) => {
  button.addEventListener("click", handlePasswordVisibilityToggle);
});

// 폼 전체 유효성 검사 submit 이벤트
form && form.addEventListener("submit", handleValidateForm);

// inputs(이메일,닉네임,비밀번호,비밀번호 확인) 유효성 검사 이벤트
Object.entries(formInputsData).forEach(([name, { element }]) => {
  if (element) {
    element.addEventListener("blur", (event) => {
      handleValidateInput(event, name);
    });
  }
});