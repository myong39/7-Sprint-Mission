export interface Product {
  createdAt: string;
  description: string;
  favoriteCount: number;
  id: number;
  images: string[];
  name: string;
  ownerId: number;
  price: number;
  tags: string[];
  updatedAt: string;
}

export interface postProduct {
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
}
