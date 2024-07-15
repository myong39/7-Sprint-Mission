import axios from 'axios';
import { Article } from '@/types/Article';

const instance = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
});

export interface ArticleResponse {
  list: Article[];
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
  keyword: string
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
