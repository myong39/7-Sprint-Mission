import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/components/SearchForm.module.css';
import searchIcon from '@/assets/images/icons/searchIcon.svg';

export default function SearchForm() {
  const router = useRouter();
  const [value, setValue] = useState();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/boards?keyword=${encodeURIComponent(value)}`);
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.searchContainer}>
        <Image
          className={styles.searchIcon}
          src={searchIcon}
          width={24}
          height={24}
          alt='Search Icon'
        />
        <input
          className={styles.searchBar}
          name='keyword'
          value={value}
          onChange={handleChange}
          type='text'
          placeholder='검색할 상품을 입력해주세요'
          autoComplete='off'
        />
      </div>
    </form>
  );
}
