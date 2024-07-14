export interface Article {
  id: number;
  title: string;
  writer: {
    id: number;
    nickname: string;
  };
  likeCount: number;
  image: string | null;
  createdAt: string;
}
