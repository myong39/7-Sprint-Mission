import { CommentObject } from "@/types/ArticleTypes";
import emptyImg from "@/public/images/icons/Img_reply_empty.svg";
import { FieldInfo } from "@/types/RegisterTypes";

export const commentInfo: CommentObject = {
  comments: [],
  content: "아직 댓글이 없어요,\n지금 댓글을 달아보세요!",
  imgUrl: {
    src: emptyImg,
    alt: "빈 코멘트",
  },
};

export enum FIELDTYPE {
  TITLE = "댓글달기",
}

export const fields: Record<FIELDTYPE, FieldInfo> = {
  [FIELDTYPE.TITLE]: {
    id: FIELDTYPE.TITLE,
    name: FIELDTYPE.TITLE,
    type: "input",
    placeholder: "댓글을 입력해주세요",
  },
};
