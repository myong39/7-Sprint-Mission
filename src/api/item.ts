export const BASE_URL = "/api";

export async function getItems({
  page = 1,
  pageSize = 4,
  orderBy,
}: {
  page?: number;
  pageSize?: number;
  orderBy: string;
}) {
  const query = `products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  try {
    const response = await fetch(`${BASE_URL}/${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching items", error);
    return [];
  }
}

export async function getItemDetail(productId: string) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching items", error);
    return {};
  }
}

export async function getComments(productId: string, limit = 10) {
  try {
    const response = await fetch(
      `${BASE_URL}/products/${productId}/comments?limit=${limit}`,
    );
    const data = await response.json();
    return data.list || [];
  } catch (error) {
    console.error("Error fetching items", error);
    return [];
  }
}
