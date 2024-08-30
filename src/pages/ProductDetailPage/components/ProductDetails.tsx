import ProductInformation from "./ProductInformation";
import { ProductDetailType } from "@/types/ProductTypes";

const ProductDetails = ({
  productDetails,
}: {
  productDetails: ProductDetailType;
}) => {
  const productMainImage = productDetails.images[0];

  return (
    <div className="productDetailsWrapper">
      <div className="productDetails">
        <img id="productImage" src={productMainImage} alt="상품 이미지" />
        <ProductInformation productDetails={productDetails} />
      </div>
      <div id="centerLine" className="dividerLine"></div>
    </div>
  );
};

export default ProductDetails;
