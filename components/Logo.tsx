import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  // 로고 바뀌는거..
  return (
    <Link href='/'>
      <Image
        src='images/image-logo-img.svg'
        width={153}
        height={51}
        alt='logo'
      />
    </Link>
  );
}

export default Logo;
