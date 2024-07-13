import styles from '@/src/styles/Button.module.css'

function Button({ className = 'small', children = '' }) {
  const classNames = `${styles.Button} ${styles[className]}`
  return <button className={classNames}>{children}</button>
}

export default Button
