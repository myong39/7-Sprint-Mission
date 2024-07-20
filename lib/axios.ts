import axios from 'axios';
import { Article, Comment } from '@/types/Article';

const instance = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
});

export interface ArticleResponse {
  list: Article[];
  totalCount: number;
}

export async function getBestArticle(pageSize: number): Promise<Article[]> {
  const res = await instance.get<ArticleResponse>('/articles', {
    params: {
      page: 1,
      pageSize: pageSize,
      orderBy: 'like',
    },
  });
  const { list } = res.data;
  return list;
}

export async function getArticle(
  page: number,
  pageSize: number,
  orderBy: string,
  keyword: string | null
): Promise<Article[]> {
  const res = await instance.get<ArticleResponse>('/articles', {
    params: {
      page: page,
      pageSize: pageSize,
      orderBy: orderBy,
      keyword: keyword,
    },
  });
  const { list } = res.data;
  return list;
}

export async function getArticleId(id: number): Promise<Article> {
  const res = await instance.get<Article>(`/articles/${id}`);
  return res.data;
}

export interface CommentResponse {
  list: Comment[];
  nextCursor: string | null;
}

export async function getArticleComment(
  id: number,
  limit: number
): Promise<Comment[]> {
  const res = await instance.get<CommentResponse>(
    `/articles/${id}/comments?limit=${limit}`
  );
  const { list } = res.data;
  return list;
}
