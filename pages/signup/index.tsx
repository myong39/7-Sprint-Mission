import EasyLogin from '@/components/EasyLogin/EasyLogin';
import Logo from '@/components/Logo';
import Link from 'next/link';
import styles from '@/pages/login/LoginPage.module.scss';
import SignUpForm from '@/components/SignForm/SignUpForm';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function SignUpPage() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) router.push('/');
  }, []);

  return (
    <div className={styles['sign-main']}>
      <div className={styles['logo']}>
        <Logo />
      </div>
      <SignUpForm />
      <EasyLogin />
      <p>
        이미 회원이신가요? <Link href='/login'>로그인</Link>
      </p>
    </div>
  );
}

export default SignUpPage;
