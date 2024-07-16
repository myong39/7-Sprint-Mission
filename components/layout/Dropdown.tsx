import arrowDownImg from "@/public/images/icons/ic_arrow_down.svg";
import { MouseEvent, useState } from "react";
import styles from "./Dropdown.module.scss";
import smallDropdownImg from "@/public/images/icons/ic_sort.svg";
import useDeviceType from "@/hooks/useDeviceType";

export default function Dropdown({
  onOrderChange,
}: {
  onOrderChange: (newOption: string) => void;
}) {
  const [seletedOption, setSeletedOption] = useState<string>("최신순");
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useDeviceType();

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSeletedOption(option === "recent" ? "최신순" : "좋아요순");
    onOrderChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles["droppdown-main"]}>
      <button className={styles.trigger} onClick={handleToggleDropdown}>
        {!isMobile && (
          <>
            <span className={styles["trigger-text"]}>{seletedOption}</span>
            <img
              className={styles[`arrow big`]}
              src={arrowDownImg.src}
              alt="아래 화살표"
            />
          </>
        )}
        {isMobile && (
          <img
            className={styles["arrow"]}
            src={smallDropdownImg.src}
            alt="작은 드롭다운"
          />
        )}
      </button>
      {isOpen && (
        <div className={styles["menu-wrapper"]}>
          <div
            className={styles.menu}
            onClick={() => handleOptionClick("recent")}
          >
            최신순
          </div>
          <span className={styles["menu-line"]}></span>
          <div
            className={styles.menu}
            onClick={() => handleOptionClick("like")}
          >
            좋아요순
          </div>
        </div>
      )}
    </div>
  );
}
