export enum ORDER_TYPE_ENUM {
  recent = "recent",
  like = "like",
}

export const orderTypeKR = {
  [ORDER_TYPE_ENUM.recent]: "최신순",
  [ORDER_TYPE_ENUM.like]: "추천순",
} as const;

export const orderTypeUS = {
  [orderTypeKR[ORDER_TYPE_ENUM.recent]]: ORDER_TYPE_ENUM.recent,
  [orderTypeKR[ORDER_TYPE_ENUM.like]]: ORDER_TYPE_ENUM.like,
} as const;

export const orderTypeKeys = Object.values(ORDER_TYPE_ENUM);
export const orderTypeKeysKR = Object.values(orderTypeKR);
export const defaultOrderType = ORDER_TYPE_ENUM.recent;

export type OrderTypeKR = (typeof orderTypeKR)[keyof typeof orderTypeKR];
