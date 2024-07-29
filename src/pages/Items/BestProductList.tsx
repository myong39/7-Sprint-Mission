import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BestProductItem from "./BestProductItem";
import { getProductItem } from "./api";
import { Product } from "../../types/product";

interface Props {
  pageSize: number;
}

const BestProductList = ({ pageSize }: Props) => {
  const [product, setProduct] = useState<Product[]>([
    {
      createdAt: "",
      description: "",
      favoriteCount: 0,
      id: 0,
      images: [],
      name: "",
      ownerId: 0,
      price: 0,
      tags: [],
      updatedAt: "",
    },
  ]);

  useEffect(() => {
    const getBestProduct = async () => {
      const { list } = await getProductItem(1, pageSize, "favorite");
      setProduct(list);
    };

    getBestProduct();
  }, [pageSize]);

  return (
    <section className="best-product">
      <h2>베스트 상품</h2>
      <ul className="item-list">
        {product.map(({ id, images, name, price, favoriteCount }) => (
          <li key={id}>
            <Link to={`./${id}`} className="item-link">
              <BestProductItem
                imgUrl={images[0]}
                name={name}
                price={price}
                favoriteCount={favoriteCount}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BestProductList;
