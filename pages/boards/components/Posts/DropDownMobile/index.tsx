import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import sortImg from "@/assets/icons/ic_sort.svg";

interface DropDownMobileProps {
  onChange: (value: string) => void;
}

export default function DropDownMobile({ onChange }: DropDownMobileProps) {
  const [selected, setSelected] = useState("recent");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // 클릭 이벤트 핸들러
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectChange = (value: string) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        <Image src={sortImg} alt="dropdown header" />
      </div>
      <ul className={`${styles.dropdownList} ${isOpen ? styles.open : ""}`}>
        <li className={styles.dropdownItem} onClick={() => handleSelectChange("recent")}>
          최신순
        </li>
        <li className={styles.dropdownItem} onClick={() => handleSelectChange("like")}>
          인기순
        </li>
      </ul>
    </div>
  );
}
