import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/Nav.module.css';
import pandaMarketLogo from '@/assets/images/pandaMarketLogo.svg';
import pandaMarketLogoMobile from '@/assets/images/pandaMarketLogoMobile.svg';
import profileIcon from '@/assets/images/icons/profileIcon.svg';

function getLinkStyle(currentPath, href) {
  const isActive =
    currentPath === href ||
    (currentPath.startsWith('/board') && href === '/boards');
  const color = isActive ? '#3692FF' : '#4B5563';
  return {
    textDecoration: 'none',
    color: color,
  };
}

export default function Nav() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <Link className={styles.logoContainer} href='/'>
          <Image
            className={styles.logoMobileImg}
            src={pandaMarketLogoMobile}
            width={81}
            height={40}
            alt='PandaMarket logo in mobile'
          />
          <Image
            className={styles.logoImg}
            src={pandaMarketLogo}
            width={153}
            height={51}
            alt='PandaMarket logo in desktop and tablet'
            priority
          />
        </Link>
        <ul className={styles.menu}>
          <li className={styles.freeBoard}>
            <Link href='/boards' style={getLinkStyle(currentPath, '/boards')}>
              자유게시판
            </Link>
          </li>
          <li className={styles.secondhandMarket}>
            <Link href='/items' style={getLinkStyle(currentPath, '/items')}>
              중고마켓
            </Link>
          </li>
        </ul>
      </div>
      <Image src={profileIcon} width={40} height={40} alt='my profile image' />
    </div>
  );
}
