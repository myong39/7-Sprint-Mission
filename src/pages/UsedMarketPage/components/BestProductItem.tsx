import favoriteImg from "@/assets/images/icons/ic_heart.svg";
import { Item } from "@/types/ProductTypes";

interface BestProductItemProps {
  item: Item;
}

const BestProductItem: React.FC<BestProductItemProps> = ({ item }) => {
  const bestPrice = item.price.toLocaleString();

  return (
    <li className="list" key={item.id}>
      <img className="item-image" src={item.images} alt={item.name} />
      <div className="item-content">
        <span id="item-name">{item.name}</span>
        <span id="item-price">{bestPrice}원</span>
        <div className="favorite-area">
          <img id="favorite-image" src={favoriteImg} alt="즐겨찾기 하트" />
          <div id="item-favorite"> {item.favoriteCount}</div>
        </div>
      </div>
    </li>
  );
};

export default BestProductItem;
