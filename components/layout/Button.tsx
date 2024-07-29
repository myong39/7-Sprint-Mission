import styles from "./Button.module.scss";
import Link from "next/link";
import { ButtonProps } from "@/types/CommonTypes";

export default function Button({
  href = "",
  children,
  disabled = false,
  className = "",
}: ButtonProps) {
  if (!href) {
    return (
      <button className={`${styles.button} ${className}`} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href}>
      <button className={styles.button} disabled={disabled}>
        {children}
      </button>
    </Link>
  );
}
