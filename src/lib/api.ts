import axios from "axios";

export const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
});

export const getTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem("accessToken");
};

export const setAuthHeader = (token: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export async function getItems({
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

export const uploadImage = async (file: File) => {
  try {
    const token = getTokenFromLocalStorage();

    if (token) {
      setAuthHeader(token);
    } else {
      console.warn("유효한 로그인이 아닙니다.");
    }

    const formData = new FormData();
    formData.append("image", file);

    const response = await instance.post("/images/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.url;
  } catch (error) {
    console.error("이미지를 업로드하는데 실패했습니다:", error);
    throw error;
  }
};

export default getItems;
