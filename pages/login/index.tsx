import LoginForm from '@/components/SignForm/LoginForm';
import Logo from '@/components/Logo';

import styles from './LoginPage.module.scss';

import EasyLogin from '@/components/EasyLogin/EasyLogin';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) router.push('/');
  }, []);

  return (
    <div className={styles['sign-main']}>
      <div className={styles['logo']}>
        <Logo />
      </div>
      <LoginForm />
      <EasyLogin />
      <p>
        판다마켓이 처음이신가요? <Link href='/signup'>회원가입</Link>
      </p>
    </div>
  );
}

export default LoginPage;
