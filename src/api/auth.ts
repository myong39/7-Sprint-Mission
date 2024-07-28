import axios from "axios";

const API_URL = "https://panda-market-api.vercel.app/";

const signup = (
  email: string,
  nickname: string,
  password: string,
  passwordConfirmation: string,
) => {
  return axios.post(API_URL + "auth/signUp", {
    email,
    nickname,
    password,
    passwordConfirmation,
  });
};

const login = (email: string, password: string) => {
  return axios.post(API_URL + "auth/signIn", {
    email,
    password,
  });
};

const isLoggedIn = () => {
  return localStorage.getItem("accessToken") !== null;
};

export default {
  signup,
  login,
  isLoggedIn,
};
