interface ILoginForm {
  email: string;
  password: string;
}

interface ISignUpForm extends ILoginForm {
  nickname: string;
  passwordConfirmation: string;
}
