import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import { getProductDetailItem, getProductDetailComments } from "../api";
import backIcon from "../../../assets/ic_back.svg";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailInquiry from "./ProductDetailInquiry";
import ProductDetailComments from "./ProductDetailComments";

export interface DetailItem {
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

export interface Comment {
  content: string;
  createdAt: string;
  id: number;
  updatedAt: string;
  writer: {
    id: number;
    image: string;
    nickname: string;
  };
}

interface Comments {
  list: Comment[];
  nextCursor: string | null;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [detailItem, setDetailItem] = useState<DetailItem>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    tags: [],
    images: [],
    ownerId: 0,
    favoriteCount: 0,
    createdAt: "",
    updatedAt: "",
    isFavorite: false,
  });
  const [comments, setComments] = useState<Comments>({
    list: [],
    nextCursor: null,
  });

  useEffect(() => {
    const getProductDetail = async () => {
      const item = await getProductDetailItem(id);
      const comment = await getProductDetailComments(id);
      setDetailItem(item);
      setComments(comment);
    };

    getProductDetail();
  }, [id]);

  return (
    <div className="product-container">
      <ProductDetailInfo detailItem={detailItem} />
      <ProductDetailInquiry />
      <ProductDetailComments comments={comments.list} />
      <Link
        to="/items"
        className={`product-back-link ${
          comments.list.length ? "" : "margin-top"
        }`}
      >
        <button type="button" className="product-back-btn">
          <span>목록으로 돌아가기</span>
          <img src={backIcon} alt="뒤로가기아이콘" />
        </button>
      </Link>
    </div>
  );
};

export default ProductDetail;
