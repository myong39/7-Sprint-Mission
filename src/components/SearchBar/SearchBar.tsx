import React, { useState } from 'react'
import Image from 'next/image'
import styles from './SearchBar.module.scss'
import searchIcon from '@/public/svgs/search.svg'

interface SearchBarProps {
  keyword: (searchTerm: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ keyword }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    keyword(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.searchIcon}>
        <Image src={searchIcon} alt="검색 아이콘" width={24} height={24} />
      </div>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchBar
