import { ORDER_TYPE_ENUM } from "@/constants/orderConstants";
import { ArticleApiData } from "@/types/articleTypes";
import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
});

export const getArticle = async ({
  page = 1,
  pageSize = 10,
  orderBy = ORDER_TYPE_ENUM.RECENT,
  keyword = "",
}: ArticleApiData = {}) => {
  try {
    const response = await instance.get(`/articles`, {
      params: { page, pageSize, orderBy, keyword },
    });

    if (response.status !== 200) {
      throw new Error("데이터를 불러오는데 실패했습니다");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(`API Error: ${error.message}`);
  }
};
