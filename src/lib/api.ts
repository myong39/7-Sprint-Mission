export async function getItems({
  orderBy = "favorite",
  pageSize = 4,
  page = 1,
}) {
  const query = `orderBy=${orderBy}&pageSize=${pageSize}&page=${page}`;

  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();

  return body;
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

  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${query}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();

  return body;
}

export default getItems;
