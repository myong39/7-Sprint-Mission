import SearchInput from '@/components/input/SearchInput';

import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';

function SearchForm({ initialValue = '' }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value) {
      router.push('/boards');
      return;
    }
    router.push(`/boards?q=${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput
        placeholder='검색할 상품을 입력해주세요.'
        name='q'
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchForm;
