import Image from 'next/image'
import styles from '@/src/styles/Header.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getDeviceType, debounce } from '@/src/utils'
import { useRouter } from 'next/router'

type NavItem = {
  id: string
  name: string
  link: string
}

type NavInfo = NavItem[]

const navInfo: NavInfo = [
  { id: 'board', name: '자유게시판', link: '/board' },
  { id: 'market', name: '중고마켓', link: '/market' },
]

export default function Header() {
  const [deviceType, setdeviceType] = useState('')

  const router = useRouter()
  const { pathname } = router

  const handleResize = () => {
    const width = window.innerWidth
    const deviceType = getDeviceType(width)
    setdeviceType(deviceType)
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 200)
    window.addEventListener('resize', debouncedHandleResize)
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        {deviceType !== 'mobile' && (
          <Image
            src="/assets/icons/logo.svg"
            alt="판다마켓 로고"
            width={40}
            height={40}
            priority
          />
        )}

        <h2 className={styles.title}>판다마켓</h2>
      </div>
      <div className={styles.nav}>
        {navInfo.map((item) => {
          const isCurrentPath = item.link === pathname
          const setFontColor = isCurrentPath && styles.fontColorForCurrentPath

          return (
            <Link
              className={`${styles.navItem} ${setFontColor}`}
              key={item.id}
              href={item.link}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
      <div className={styles.user}>
        <Image
          src="/assets/icons/userProfile.svg"
          alt="유저 프로필"
          width={40}
          height={40}
          priority
        ></Image>
      </div>
    </header>
  )
}
