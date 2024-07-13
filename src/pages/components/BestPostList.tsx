import Image from 'next/image'
import styles from '@/src/styles/BestPostList.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getDeviceType, debounce } from '@/src/utils'
import axiosPanda from '../api/axiosPanda'

const postCount = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
}

export default function BestPostList() {
  const [deviceType, setDeviceType] = useState('desktop')
  const [bestPost, setBestPost] = useState<any[]>([])

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axiosPanda.get(
          `articles?page=1&pageSize=${postCount[deviceType as keyof typeof postCount]}&orderBy=like`
        )
        const { list } = response.data
        setBestPost(list)
        console.log(list)
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    getArticles()
  }, [deviceType])

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

  if (bestPost.length === 0) {
    return null
  }

  return (
    <section className={styles.BestPostList}>
      <h2 className={styles.title}>베스트 게시글</h2>
      <div className={styles.list}>
        {bestPost.map((item) => (
          <BestPostCard key={item.id} post={item} />
        ))}
      </div>
    </section>
  )
}

function BestPostCard({ post }: { post: any }) {
  const dateString = post.createdAt
  const date = new Date(dateString)
  const formattedDate = date.toISOString().split('T')[0]

  return (
    <div className={styles.BestPostCard}>
      <Image
        src="/assets/icons/bestBadge.svg"
        alt=""
        width={102}
        height={30}
        priority
      />
      <div className={styles.contentsBox}>
        <p className={styles.contentsText}>{post.content}</p>
        {post.image && (
          <div className={styles.imageWrapper}>
            <Image src={post.image} alt="" width={48} height={48} priority />
          </div>
        )}
      </div>
      <div className={styles.infoBox}>
        <div className={styles.userNameAndLike}>
          <p>{post.writer.nickname}</p>
          <div className={styles.likeBox}>
            <Image
              src="/assets/icons/likeDisabled.svg"
              alt=""
              width={16}
              height={16}
              priority
            />
            <p>{post.likeCount}</p>
          </div>
        </div>
        <p>{formattedDate}</p>
      </div>
    </div>
  )
}
