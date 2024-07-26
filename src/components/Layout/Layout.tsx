import styles from './Layout.module.scss'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const Layout = ({
  className = '',
  ...props
}: {
  className?: string
  children: React.ReactNode
}) => {
  const router = useRouter()
  const isAuthPage = router.pathname.startsWith('/auth')
  const pageClassName = classNames(styles.container, {
    [styles.authPage]: isAuthPage,
    [styles.page]: !isAuthPage,
    [className]: className,
  })

  return <div className={pageClassName} {...props} />
}

export default Layout
