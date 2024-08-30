import ProductTags from "./ProductTags";
import favoriteImg from "@/assets/images/icons/ic_heart.svg";
import kebabImg from "@/assets/images/icons/ic_kebab.svg";
import { ProductDetailType } from "@/types/ProductTypes";

const ProductInformation = ({
  productDetails: { tags, name, price, description, favoriteCount },
}: {
  productDetails: ProductDetailType;
}) => {
  const productPrice = price.toLocaleString();

  return (
    <div className="productInfo">
      <div className="detailsWrapper">
        <div className="titleWrapper">
          <h1>{name}</h1>
          <img className="kebabImage" src={kebabImg} alt="더보기" />
        </div>
        <h2>{productPrice}원</h2>
        <div className="dividerLine"></div>
        <h3>상품 소개</h3>
        <p>{description}</p>
        <h3>상품 태그</h3>
        <div className="productTagsWrapper">
          {tags.map((tag, index) => (
            <ProductTags key={index} tag={tag} />
          ))}
        </div>
      </div>
      <button className="favoriteButton">
        <img src={favoriteImg} alt="좋아요 수" />
        <h3>{favoriteCount}</h3>
      </button>
    </div>
  );
};

export default ProductInformation;
