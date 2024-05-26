import React, { useEffect, useState } from 'react';
import AllProductItem from './AllProductItem';
import Pagination from './Pagination';
import { getProductItem } from './api';
import searchIcon from '../../assets/search_icon.svg';

const AllProductList = () => {
  // api 상태 관리
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [order, setOrder] = useState('recent');
  // orderSelect 상태 관리
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [orderBy, setOrderBy] = useState('최신순');
  // pagination 상태 관리
  const [totalCount, setTotalCount] = useState(0);

  const handleOrderSelectClick = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleDropdownClick = (e) => {
    const orderText = e.target.innerText;

    orderText === '최신순'
      ? setOrder('recent')
      : orderText === '좋아요순'
      ? setOrder('favorite')
      : setOrder('recent');

    setOrderBy(orderText);
    setIsDropdownVisible(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const getAllProduct = async () => {
      const data = await getProductItem(currentPage, pageSize, order);
      setProduct(data.list);
      setTotalCount(data.totalCount);
    };
    getAllProduct();
  }, [order, currentPage]);

  return (
    <section className="all-product">
      <div className="top-container">
        <h2>전체 상품</h2>
        <form>
          <div className="search-wrap">
            <img src={searchIcon} alt="검색아이콘" />
            <input
              className="search-input"
              type="text"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <button className="product-registration-btn" type="button">
            상품 등록하기
          </button>
          <div className="order-wrap">
            <button
              type="button"
              className="order-select"
              onClick={handleOrderSelectClick}
            >
              {orderBy}
            </button>
            {isDropdownVisible && (
              <ul className="order-dropdown">
                <li className="order-option" onClick={handleDropdownClick}>
                  최신순
                </li>
                <li className="order-option" onClick={handleDropdownClick}>
                  좋아요순
                </li>
              </ul>
            )}
          </div>
        </form>
      </div>
      <ul className="item-list">
        {product.map((item) => (
          <li key={item.id}>
            <AllProductItem
              imgUrl={item.images[0]}
              name={item.name}
              price={item.price}
              favoriteCount={item.favoriteCount}
            />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalItems={totalCount}
        itemsPerPage={pageSize}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default AllProductList;
