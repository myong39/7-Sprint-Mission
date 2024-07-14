import axios from 'axios';
import { Article } from '@/types/Article';

const instance = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
});

export interface BestArticleResponse {
  list: Article[];
}

export async function getBestArticle(pageSize: number): Promise<Article[]> {
  const res = await instance.get<BestArticleResponse>('/articles', {
    params: {
      page: 1,
      pageSize: pageSize,
      orderBy: 'like',
    },
  });
  const { list } = res.data;
  return list;
}
