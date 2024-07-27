import React, { useState } from "react";
import logo from "../../../assets/images/logo/logo.svg";
import google from "../../../assets/images/social/google-logo.png";
import kakao from "../../../assets/images/social/kakao-logo.png";
import { Button } from "../../../components/Button/Button";
import ValidationInput from "../components/ValidationInput";
import "../auth.css";

const SignupPage: React.FC = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      isEmailValid &&
      isPasswordValid &&
      isNicknameValid &&
      isPasswordConfirmValid
    ) {
      alert("회원가입 성공");
    }
  };

  return (
    <div className='auth-container'>
      <div className='auth-logo-box'>
        <a href='/'>
          <img id='auth-logo' className='logo' src={logo} alt='판다마켓 로고' />
        </a>
      </div>

      <form method='post' onSubmit={handleSubmit}>
        <ValidationInput
          id='email'
          type='email'
          name='이메일'
          placeholder='이메일을 입력해주세요'
          onValid={setIsEmailValid}
        />

        <ValidationInput
          id='nickname'
          type='text'
          name='닉네임'
          placeholder='닉네임을 입력해 주세요'
          onValid={setIsNicknameValid}
        />

        <ValidationInput
          id='password'
          type='password'
          name='비밀번호'
          placeholder='비밀번호를 입력해주세요'
          onValid={setIsPasswordValid}
        />

        <ValidationInput
          id='password-confirm'
          type='passwordConfirm'
          name='비밀번호 확인'
          placeholder='비밀번호를 다시 한 번 입력해 주세요'
          onValid={setIsPasswordConfirmValid}
        />

        <div className='auth-button'>
          <Button
            text='회원가입'
            color='default'
            width='100%'
            disabled={
              !isEmailValid ||
              !isPasswordValid ||
              !isNicknameValid ||
              !isPasswordConfirmValid
            }
          />
        </div>
      </form>

      <div className='login-social'>
        <h4>간편 로그인하기</h4>
        <div className='login-social-buttons'>
          <a
            href='https://www.google.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={google} alt='구글-로고' width='42' />
          </a>
          <a
            href='https://www.kakaocorp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={kakao} alt='카카오-로고' width='42' />
          </a>
        </div>
      </div>

      <div className='login-footer'>
        이미 회원이신가요?
        <a href='/login'>로그인</a>
      </div>
    </div>
  );
};

export default SignupPage;
