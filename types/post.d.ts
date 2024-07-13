interface IWriter {
  id: number;
  nickname: string;
}

interface IPost {
  id: number;
  title: string;
  content: string;
  image: string;
  writer: IWriter;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}
