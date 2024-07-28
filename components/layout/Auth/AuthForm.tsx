import React, { useEffect } from "react";
import InputField from "./InputField";
import { AuthFormProps } from "@/types/AuthTypes";
import { getFieldsByMode } from "./AuthConfig";
import { useRouter } from "next/router";
import styles from "./Auth.module.scss";
import Button from "../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn, signUp } from "@/lib/authApi";

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: getFieldsByMode(mode).reduce(
      (acc, field) => ({ ...acc, [field.id]: "" }),
      {}
    ),
    criteriaMode: "all",
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<any> = async (data) => {
    if (mode === "signup") {
      try {
        await signUp(data);
        alert(
          "회원가입이 성공적으로 완료되었습니다. 로그인 페이지로 이동합니다."
        );
        router.push("/auth/login");
      } catch (error) {
        console.error("회원가입 오류:", error);
      }
    } else if (mode === "login") {
      try {
        const result = await signIn(data);

        if (result.accessToken && result.refreshToken) {
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("refreshToken", result.refreshToken);
        }

        router.push("/");
      } catch (error) {
        alert(
          "로그인에 실패했습니다. 정확한 아이디와 비밀번호를 입력해주세요."
        );
        console.error("로그인 오류:", error);
      }
    }
  };

  useEffect(() => {
    reset();
  }, [mode, reset]);

  return (
    <form
      method="post"
      id={mode}
      className={styles["form"]}
      onSubmit={handleSubmit(onSubmit)}
    >
      {getFieldsByMode(mode).map((field) => (
        <InputField
          key={field.id}
          field={field}
          control={control}
          error={(errors as Record<string, any>)[field.id]?.message}
        />
      ))}
      <Button className={styles["acc-button"]} disabled={!isValid}>
        {mode === "login" ? "로그인" : "회원가입"}
      </Button>
    </form>
  );
};

export default AuthForm;
