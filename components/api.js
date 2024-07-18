export const getPost = async ({ page, pageSize, orderBy, keyWord }) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
      !keyWord ? "" : `&keyword=${keyWord}`
    }`
  );
  const body = await response.json();
  return body;
};
