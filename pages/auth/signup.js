import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import axios from '@/lib/axios';
import Input from '@/components/Input';
import EasyLogin from '@/components/EasyLogin';
import styles from '@/styles/signUp.module.css';
import pandaMarketLogo from '@/assets/images/pandaMarketLogo.svg';

SignUp.hideNav = true;
SignUp.customContainer = true;

export default function SignUp() {
  const router = useRouter();

  // 회원가입 POST 요청
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordConfirmation: '',
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      router.push('/');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/auth/signup', formData);

      alert('회원가입이 완료되었습니다.');
      router.push('/auth/login');
    } catch (error) {
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  // 비밀번호
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const [showPassword2, setShowPassword2] = useState(false);
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.logo}>
        <Link href='/'>
          <Image
            className={styles.logoImg}
            src={pandaMarketLogo}
            alt='pandaMarketLogo'
            width={396}
            height={132}
          />
        </Link>
      </div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formWrapper}>
          <div className={styles.labelInputWrapper}>
            <Input
              name='email'
              value={formData.email}
              type='email'
              className='email'
              placeholder='이메일을 입력해주세요'
              onChange={handleChange}
            >
              이메일
            </Input>
            <Input
              name='nickname'
              value={formData.nickname}
              className='nickname'
              placeholder='닉네임을 입력해주세요'
              onChange={handleChange}
            >
              닉네임
            </Input>
            <Input
              name='password'
              value={formData.password}
              type='password'
              className='password'
              placeholder='비밀번호를 입력해주세요'
              showPassword={showPassword1}
              togglePasswordVisibility={togglePasswordVisibility1}
              onChange={handleChange}
            >
              비밀번호
            </Input>
            <Input
              name='passwordConfirmation'
              value={formData.passwordConfirmation}
              type='password'
              className='pwdRepeat'
              placeholder='비밀번호를 다시 한 번 입력해주세요'
              showPassword={showPassword2}
              togglePasswordVisibility={togglePasswordVisibility2}
              onChange={handleChange}
            >
              비밀번호 확인
            </Input>
          </div>
          <div>
            <button type='submit' className={styles.signupBtn} id='signupBtn'>
              회원가입
            </button>
          </div>
        </div>
        <EasyLogin />
        <div className={styles.loginWrap}>
          <span>이미 회원이신가요?</span>
          <Link href='/auth/login' className={styles.loginLink}>
            <span>로그인</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
