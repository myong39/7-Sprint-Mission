interface ICommentWriter extends IWriter {
  image: string | null;
}

interface IComment {
  id: number;
  writer: ICommentWriter;
  content: string;
  updatedAt: string;
  createdAt: string;
}

type TComment = {
  comment: IComment;
};

type TCommentList = {
  commentList: IComment[];
};
