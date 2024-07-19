interface IWriter {
  id: number;
  nickname: string;
}

interface IPost {
  id: number;
  title: string;
  content: string;
  image: string | null;
  writer: IWriter;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}

type TArticle = {
  article: IPost;
};

type TArticleList = {
  articles: IPost[];
};

type TOrder = 'recent' | 'like';

interface PostArticleType {
  title: string;
  content: string;
  image?: string;
}
