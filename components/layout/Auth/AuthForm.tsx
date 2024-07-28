import React, { useEffect } from "react";
import InputField from "./InputField";
import { AuthFormProps } from "@/types/AuthTypes";
import { getFieldsByMode } from "./AuthConfig";
import { useRouter } from "next/router";
import styles from "./Auth.module.scss";
import Button from "../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { signUp } from "@/lib/authApi";

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
    if (mode === "signup") await signUp(data);

    router.push("/");
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
