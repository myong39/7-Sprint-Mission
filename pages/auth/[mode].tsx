import { pageConfig } from "@/components/layout/Auth/AuthConfig";
import AuthForm from "@/components/layout/Auth/AuthForm";
import EasyLogin from "@/components/layout/Auth/EasyLogin";
import GoHomeLogo from "@/components/layout/Auth/GoHomeLogo";
import { AuthFormProps } from "@/types/AuthTypes";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/components/layout/Auth/Auth.module.scss";
import { useEffect } from "react";

export default function AuthPage() {
  const router = useRouter();
  const queryMode = router.query.mode;

  const mode: AuthFormProps["mode"] =
    queryMode === "login" || queryMode === "signup" ? queryMode : "login";

  const { buttonText, infoMessage, goToPage } = pageConfig[mode];

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className={styles["signup-and-login-page-main"]}>
      <GoHomeLogo />
      <section className={styles["input"]}>
        <AuthForm mode={mode} />
      </section>
      <EasyLogin />
      <section className={styles["goto-page"]}>
        {infoMessage}
        <Link href={goToPage}>{buttonText}</Link>
      </section>
    </div>
  );
}
