import { defaultOrderType, ORDER_TYPE_ENUM } from "@/constants/orderConstants";
import { ArticleApiData, ArticleCommentApiData } from "@/types/ArticleTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
});

export const getArticle = async ({
  articleId = "",
  page = 1,
  pageSize = 10,
  orderBy = defaultOrderType,
  keyword = "",
  detail = false,
}: ArticleApiData = {}) => {
  try {
    const params = detail ? undefined : { page, pageSize, orderBy, keyword };

    const response = await instance.get(`/articles/${articleId}`, {
      params,
    });

    if (response.status !== 200) {
      throw new Error("데이터를 불러오는데 실패했습니다");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(`API Error: ${error.message}`);
  }
};

export const getArticleComment = async ({
  articleId = "",
  limit = 10,
  cursor = 0,
}: ArticleCommentApiData) => {
  try {
    const response = await instance.get(`/articles/${articleId}/comments`, {
      params: { limit, cursor },
    });
    if (response.status !== 200) {
      throw new Error("데이터를 불러오는데 실패했습니다");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(`API Error: ${error.message}`);
  }
};
