import { ORDER_TYPE_ENUM } from "@/constants/orderConstants";

export interface Article {
  content: string;
  createdAt: string;
  id: number;
  image: string | null;
  likeCount: number;
  title: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export interface ArticleApiData {
  page?: number;
  pageSize?: number;
  orderBy?: ORDER_TYPE_ENUM.RECENT | ORDER_TYPE_ENUM.LIKE;
  keyword?: string | string[] | undefined;
}

export interface ArticleProps {
  initialArticles: Article[];
}

export interface ArticleProp {
  article: Article;
}
