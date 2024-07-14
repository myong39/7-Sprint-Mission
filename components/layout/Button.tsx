import { ReactNode } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <Link href="">
      <button className={styles.button}>{children}</button>
    </Link>
  );
}
