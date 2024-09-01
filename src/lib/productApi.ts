import { ProductData } from "@/types/ArticleTypes";
import { getTokenFromLocalStorage, instance, setAuthHeader } from "./api";

export const createProduct = async (pruductData: ProductData) => {
  try {
    const token = getTokenFromLocalStorage();

    if (token) {
      setAuthHeader(token);
    } else {
      console.warn("유효한 로그인이 아닙니다.");
    }

    const response = await instance.post<ProductData>("/products", pruductData);
    return response.data;
  } catch (error) {
    console.error("게시글을 생성하는데 실패했습니다:", error);
    throw error;
  }
};
