import { useState } from "react";
import styles from "./styles.module.scss";

interface DropDownProps {
  onChange: (value: string) => void;
}

export default function CustomDropDown({ onChange }: DropDownProps) {
  const [selected, setSelected] = useState("recent");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (value: string) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["dropdown"]}>
      <div className={styles["dropdownHeader"]} onClick={toggleDropdown}>
        {selected === "recent" ? "최신순" : "인기순"}
      </div>
      {isOpen && (
        <ul className={styles["dropdownList"]}>
          <li
            className={styles["dropdownItem"]}
            onClick={() => handleSelectChange("recent")}
          >
            최신순
          </li>
          <li
            className={styles["dropdownItem"]}
            onClick={() => handleSelectChange("like")}
          >
            인기순
          </li>
        </ul>
      )}
    </div>
  );
}
