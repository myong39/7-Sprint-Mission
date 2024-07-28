import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href='/'>
      <Image src='/images/image-logo-img.svg' fill alt='logo' />
    </Link>
  );
}

export default Logo;
