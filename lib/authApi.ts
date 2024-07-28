import { SignUpData } from "@/types/AuthTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
});

export const signUp = async (data: SignUpData) => {
  try {
    const response = await instance.post("/auth/signUp", data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "가입 중 오류 발생:",
        error.response ? error.response.data : error.message
      );
    } else {
      console.error("가입 중 알 수 없는 오류 발생:", error);
    }
    throw error;
  }
};

export const signIn = async ({ email, password }: SignUpData) => {
  try {
    const response = await instance.post("/auth/signIn", {
      email,
      password,
    });

    const { user, accessToken, refreshToken } = response.data;

    // console.log("사용자:", user);
    // console.log("액세스 토큰:", accessToken);
    // console.log("리프레시 토큰:", refreshToken);

    return { user, accessToken, refreshToken };
  } catch (error) {
    console.error("로그인 오류:", error);
    throw error;
  }
};
