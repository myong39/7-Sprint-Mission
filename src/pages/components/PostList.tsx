import Image from 'next/image'
import styles from '@/src/styles/PostList.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getDeviceType, debounce } from '@/src/utils'
import axiosPanda from '../api/axiosPanda'
import Button from './Button'

const sortQuery = {
  최신순: 'recent',
  인기순: 'like',
}

const sortOrderList = ['최신순', '인기순']

export default function PostList() {
  const [deviceType, setDeviceType] = useState('desktop')
  const [post, setPost] = useState<any[]>([])
  const [sortOrder, setSortOrder] = useState(0)

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axiosPanda.get(
          `articles?page=1&pageSize=10&orderBy=${sortQuery[sortOrderList[sortOrder] as keyof typeof sortQuery]}`
        )
        const { list } = response.data
        setPost(list)
        console.log(list)
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    getArticles()
  }, [deviceType, sortOrder])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const deviceType = getDeviceType(width)
      setDeviceType(deviceType)
    }

    const debouncedHandleResize = debounce(handleResize, 200)
    window.addEventListener('resize', debouncedHandleResize)
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  const handleDropDownClick = () => {
    setSortOrder((sortOrder + 1) % sortOrderList.length)
  }

  return (
    <section className={styles.PostList}>
      <div className={styles.titleBar}>
        <h2 className={styles.title}>게시글</h2>
        <Button>글쓰기</Button>
      </div>
      <div className={styles.searchBar}>
        <label htmlFor="searchInput" className={styles.searchBarInner}>
          <Image
            src="/assets/icons/search.svg"
            alt=""
            width={24}
            height={24}
            priority
          ></Image>
          <input
            id="searchInput"
            className={styles.searchInput}
            placeholder="검색할 상품을 입력해 주세요"
          ></input>
        </label>
        <div className={styles.dropDown} onClick={handleDropDownClick}>
          <p className={styles.dropDownCurrentItem}>
            {sortOrderList[sortOrder]}
          </p>
          <Image
            src="/assets/icons/dropDownArrow.svg"
            alt=""
            width={24}
            height={24}
            priority
          ></Image>
        </div>
      </div>
      <div className={styles.list}>
        {post.map((item) => (
          <PostPreview key={item.id} post={item} />
        ))}
      </div>
    </section>
  )
}

function PostPreview({ post }: { post: any }) {
  const dateString = post.createdAt
  const date = new Date(dateString)
  const formattedDate = date.toISOString().split('T')[0]

  return (
    <div className={styles.PostPreview}>
      <div className={styles.contentsBox}>
        <p className={styles.contentsTitle}>{post.title}</p>
        {post.image && (
          <div className={styles.imageWrapper}>
            <Image src={post.image} alt="" width={48} height={48} priority />
          </div>
        )}
      </div>
      <div className={styles.infoBox}>
        <div className={styles.userInfo}>
          <Image
            src="/assets/icons/userProfile.svg"
            alt=""
            width={24}
            height={24}
            priority
          ></Image>
          <p>{post.writer.nickname}</p>
          <p>{formattedDate}</p>
        </div>
        <div className={styles.likeInfo}>
          <Image
            src="/assets/icons/likeDisabled.svg"
            alt=""
            width={24}
            height={24}
            priority
          ></Image>
          <p>{post.likeCount}</p>
        </div>
      </div>
    </div>
  )
}
