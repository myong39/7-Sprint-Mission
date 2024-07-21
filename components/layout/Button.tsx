import styles from "./Button.module.scss";
import Link from "next/link";
import { ButtonProps } from "@/types/commonTypes";

export default function Button({
  href = "",
  children,
  disabled = false,
}: ButtonProps) {
  return (
    <Link href={href}>
      <button className={styles.button} disabled={disabled}>
        {children}
      </button>
    </Link>
  );
}
