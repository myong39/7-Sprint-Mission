import React, { useState, useEffect } from "react";
import arrowLeftImg from "@/assets/images/icons/arrow_left.svg";
import arrowRightImg from "@/assets/images/icons/arrow_right.svg";
import { getPageNumberArray } from "@/utils/Utils";
import { PaginationType } from "@/types/ProductTypes";

const Pagination: React.FC<PaginationType> = ({
  onPageChange,
  pageNumber,
  currentPage,
}) => {
  // 페이지 개수만큼 배열에
  const pageNumberArray = getPageNumberArray(pageNumber);
  // 활성화 된 페이지
  const [activePage, setActivePage] = useState(1);
  // 화살표 비활성화
  const [isArrowDisabled, setIsArrowDisabled] = useState([false, false]);

  const handleLodePage = (num: number) => {
    setActivePage(num);
    onPageChange(num);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > pageNumber || newPage === currentPage) return;

    setActivePage(newPage);
    onPageChange(newPage);
  };

  useEffect(() => {
    setIsArrowDisabled([currentPage <= 1, currentPage >= pageNumber]);
  }, [currentPage, pageNumber]);

  return (
    <>
      <button
        id="arrowLeft"
        className={`circle ${isArrowDisabled[0] ? "disabled" : ""}`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <img
          className={`arrow-image ${isArrowDisabled[0] ? "disabled" : ""}`}
          src={arrowLeftImg}
          alt="왼쪽 화살표"
        />
      </button>
      <div className="page-nums">
        {pageNumberArray.map((num, index) => {
          return (
            <button
              className={`circle ${num === activePage ? "active" : ""}`}
              key={index}
              onClick={() => handleLodePage(num)}
            >
              {num}
            </button>
          );
        })}
      </div>
      <button
        id="arrowRight"
        className={`circle ${isArrowDisabled[1] ? "disabled" : ""}`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <img
          className={`arrow-image ${isArrowDisabled[1] ? "disabled" : ""}`}
          src={arrowRightImg}
          alt="오른쪽 화살표"
        />
      </button>
    </>
  );
};

export default Pagination;
