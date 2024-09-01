import { useConfirm } from "@/components/Layout/ConfirmPopup";
import ProductTags from "./ProductTags";
import favoriteImg from "@/assets/images/icons/ic_heart.svg";
import MenuDropdown from "@/components/Layout/Dropdown/MenuDropdown";
import { ProductDetailType } from "@/types/ProductTypes";
import { MENU_OPTION } from "@/types/UiTypes";
import { useState } from "react";

const ProductInformation = ({
  productDetails: { tags, name, price, description, favoriteCount },
}: {
  productDetails: ProductDetailType;
}) => {
  const productPrice = price.toLocaleString();
  const { confirm, ConfirmPopupComponent } = useConfirm();

  const handleOrderChange = async (option: string) => {
    if (option === MENU_OPTION.EDIT) {
    } else if (option === MENU_OPTION.DELETE) {
      const result = await confirm(
        "정말로 이 항목을 삭제하시겠습니까?",
        "삭제",
        "취소"
      );
      if (result) {
        alert("삭제되었습니다.");
      }
    }
  };

  return (
    <div className="productInfo">
      <div className="detailsWrapper">
        <div className="titleWrapper">
          <h1>{name}</h1>
          <div className="kebabImage">
            <MenuDropdown
              onOrderChange={handleOrderChange}
              items={[MENU_OPTION.EDIT, MENU_OPTION.DELETE]}
            />
          </div>
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
      {ConfirmPopupComponent}
    </div>
  );
};

export default ProductInformation;
