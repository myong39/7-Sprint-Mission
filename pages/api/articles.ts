import axiosInstance from "./axiosInstance";

interface Writer {
  nickname: string;
  id: number;
}
export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  writer: Writer;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}
interface ApiResponse {
  totalCount: number;
  list: Article[];
}

export async function getArticles({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}): Promise<ApiResponse> {
  const query = `page=${encodeURIComponent(page)}&pageSize=${encodeURIComponent(
    pageSize
  )}&orderBy=${encodeURIComponent(orderBy)}&keyword=${encodeURIComponent(
    keyword || ""
  )}`;
  const response = await axiosInstance.get(`/articles?${query}`);
  return response.data as ApiResponse;
}

export async function getArticleId({
  articleId,
}: {
  articleId: number;
}): Promise<Article> {
  const response = await axiosInstance.get(`/articles/${articleId}`);
  return response.data as Article;
}

export async function getArticleComments({
  articleId,
}: {
  articleId: number;
}): Promise<ApiResponse> {
  const query = `articleId=${encodeURIComponent(articleId)}/comments`;
  const response = await axiosInstance.get(`/articles?${query}`);
  return response.data as ApiResponse;
}
