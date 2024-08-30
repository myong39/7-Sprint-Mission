import { ChangeEvent, FormEvent, useState } from "react";
import "../UsedMarketPage.css";
import { Link } from "react-router-dom";
import searchImg from "@/assets/images/icons/ic_search.svg";
import useDeviceType from "@/hooks/useDeviceType";
import dropdownImg from "@/assets/images/icons/ic_sort.svg";
import { useSearchParams } from "react-router-dom";
import { ProductSearchType } from "@/types/ProductTypes";

const FAVORITE_ORDER = "favorite";
const RECENT_ORDER = "recent";

const ProductSearch: React.FC<ProductSearchType> = ({ onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState("최신순");
  const [isOpen, setIsOpen] = useState(false);

  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword || "");

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { isMobile } = useDeviceType();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option === FAVORITE_ORDER ? "좋아요순" : "최신순");
    onOptionChange(option);
    setIsOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="all-products-bar">
      <h1>전체 상품</h1>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <div className="search-area">
            <img id="search-img" src={searchImg} alt="검색 돋보기" />
            <input
              id="search-input"
              type="text"
              name="keyword"
              value={keyword}
              onChange={handleKeywordChange}
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <Link to="/additem">
            <button id="add-item-button" className="blue-button button">
              상품 등록하기
            </button>
          </Link>
        </form>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            {!isMobile ? selectedOption : null}
            {!isMobile && <span className="arrow">{isOpen ? "▲" : "▼"}</span>}
            {isMobile && (
              <img id="dropdown-img" src={dropdownImg} alt="드롭다운 버튼" />
            )}
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleOptionClick(RECENT_ORDER)}>최신순</li>
              <li onClick={() => handleOptionClick(FAVORITE_ORDER)}>
                좋아요순
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
