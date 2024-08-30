export interface Item {
  id: number;
  price: number;
  images: string;
  name: string;
  favoriteCount: number;
}

export interface FetchDataType {
  orderBy?: string;
  itemsPerPage?: number;
  currentPage: number;
}

export interface PaginationType extends FetchDataType {
  onPageChange: (option: number) => void;
  pageNumber: number;
}

export interface ProductSearchType {
  onOptionChange: (option: string) => void;
}

export interface ItemTagType {
  value: string;
  onCancel: (tagValue: string) => void;
}

export interface FileInputType {
  name: string;
  value: File | null;
  onChange: (file: File | null) => void;
}

export interface ProductDetailType {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
  isFavorite: boolean;
}

export type CommentType = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    image: string;
    nickname: string;
  };
};
