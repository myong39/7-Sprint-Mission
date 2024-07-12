import Image from 'next/image'
import spinnerImg from '@/public/images/spinner.png'
import styles from './Spiner.module.scss'

export default function Spiner({ className = '' }) {
  return (
    <div className={styles.container}>
      <Image
        className={`${styles.spinner} ${className}`}
        src={spinnerImg}
        width={45}
        height={45}
        alt="로딩 중.."
      />
    </div>
  )
}
