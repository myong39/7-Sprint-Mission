import axios from "axios";

interface GetPostsParams {
  page: number;
  pageSize: number;
  orderBy: string;
  search?: string;
  image?: string;
}

export default async function getPosts({
  page = 1,
  pageSize = 3,
  orderBy = "like",
  search = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const url = `https://panda-market-api.vercel.app/articles?${query}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
