import Link from 'next/link';
import Image from 'next/image';
import logoMobile from '@/public/logoMobile.svg';
import logo from '@/public/logo.svg';
import profile from '@/public/profile.svg';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function header() {
  const [deviceType] = useMediaQuery();

  const isMobile = deviceType === 'Mobile';
  const responsiveLogoImg = isMobile ? logoMobile : logo;

  return (
    <header className="sticky top-0 z-10 flex h-[70px] max-w-[1920px] items-center justify-between gap-x-4 border-b border-solid border-gray-200 bg-white px-6 xl:px-[200px]">
      <Link href="/">
        <Image src={responsiveLogoImg} alt="판다마켓 로고" priority />
      </Link>
      <ul className="font-primary flex flex-grow items-center gap-x-2 text-base font-bold text-gray-600">
        <Link href="/community">
          <li>자유게시판</li>
        </Link>
        <Link href="/items">
          <li>중고마켓</li>
        </Link>
      </ul>
      <Image src={profile} alt="판다마켓 프로필" width={40} height={40} />
    </header>
  );
}
