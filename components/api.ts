interface QueryParams {
  page: number;
  pageSize: number;
  orderBy: string;
  keyWord?: string;
}

export const getPost = async ({
  page,
  pageSize,
  orderBy,
  keyWord,
}: QueryParams) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
      !keyWord ? "" : `&keyword=${keyWord}`
    }`
  );
  const body = await response.json();
  return body;
};

export const getPostById = async (id: number) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/articles/${id}`
  );
  const body = await response.json();
  return body;
};

export const getPostComment = async (id: number) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/articles/${id}/comments?limit=3`
  );
  const body = await response.json();
  return body;
};
