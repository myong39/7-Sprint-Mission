import styles from "@/pages/login/styles.module.scss";
import logo from "@/assets/icons/logo/logo.svg";
import kakao from "@/assets/icons/social/ic_google.svg";
import google from "@/assets/icons/social/ic_kakao.svg";
import visibleButton from "@/assets/icons/ic_visibility_on.svg";
import noneVisibleButton from "@/assets/icons/ic_visibility_none.svg";
import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <div className={styles["container"]}>
      <Image src={logo} alt="판다마켓" width={396} height={132} />
      <div className={styles["element-wrapper"]}>
        <form className={styles["email"]}>
          <label>이메일</label>
          <input placeholder="이메일을 입력해주세요" />
        </form>
        <form className={styles[""]}>
          <label>비밀번호</label>
          <input placeholder="비밀번호를 입력해주세요" />
          <Image src={noneVisibleButton} alt="비밀번호 숨김" />
          <Image src={visibleButton} alt="비밀번호 보임" />
        </form>
        <button disabled>로그인</button>
        <div>
          <span></span>
          <div>
            <Link href={"https://goggle.com"}>
              <Image src={google} alt="구글" />
            </Link>
            <Link href={"https://kakao.com"}>
              <Image src={kakao} alt="카카오톡" />
            </Link>
          </div>
        </div>
        <p>
          판마다켓이 처음이신가요? <span>회원가입</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
