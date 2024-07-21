import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import axios from '@/lib/axios';
import Input from '@/components/Input';
import EasyLogin from '@/components/EasyLogin';
import styles from '@/styles/login.module.css';
import pandaMarketLogo from '@/assets/images/pandaMarketLogo.svg';

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      const response = await axios.post('/auth/signIn', formData);

      const { accessToken, refreshToken } = response.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      router.push('/');
    } catch (error) {
      alert('로그인에 실패했습니다.');
    }
  };

  // 비밀번호
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.loginContainer}>
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
          name='password'
          value={formData.password}
          type='password'
          className='password'
          placeholder='비밀번호를 입력해주세요'
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          onChange={handleChange}
        >
          비밀번호
        </Input>
        <div>
          <button type='submit' className={styles.loginBtn} id='signInBtn'>
            로그인
          </button>
        </div>
        <EasyLogin />
        <div className={styles.signupWrap}>
          <span>판다마켓이 처음이신가요?</span>
          <Link href='/auth/signup' className={styles.signupLink}>
            <span>회원가입</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
