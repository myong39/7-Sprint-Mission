import { useState } from "react";
import "./ProductPage.css";
import favoriteImg from "../assets/images/icons/ic_heart.svg";
import { getCommasToNumber } from "../utils/productUtils";

function BestProductItem({ items }) {
  return (
    <>
      {items.map((item) => {
        const bestPrice = getCommasToNumber(item.price);

        return (
          <li className="list" key={item.id}>
            <img className="item-image" src={item.images} alt={item.name} />
            <div className="item-content">
              <span id="item-name">{item.name}</span>
              <span id="item-price">{bestPrice}원</span>
              <div className="favorite-area">
                <img
                  id="favorite-image"
                  src={favoriteImg}
                  alt="좋아요 이미지"
                />
                <div id="item-favorite"> {item.favoriteCount}</div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default BestProductItem;
