import moreIcon from "../../../assets/ic_kebab.svg";
import heartIcon from "../../../assets/ic_heart_detail.svg";
import { DetailItem } from "./ProductDetail";

interface Props {
  detailItem: DetailItem;
}

const ProductDetailInfo = ({ detailItem }: Props) => {
  return (
    <section className="product-info-section">
      <img
        src={detailItem.images[0]}
        alt="상품이미지"
        className="product-img"
      />
      <div className="product-info-wrap">
        <div className="product-name-wrap">
          <h2 className="product-name">{detailItem.name}</h2>
          <button type="button" className="product-more-btn">
            <img src={moreIcon} alt="더보기버튼" />
          </button>
        </div>
        <div className="product-price">{detailItem.price.toLocaleString()}</div>
        <h3 className="product-description-title">상품 소개</h3>
        <p className="product-description">{detailItem.description}</p>
        <h3 className="product-tag-title">상품 태그</h3>
        <div className="product-tag-wrap">
          {detailItem.tags.map((item, index) => (
            <div key={index} className="product-tag">{`#${item}`}</div>
          ))}
        </div>
        <button className="product-favorite">
          <img src={heartIcon} alt="좋아요아이콘" />
          <span>{detailItem.favoriteCount}</span>
        </button>
      </div>
    </section>
  );
};

export default ProductDetailInfo;
