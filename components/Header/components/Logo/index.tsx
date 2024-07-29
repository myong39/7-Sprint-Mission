import styles from "@/components/Header/components/Logo/styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/logo/logo.svg";
import mobileLogo from "@/assets/icons/logo/mobile-logo.svg";

function Logo() {
  return (
    <h1>
      <Link href="/">
        <Image className={styles["logo"]} src={logo} alt="판다마켓" />
      </Link>
      <Link href="/">
        <Image
          className={styles["mobile-logo"]}
          src={mobileLogo}
          alt="판다마켓"
        />
      </Link>
    </h1>
  );
}

export default Logo;
