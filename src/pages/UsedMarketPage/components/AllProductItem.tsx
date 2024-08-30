import favoriteImg from "@/assets/images/icons/ic_heart.svg";
import { Item } from "@/types/ProductTypes";

interface AllProductItemProps {
  item: Item;
}
const AllProductItem: React.FC<AllProductItemProps> = ({ item }) => {
  const bestPrice = item.price.toLocaleString();

  return (
    <li className="list all-list" key={item.id}>
      <img className="item-image all-item" src={item.images} alt={item.name} />
      <div className="item-content">
        <span id="item-name">{item.name}</span>
        <span id="item-price">{bestPrice}원</span>
        <div className="favorite-area">
          <img id="favorite-image" src={favoriteImg} alt="좋아요 이미지" />
          <div id="item-favorite">{item.favoriteCount}</div>
        </div>
      </div>
    </li>
  );
};

export default AllProductItem;
