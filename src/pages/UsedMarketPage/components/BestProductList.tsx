import { useEffect, useState } from "react";
import getItems from "@/lib/api";
import BestProductItem from "./BestProductItem";
import useDeviceType from "@/hooks/useDeviceType";
import { Link } from "react-router-dom";
import { Item } from "@/types/ProductTypes";

const ITEM_INIT = 4;
const TABLET_ITEM_NUM = 2;
const MOBILE_ITEM_NUM = 1;

const BestProductList = () => {
  // 아이템 리스트
  const [items, setItems] = useState<Item[]>([]);
  // 반응형 타입
  const { isMobile, isTablet } = useDeviceType();
  // 현재 페이지 아이템 수
  const itemsPerPage = isMobile
    ? MOBILE_ITEM_NUM
    : isTablet
    ? TABLET_ITEM_NUM
    : ITEM_INIT;

  const fetchData = async (itemsPerPage: number) => {
    try {
      const result = await getItems({
        orderBy: "favorite",
        pageSize: itemsPerPage,
      });
      setItems(result.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(itemsPerPage);
  }, [itemsPerPage]);

  return (
    <section className="best-products">
      <h1>베스트 상품</h1>
      <ul className="list-area">
        {items.map((item) => (
          <Link key={item.id} to={`/items/${item.id}`}>
            <BestProductItem item={item} />
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default BestProductList;
