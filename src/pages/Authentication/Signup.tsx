import {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  useRef,
  useState,
  useEffect,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "./api";
import "./Authentication.css";
import logo from "../../assets/logo.svg";
import visibility_off from "../../assets/btn_visibility_off_24px.svg";
import visibility_on from "../../assets/btn_visibility_on_24px.svg";
import google_ic from "../../assets/google-icon.svg";
import kakao_ic from "../../assets/kakao-icon.svg";

interface InputState {
  value: string;
  type?: string;
  Message: string;
  isValid: boolean;
}

function emailCheck(email_address: string) {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (!email_regex.test(email_address)) {
    return false;
  } else {
    return true;
  }
}

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<InputState>({
    value: "",
    Message: "",
    isValid: true,
  });
  const [nickname, setNickmame] = useState<InputState>({
    value: "",
    Message: "",
    isValid: true,
  });
  const [password, setPassword] = useState<InputState>({
    value: "",
    type: "password",
    Message: "",
    isValid: true,
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState<InputState>({
    value: "",
    type: "password",
    Message: "",
    isValid: true,
  });

  const [disabled, setDisabled] = useState<boolean>(true);

  const eyesImgRef = useRef<HTMLImageElement | null>(null);
  const checkEyesImgRef = useRef<HTMLImageElement | null>(null);
  const passwordCheckRef = useRef<HTMLInputElement | null>(null);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail((prevEmail) => ({
      ...prevEmail,
      value: e.target.value,
    }));

    if (e.target.value.length > 0) {
      if (email.Message === "이메일을 입력해주세요") {
        setEmail((prevEmail) => ({
          ...prevEmail,
          Message: "",
        }));
        e.target.classList.remove("focusout");
      }
    }
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickmame((prevNickname) => ({
      ...prevNickname,
      value: e.target.value,
    }));

    if (e.target.value.length > 0) {
      if (nickname.Message === "닉네임을 입력해주세요") {
        setNickmame((prevNickname) => ({
          ...prevNickname,
          Message: "",
        }));
        e.target.classList.remove("focusout");
      }
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword((prevPassword) => ({
      ...prevPassword,
      value: e.target.value,
    }));

    if (e.target.value.length > 0) {
      if (password.Message === "비밀번호를 입력해주세요") {
        setPassword((prevPassword) => ({
          ...prevPassword,
          Message: "",
        }));
        e.target.classList.remove("focusout");
      }
    }

    if (
      e.target.value === passwordConfirmation.value &&
      e.target.value.length >= 8
    ) {
      setPassword((prevPassword) => ({
        ...prevPassword,
        Message: "",
        isValid: false,
      }));
      setPasswordConfirmation((prevPasswordConfirmation) => ({
        ...prevPasswordConfirmation,
        Message: "",
        isValid: false,
      }));
      e.target.classList.remove("focusout");
      passwordCheckRef.current?.classList.remove("focusout");
    } else if (e.target.value !== passwordConfirmation.value) {
      setPassword((prevPassword) => ({
        ...prevPassword,
        isValid: true,
      }));
    }
  };

  const handlePasswordCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation((prevPasswordConfirmation) => ({
      ...prevPasswordConfirmation,
      value: e.target.value,
    }));

    if (e.target.value.length > 0) {
      if (passwordConfirmation.Message === "비밀번호를 입력해주세요") {
        setPasswordConfirmation((prevPasswordConfirmation) => ({
          ...prevPasswordConfirmation,
          Message: "",
        }));
        e.target.classList.remove("focusout");
      }
    }

    if (e.target.value === password.value && e.target.value.length >= 8) {
      setPassword((prevPassword) => ({
        ...prevPassword,
        Message: "",
        isValid: false,
      }));
      setPasswordConfirmation((prevPasswordConfirmation) => ({
        ...prevPasswordConfirmation,
        Message: "",
        isValid: false,
      }));
      e.target.classList.remove("focusout");
    } else if (e.target.value !== password.value) {
      setPasswordConfirmation((prevPasswordConfirmation) => ({
        ...prevPasswordConfirmation,
        Message: "비밀번호가 일치하지 않습니다",
        isValid: true,
      }));
      e.target.classList.add("focusout");
    }
  };

  const handleEmailBlur = (e: FocusEvent<HTMLInputElement>) => {
    let emailValue = e.target.value;

    if (e.target.value === "") {
      setEmail((prevEmail) => ({
        ...prevEmail,
        Message: "이메일을 입력해주세요",
        isValid: true,
      }));
      e.target.classList.add("focusout");
    } else if (!emailCheck(emailValue) && e.target.value !== "") {
      setEmail((prevEmail) => ({
        ...prevEmail,
        Message: "잘못된 이메일 형식입니다",
        isValid: true,
      }));
      e.target.classList.add("focusout");
    } else {
      setEmail((prevEmail) => ({
        ...prevEmail,
        Message: "",
        isValid: false,
      }));
      e.target.classList.remove("focusout");
    }
  };

  const handleNicknameBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setNickmame((prevNickname) => ({
        ...prevNickname,
        Message: "닉네임을 입력해주세요",
        isValid: true,
      }));
      e.target.classList.add("focusout");
    } else {
      setNickmame((prevNickname) => ({
        ...prevNickname,
        Message: "",
        isValid: false,
      }));
      e.target.classList.remove("focusout");
    }
  };

  const handlePasswordBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setPassword((prevPassword) => ({
        ...prevPassword,
        Message: "비밀번호를 입력해주세요",
        isValid: true,
      }));
      e.target.classList.add("focusout");
    } else if (e.target.value.length < 8) {
      setPassword((prevPassword) => ({
        ...prevPassword,
        Message: "비밀번호를 8자 이상 입력해주세요",
        isValid: true,
      }));
      e.target.classList.add("focusout");
    } else if (e.target.value !== passwordConfirmation.value) {
      setPassword((prevPassword) => ({
        ...prevPassword,
        Message: "",
        isValid: true,
      }));
      e.target.classList.remove("focusout");
    } else {
      setPassword((prevPassword) => ({
        ...prevPassword,
        Message: "",
        isValid: false,
      }));
      e.target.classList.remove("focusout");
    }
  };

  const handlePasswordCheckBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setPasswordConfirmation((prevPasswordConfirmation) => ({
        ...prevPasswordConfirmation,
        Message: "비밀번호를 입력해주세요",
        isValid: true,
      }));
      e.target.classList.add("focusout");
    } else if (e.target.value !== password.value) {
      setPasswordConfirmation((prevPasswordConfirmation) => ({
        ...prevPasswordConfirmation,
        Message: "비밀번호가 일치하지 않습니다",
        isValid: true,
      }));
      e.target.classList.add("focusout");
    } else {
      setPasswordConfirmation((prevPasswordConfirmation) => ({
        ...prevPasswordConfirmation,
        Message: "",
        isValid: false,
      }));
      e.target.classList.remove("focusout");
    }
  };

  const handleEyesButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "password") {
      setPassword((prevPassword) => ({
        ...prevPassword,
        type: prevPassword.type === "password" ? "text" : "password",
      }));

      if (eyesImgRef.current) {
        eyesImgRef.current.src =
          password.type === "password" ? visibility_off : visibility_on;
      }
    }
    if (e.currentTarget.name === "password-check") {
      setPasswordConfirmation((prevPasswordConfirmation) => ({
        ...prevPasswordConfirmation,
        type:
          prevPasswordConfirmation.type === "password" ? "text" : "password",
      }));

      if (checkEyesImgRef.current) {
        checkEyesImgRef.current.src =
          passwordConfirmation.type === "password"
            ? visibility_off
            : visibility_on;
      }
    }
  };

  const handleSignup = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      email.isValid ||
      nickname.isValid ||
      password.isValid ||
      passwordConfirmation.isValid
    ) {
      return;
    }

    try {
      await signup(
        email.value,
        nickname.value,
        password.value,
        passwordConfirmation.value
      );

      navigate("/login");
    } catch (error) {
      console.error("회원가입에 실패했습니다.", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    setDisabled(
      !(
        email.isValid === false &&
        password.isValid === false &&
        passwordConfirmation.isValid === false &&
        nickname.isValid === false
      )
    );
  }, [
    email.isValid,
    password.isValid,
    passwordConfirmation.isValid,
    nickname.isValid,
  ]);

  return (
    <div className="body-container">
      <Link to="/" className="auth-logo-link">
        <button className="auth-logo" type="button">
          <img src={logo} alt="판다마켓로고" />
        </button>
      </Link>
      <div className="auth-container">
        <form className="auth-form">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email.value}
            placeholder="이메일을 입력해주세요"
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
          {email.Message !== "" && (
            <span className="focusout">{email.Message}</span>
          )}
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            onChange={handleNicknameChange}
            onBlur={handleNicknameBlur}
          />
          {nickname.Message !== "" && (
            <span className="focusout">{nickname.Message}</span>
          )}
          <label htmlFor="password">비밀번호</label>
          <div className="input-container">
            <input
              type={password.type}
              id="password"
              name="password"
              value={password.value}
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
            />
            <button
              className="btn_visibility"
              name="password"
              type="button"
              onClick={handleEyesButtonClick}
            >
              <img
                className="eyes-img"
                src={visibility_off}
                alt="비밀번호가리기아이콘"
                ref={eyesImgRef}
              />
            </button>
          </div>
          {password.Message !== "" && (
            <span className="focusout">{password.Message}</span>
          )}
          <label htmlFor="password-check">비밀번호 확인</label>
          <div className="input-container">
            <input
              type={passwordConfirmation.type}
              id="password-check"
              name="password-check"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              onChange={handlePasswordCheckChange}
              onBlur={handlePasswordCheckBlur}
              ref={passwordCheckRef}
            />
            <button
              className="btn_visibility"
              name="password-check"
              type="button"
              onClick={handleEyesButtonClick}
            >
              <img
                className="eyes-img"
                src={visibility_off}
                alt="비밀번호가리기아이콘"
                ref={checkEyesImgRef}
              />
            </button>
          </div>
          {passwordConfirmation.Message !== "" && (
            <span className="focusout">{passwordConfirmation.Message}</span>
          )}
          <Link to="/login" className="btn_large-link">
            <button
              className="btn_large"
              type="submit"
              onClick={handleSignup}
              disabled={disabled}
            >
              회원가입
            </button>
          </Link>
        </form>
        <div className="sns-login">
          <div>간편 로그인하기</div>
          <div className="sns-icon">
            <button
              type="button"
              onClick={() => (location.href = "https://www.google.com/")}
            >
              <img src={google_ic} alt="구글아이콘" />
            </button>
            <button
              type="button"
              onClick={() =>
                (location.href = "https://www.kakaocorp.com/page/")
              }
            >
              <img src={kakao_ic} alt="카톡아이콘" />
            </button>
          </div>
        </div>
        <div className="login-page-move">
          이미 회원이신가요? <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
