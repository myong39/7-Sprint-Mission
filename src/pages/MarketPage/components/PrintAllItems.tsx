import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getItems } from "../../../api/item";
import ItemBox, { Item } from "./ItemBox";
import { Button } from "../../../components/Button/Button";
import Pagination from "react-js-pagination";
import OrderSelect from "./OrderSelect";
import "../MarketPage.css";

const PrintAllItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

  const loadItems = async (orderBy: string) => {
    const items = await getItems({ pageSize: 100, orderBy });
    setItems(items.list);
  };

  useEffect(() => {
    loadItems(orderBy);
  }, [orderBy]);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(4);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(10);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleButtonClick = (url: string) => () => {
    navigate(url);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleOrderByChange = (value: string) => {
    setOrderBy(value);
    loadItems(value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='container-items-all'>
      <header>
        <span>전체 상품</span>
        <input
          className='search-input'
          type='text'
          placeholder='검색할 상품을 입력해주세요'
          value={search}
          onChange={handleSearchChange}
        />
        <Button
          text='상품 등록하기'
          size='small'
          width=''
          onClick={handleButtonClick("/addItem")}
        />
        <OrderSelect value={orderBy} onChange={handleOrderByChange} />
      </header>
      <div className='wrapper-items'>
        <div className='all-items'>
          <ItemBox items={currentItems} type='all' />
        </div>
      </div>

      <Pagination
        activePage={currentPage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={filteredItems.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass='page-item'
        linkClass='page-link'
      />
    </div>
  );
};

export default PrintAllItems;
