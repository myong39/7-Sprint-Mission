import styles from '@/components/Container.module.css';

export default function Container({ className = '', children }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
