import styles from './Header.module.scss';
import Logo from '../Logo';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '@/components/button/Button';
import UserProfile from '@/assets/ic_profile.svg';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthProvider';

const headerMenuData = [
  { id: 'menu01', name: '자유게시판', path: '/boards' },
  { id: 'menu02', name: '중고마켓', path: '/items' },
];

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();
  const isPath = router.pathname;
  const { logout } = useAuth(false);

  useEffect(() => {
    setIsLogin(!!localStorage.getItem('accessToken'));
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <ul>
          {headerMenuData.map((menu) => {
            return (
              <li key={menu.id} className={styles.menu}>
                <Link
                  href={menu.path}
                  className={router.pathname === menu.path ? styles.active : ''}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.right}>
        {isLogin ? (
          <UserProfile />
        ) : (
          <Button size='small' onClick={() => router.push('/login')}>
            로그인
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
