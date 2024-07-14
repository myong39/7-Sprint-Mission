import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
});

export interface BestArticleResponse {
  list: {
    id: number;
    title: string;
    writer: {
      id: number;
      nickname: string;
    };
    likeCount: number;
    image: string | null;
    createdAt: string;
  }[];
}

export async function getBestArticle(
  pageSize: number
): Promise<BestArticleResponse['list']> {
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
