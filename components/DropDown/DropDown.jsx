import React, { useEffect, useRef, useState } from "react";
import dropDownStyles from "./DropDown.module.scss";

const DropDown = ({ value, onChange, list }) => {
  const [dropDownVisibility, setDropDownVisibility] = useState(false);
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);
  const dropdownRef = useRef(null);

  const handleChange = (item) => {
    const value = item == "최신순" ? "recent" : "like";
    onChange(value);
    setDropDownVisibility(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropDownVisibility(false);
    }
  };

  useEffect(() => {
    if (dropDownVisibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 600)
      );
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropDownVisibility]);

  return (
    <div className={`${dropDownStyles["drop-down"]}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={(e) => setDropDownVisibility(!dropDownVisibility)}
        className={`${dropDownStyles["drop-down-button"]} ${
          dropDownVisibility && dropDownStyles.open
        }}`}
      >
        {value == "recent" ? "최신순" : "좋아요순"}
        <img
          className={`${
            dropDownVisibility
              ? dropDownStyles["up-arrow-icon"]
              : dropDownStyles["down-arrow-icon"]
          }`}
          src="/ic_arrow_down.svg"
          alt="드롭다운 메뉴의 화살표모양 아이콘"
        />
      </button>
      {visibilityAnimation && (
        <div
          className={`${dropDownStyles["drop-down-list"]} ${
            dropDownVisibility
              ? dropDownStyles["slide-fade-in-dropdown"]
              : dropDownStyles["slide-fade-out-dropdown"]
          }`}
        >
          <ul>
            {list.map((item, index) => (
              <li key={index} onClick={() => handleChange(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
