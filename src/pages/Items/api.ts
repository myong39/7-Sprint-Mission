import { postProduct } from "../../types/product";

export const getProductItem = async (
  currentPage: number = 1,
  pageSize: number,
  order: string
): Promise<any> => {
  try {
    const encodedPage = encodeURIComponent(currentPage);
    const encodedPageSize = encodeURIComponent(pageSize);
    const encodedOrder = encodeURIComponent(order);

    const response = await fetch(
      `https://panda-market-api.vercel.app/products?page=${encodedPage}&pageSize=${encodedPageSize}&orderBy=${encodedOrder}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching product items:", error);
  }
};

export const getProductDetailItem = async (
  id: string | undefined
): Promise<any> => {
  if (id === undefined) {
    console.log("Error: Product ID is undefined");
    return;
  }

  try {
    const encodedId = encodeURIComponent(id);

    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${encodedId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching product detail item:", error);
  }
};

export const getProductDetailComments = async (
  id: string | undefined
): Promise<any> => {
  if (id === undefined) {
    console.log("Error: Product ID is undefined");
    return;
  }

  try {
    const encodedId = encodeURIComponent(id);

    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${encodedId}/comments?limit=3`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching product detail comments:", error);
  }
};

export const postAddItem = async (data: postProduct) => {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Product POST 요청에 실패했습니다", error);
  }
};

export const postUploadImage = async (imgFile: FormData) => {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/images/upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: imgFile,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Image POST 요청에 실패했습니다", error);
  }
};
