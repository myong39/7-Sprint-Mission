import { useParams } from "react-router-dom";
import { getProductDetails } from "@/lib/api";
import { useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import CommentsSection from "./components/CommentsSection";
import GoBackToListButton from "@/components/Layout/Comment/GoBackToListButton";
import "./ProductDetailPage.scss";
import { CommentType, ProductDetailType } from "@/types/ProductTypes";

const ProductDetailPage = () => {
  // 해당 페이지의 productId를 받아옴
  const { productId } = useParams();

  // 상품 상세 내용을 서버에서 받아올 객체
  const [productDetail, setProductDetail] = useState<ProductDetailType>({
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

  // 코멘트 리스트를 서버에서 받아올 배열
  const [productComments, setProductComments] = useState<CommentType[]>([]);

  const fetchData = async () => {
    try {
      const productDetailResult = await getProductDetails({
        productId: Number(productId),
      });

      const productCommentResult = await getProductDetails({
        productId: Number(productId),
        comments: true,
      });

      setProductDetail(productDetailResult);
      setProductComments(productCommentResult.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  return (
    <section className="productDetailsMain">
      <ProductDetails productDetails={productDetail} />
      <CommentsSection productComments={productComments} />
      <GoBackToListButton href="/items" />
    </section>
  );
};

export default ProductDetailPage;
