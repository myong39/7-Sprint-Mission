import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import CommentsSection from "@/components/Layout/Comment/CommentsSection";
import GoBackToListButton from "@/components/Layout/Comment/GoBackToListButton";
import "./ProductDetailPage.scss";
import { ProductDetailType } from "@/types/ProductTypes";
import { CommentObject } from "@/types/ArticleTypes";
import { commentInfo, fields } from "./components/ProductDetailConfig";
import RegisterForm from "@/components/Layout/RegisterForm/RegisterForm";
import { getProductDetails } from "@/lib/productApi";

const ProductDetailPage = () => {
  // 해당 페이지의 productId를 받아옴
  const { productId } = useParams();
  const formFields = fields;
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
  const [productComments, setProductComments] =
    useState<CommentObject>(commentInfo);

  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      setProductComments({
        ...productComments,
        comments: productCommentResult.list,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  return (
    <section className="productDetailsMain">
      <ProductDetails productDetails={productDetail} />
      <RegisterForm fields={formFields} bottomButton={true} />
      <CommentsSection comments={productComments} isLoading={isLoading} />
      <GoBackToListButton href="/items" />
    </section>
  );
};

export default ProductDetailPage;
