import { FieldInfo } from "../../../types/registerTypes";

export enum FIELDTYPE {
  TITLE = "*제목",
  CONTENT = "*내용",
  IMAGE = "이미지",
}

export const fields: { [id: string]: FieldInfo } = {
  [FIELDTYPE.TITLE]: {
    id: FIELDTYPE.TITLE,
    name: FIELDTYPE.TITLE,
    type: "input",
    placeholder: "제목을 입력해주세요",
  },
  [FIELDTYPE.CONTENT]: {
    id: FIELDTYPE.CONTENT,
    name: FIELDTYPE.CONTENT,
    type: "textarea",
    placeholder: "내용을 입력해주세요",
  },
  [FIELDTYPE.IMAGE]: {
    id: FIELDTYPE.IMAGE,
    name: FIELDTYPE.IMAGE,
    type: "file",
  },
};

export type FormValues = {
  [key in string]: string | File | null;
};
// key in FIELDTYPE으로 하고 싶었으나 map으로 돌리면 타입 불일치가 생겨서 string으로 함
