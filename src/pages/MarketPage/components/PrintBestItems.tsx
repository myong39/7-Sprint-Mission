import React, { useEffect, useState } from "react";
import ItemBox, { Item } from "./ItemBox";
import { getItems } from "../../../api/item";
import "../MarketPage.css";

const PrintBestItems: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const loadItems = async () => {
    const items = await getItems({ orderBy: "favorite" });
    setItems(items.list);
  };

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return (
    <div className='container-items'>
      <span>베스트 상품</span>
      <div className='best-items'>
        <ItemBox items={items.slice(0, itemsPerPage)} type='best' />
      </div>
    </div>
  );
};

export default PrintBestItems;
