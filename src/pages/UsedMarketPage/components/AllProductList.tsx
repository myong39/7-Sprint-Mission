import { useState, useEffect } from "react";
import AllProductItem from "./AllProductItem";
import ProductSearch from "./ProductSearch";
import Pagination from "./Pagination";
import { getCustomRound } from "@/utils/Utils";
import useDeviceType from "@/hooks/useDeviceType";
import { Link } from "react-router-dom";
import { Item, FetchDataType } from "@/types/ProductTypes";
import { getProducts } from "@/lib/productApi";

const PAGE_INIT = 1;
const ITEM_INIT = 10;
const TABLET_ITEM_NUM = 6;
const MOBILE_ITEM_NUM = 4;

const AllProductList = () => {
  // 아이템 리스트
  const [items, setItems] = useState<Item[]>([]);
  // 전체 아이템의 수
  const [totalCount, setTotalCount] = useState(0);
  // 페이지 정렬
  const [orderBy, setOrderBy] = useState("recent");
  // 현재 몇 번째 페이지인지
  const [currentPage, setCurrentPage] = useState(PAGE_INIT);
  // 반응형 타입
  const { isMobile, isTablet } = useDeviceType();
  // 현재 페이지 아이템 수
  const itemsPerPage = isMobile
    ? MOBILE_ITEM_NUM
    : isTablet
    ? TABLET_ITEM_NUM
    : ITEM_INIT;

  // 전체 페이지 수 계산
  const pageNumber = getCustomRound(totalCount / itemsPerPage);

  const fetchData = async ({
    orderBy,
    currentPage,
    itemsPerPage,
  }: FetchDataType) => {
    try {
      const result = await getProducts({
        orderBy,
        pageSize: itemsPerPage,
        page: currentPage,
      });

      setTotalCount(result.totalCount);
      setItems(result.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData({ orderBy, currentPage, itemsPerPage });
  }, [orderBy, currentPage, itemsPerPage]);

  const handleOptionChange = (option: string) => {
    setOrderBy(option);
  };

  const handlePageChange = (option: number) => {
    setCurrentPage(option);
  };

  return (
    <section className="all-products">
      <ProductSearch onOptionChange={handleOptionChange} />
      <ul className="list-area all-area">
        {items.map((item) => (
          <Link key={item.id} to={`/items/${item.id}`}>
            <AllProductItem item={item} />
          </Link>
        ))}
      </ul>
      <div className="pagination">
        <Pagination
          onPageChange={handlePageChange}
          pageNumber={pageNumber}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default AllProductList;
