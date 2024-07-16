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
  orderBy?: "recent" | "like";
  keyword?: string | string[] | undefined;
}

export interface ArticleProps {
  initialArticles: Article[];
}

export interface ArticleProp {
  article: Article;
}

export enum DeviceTypePageSize {
  MOBILE_PAGE_SIZE = 1,
  TABLET_PAGE_SIZE = 2,
  DESKTOP_PAGE_SIZE = 3,
}
