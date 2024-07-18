import styles from './Layout.module.scss'

export default function Layout({ className = '', page = true, ...props }) {
  const classNames = `${styles.container} ${
    page ? styles.page : ''
  } ${className}`
  return <div className={classNames} {...props} />
}
