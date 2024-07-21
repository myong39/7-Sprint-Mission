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

interface ApiResponse<T> {
  totalCount: number;
  list: T[];
}

export const getArticles = (params: {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}): Promise<ApiResponse<Article>> => {
  return axiosInstance
    .get("/articles", { params })
    .then((response) => response.data);
};

export const getArticleById = (articleId: number): Promise<Article> => {
  return axiosInstance
    .get(`/articles/${articleId}`)
    .then((response) => response.data);
};

export const getArticleComments = (
  articleId: number,
  limit: number = 10
): Promise<ApiResponse<Comment>> => {
  return axiosInstance
    .get(`/articles/${articleId}/comments`, {
      params: { limit },
    })
    .then((response) => response.data);
};
