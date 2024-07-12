import styles from "./style.module.scss";
import Image from "next/image";
import profileImg from "@/assets/icons/profileImg.svg";

export default function Profile() {
  return (
    <>
      <Image src={profileImg} alt="프로필이미지" />
    </>
  );
}
