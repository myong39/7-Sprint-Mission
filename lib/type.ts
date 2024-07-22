export interface Articles {
  content: string;
  createdAt: string;
  id: number;
  image: string;
  likeCount: number;
  title: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export interface PostProps {
  article: Articles;
  [key: string]: any;
}

export interface Comments {
  nextCursor: number;
  list: [
    {
      writer: {
        image: string;
        nickname: string;
        id: number;
      };
      updatedAt: string;
      createdAt: string;
      content: string;
      id: number;
    }
  ];
}
