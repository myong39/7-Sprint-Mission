import { useEffect, useState } from 'react';
import styles from './Dropdown.module.scss';

import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

interface DropdownProps {
  className?: string;
  first: string;
  second: string;
  firstClick?: any;
  secondClick?: any;
}

export function Dropdown({
  className,
  first,
  firstClick,
  second,
  secondClick,
}: DropdownProps) {
  return (
    <ul className={styles.ul}>
      <li className={styles.list} onClick={firstClick}>
        {first}
      </li>
      <li className={styles.list} onClick={secondClick}>
        {second}
      </li>
    </ul>
  );
}

interface Props {
  setOrder: any;
}

function DropdownList({ setOrder }: Props) {
  const handleNewClick = () => setOrder('recent');
  const handleBestClick = () => setOrder('like');
  return (
    <Dropdown
      first='최신순'
      firstClick={handleNewClick}
      second='좋아요순'
      secondClick={handleBestClick}
    />
  );
}

interface PropsProduct {
  setOrder?: any;
  order: TOrder;
}

function ProductDropdown({ setOrder, order }: PropsProduct) {
  const [mounted, setMounted] = useState<boolean>(false); // hydration 관련 에러 해결용
  const [isDropdownView, setDropdownView] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };
  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div className={styles.dropdown} onBlur={handleBlurContainer}>
          <label onClick={handleClickContainer}>
            <button>
              {isMobile ? (
                <Image
                  src='images/ic_sort.svg'
                  width={24}
                  height={24}
                  alt='sort'
                />
              ) : (
                <>
                  <span>{order === 'recent' ? '최신순' : '좋아요순'}</span>
                  <Image
                    src='images/ic_arrow_down.svg'
                    width={24}
                    height={24}
                    alt='arrow'
                  />
                </>
              )}
            </button>
          </label>
          {isDropdownView && <DropdownList setOrder={setOrder} />}
        </div>
      )}
    </>
  );
}

export default ProductDropdown;
