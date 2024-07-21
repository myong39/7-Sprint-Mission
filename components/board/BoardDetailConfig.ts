import { CommentObject } from "@/types/articleTypes";
import emptyImg from "@/public/images/icons/Img_reply_empty.svg";

export const commentInfo: CommentObject = {
  comments: [],
  content: "아직 댓글이 없어요,\n지금 댓글을 달아보세요!",
  imgUrl: {
    src: emptyImg.src,
    alt: "빈 코멘트",
  },
};
