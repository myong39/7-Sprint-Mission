import { useState } from "react";
import styles from "@/pages/boards/components/AllArticle/Dropdown/styles.module.scss";
import Image from "next/image";
import arrowIcon from "@/assets/icons/ic_arrow_down.svg";
import sortIcon from "@/assets/icons/ic_sort.svg";

interface DropdownProps {
  options: string[];
  defaultOption: string;
  onChange: (option: string) => void;
}

const Dropdown = ({ options, defaultOption, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["dropdown"]}>
        <div className={styles["dropdown-header"]} onClick={toggleDropdown}>
          <span className={styles["dropdown-option"]}>{selectedOption}</span>
          <Image
            src={arrowIcon}
            alt="화살표"
            className={styles["arrow-icon"]}
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className={styles["mobile-dropdown"]}>
        <div
          className={styles["mobile-dropdown-header"]}
          onClick={toggleDropdown}
        >
          <Image src={sortIcon} alt="정렬" width={24} height={24} />
        </div>
      </div>

      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles["dropdown-list-item"]}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
