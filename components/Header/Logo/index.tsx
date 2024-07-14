import styles from "./styles.module.scss";
import Image from "next/image";
import logoImg from "@/assets/icons/logo.svg";
import logoImgMobile from "@/assets/icons/logo_mobile.svg";

export default function Logo() {
  return (
    <>
      <Image className={styles["logo"]} src={logoImg} alt="로고이미지" />
      <Image
        className={styles["mobile-logo"]}
        src={logoImgMobile}
        alt="모바일로고이미지"
      />
    </>
  );
}
