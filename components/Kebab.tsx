import Image from 'next/image';
import { useState } from 'react';
import { Dropdown } from './Dropdown';

function Kebab() {
  const [isKebabOpen, setIsKebabOpen] = useState<boolean>(false);

  const handleKebabToggle = () => {
    setIsKebabOpen((prev) => !prev);
  };

  return (
    <div className='kebab'>
      <Image
        src='/images/ic_kebab.svg'
        alt='kebab'
        height={24}
        width={24}
        onClick={handleKebabToggle}
      />

      {isKebabOpen && <Dropdown first='수정' second='삭제' />}
    </div>
  );
}

export default Kebab;
