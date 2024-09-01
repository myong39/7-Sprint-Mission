import { ProductData } from "@/types/ArticleTypes";
import { getTokenFromLocalStorage, instance, setAuthHeader } from "./api";

export async function getProducts({
  orderBy = "favorite",
  pageSize = 4,
  page = 1,
}) {
  const query = `orderBy=${orderBy}&pageSize=${pageSize}&page=${page}`;

  try {
    const response = await instance.get(`/products?${query}`);
    return response.data;
  } catch (error) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
}

export async function getProductDetails({
  productId = 0,
  comments = false,
  limit = 3,
  cursor = 0,
}) {
  const query = !comments
    ? `${productId}`
    : `${productId}/comments?limit=${limit}&cursor=${cursor}`;

  try {
    const response = await instance.get(`/products/${query}`);
    return response.data;
  } catch (error) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
}

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

export const updateProduct = async (
  productId: string,
  productData: ProductData
) => {
  try {
    const token = getTokenFromLocalStorage();

    if (token) {
      setAuthHeader(token);
    } else {
      console.warn("유효한 로그인이 아닙니다.");
    }

    const response = await instance.patch<ProductData>(
      `/products/${productId}`,
      productData
    );
    return response.data;
  } catch (error) {
    console.error("게시글을 업데이트하는데 실패했습니다:", error);
    throw error;
  }
};
