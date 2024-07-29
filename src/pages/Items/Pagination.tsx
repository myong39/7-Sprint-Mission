import { useState } from "react";
import arrowLeft from "../../assets/arrow_left.svg";
import arrowRight from "../../assets/arrow_right.svg";

interface Props {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [pageGroup, setPageGroup] = useState(0);

  const handlePreviousGroup = () => {
    if (pageGroup > 0) {
      setPageGroup(0);
      onPageChange(pageGroup * 5);
    }
  };

  const handleNextGroup = () => {
    if ((pageGroup + 1) * 5 < totalPages) {
      setPageGroup(1);
      onPageChange((pageGroup + 1) * 5 + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const startPage = pageGroup * 5 + 1;
    const endPage = Math.min(startPage + 4, totalPages);
    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-number ${i === currentPage ? "active" : ""}`}
          onClick={() => handlePageClick(i)}
          disabled={i > totalPages}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={handlePreviousGroup}
        disabled={pageGroup === 0}
      >
        <img src={arrowLeft} alt="이전아이콘" />
      </button>
      {renderPageNumbers()}
      <button
        className="pagination-button"
        onClick={handleNextGroup}
        disabled={(pageGroup + 1) * 5 >= totalPages}
      >
        <img src={arrowRight} alt="다음아이콘" />
      </button>
    </div>
  );
};

export default Pagination;
