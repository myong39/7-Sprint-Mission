import logo from "../../../assets/images/logo/logo.svg";
import google from "../../../assets/images/social/google-logo.png";
import kakao from "../../../assets/images/social/kakao-logo.png";
import ValidationInput from "../components/ValidationInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import "../auth.css";
import api from "../../../api/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isEmailValid && isPasswordValid)
      try {
        const response = await api.login(email, password);
        if (response.status === 200 && response.data.accessToken) {
          localStorage.setItem("accessToken", response.data.accessToken);
          navigate("/");
        } else {
          alert("로그인 실패");
        }
      } catch (error) {
        console.error("로그인 오류:", error);
        alert("로그인 오류");
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
          onChange={(value) => setEmail(value)}
        />

        <ValidationInput
          id='password'
          type='password'
          name='비밀번호'
          placeholder='비밀번호를 입력해주세요'
          onValid={setIsPasswordValid}
          onChange={(value) => setPassword(value)}
        />

        <div className='auth-button'>
          <Button
            text='로그인'
            color='default'
            width='100%'
            disabled={!isEmailValid || !isPasswordValid}
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
        판다마켓이 처음이신가요?
        <a href='/signup'>회원가입</a>
      </div>
    </div>
  );
};

export default LoginPage;
