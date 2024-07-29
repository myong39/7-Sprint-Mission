import heartIcon from "../../assets/ic_heart_items.svg";

interface Props {
  imgUrl: string;
  name: string;
  price: number;
  favoriteCount: number;
}

const AllProductItem = ({
  imgUrl,
  name,
  price,
  favoriteCount,
}: Props) => {
  return (
    <>
      <img src={imgUrl} alt="아이템이미지" className="item-img" />
      <h3 className="item-name">{name}</h3>
      <div className="item-price">{price.toLocaleString()}</div>
      <div className="item-favorite">
        <img src={heartIcon} alt="좋아요아이콘" />
        <span>{favoriteCount}</span>
      </div>
    </>
  );
};

export default AllProductItem;
