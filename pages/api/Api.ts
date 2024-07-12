import axios from "axios";

interface GetPostsParams {
  page: number;
  pageSize: number;
  orderBy: string;
  search?: string;
}

export default async function getPosts({
  page = 1,
  pageSize = "",
  orderBy = "",
  search = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const url = `https://panda-market-api.vercel.app/articles?${query}`;

  try {
    const response = await axios.get(url);
    return response.data; // 데이터를 반환합니다.
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; // 오류를 다시 던져 호출하는 쪽에서 처리할 수 있도록 합니다.
  }
}
