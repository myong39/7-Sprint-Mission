import axiosInstance from "./axiosInstance";

interface Writer {
  nickname: string;
  id: number;
}

export interface Comment {
  id: number;
  content: string;
  writer: Writer;
  createdAt: string;
  updatedAt: string;
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

export interface ApiResponse<T> {
  totalCount: number;
  list: T[];
}

export const getArticles = (params: {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}) => {
  return axiosInstance
    .get<ApiResponse<Article>>("/articles", { params })
};

export const getArticleById = (articleId: number) => {
  return axiosInstance
    .get<Article>(`/articles/${articleId}`)
};

export const getArticleComments = (
  articleId: number,
  limit: number = 10
) => {
  return axiosInstance
    .get<ApiResponse<Comment>>(`/articles/${articleId}/comments`, {
      params: { limit },
    })
};
