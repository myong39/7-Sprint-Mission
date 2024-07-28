import arrowDownImg from "@/public/images/icons/ic_arrow_down.svg";
import { useEffect, useState } from "react";
import styles from "./SortDropdown.module.scss";
import smallDropdownImg from "@/public/images/icons/ic_sort.svg";
import useDeviceType from "@/hooks/useDeviceType";
import Dropdown from "./Dropdown";
import { SortDropdownProps } from "@/types/UiTypes";

export default function SortDropdown({
  onOrderChange,
  items = [],
  defaultOrderType,
}: SortDropdownProps) {
  const { isMobile } = useDeviceType();
  const [isMounted, setIsMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultOrderType);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleOptionClick = (option: string) => {
    setSelectedItem(option);
    onOrderChange(option);
  };

  const triggerContent = isMobile ? (
    <img
      className={styles["arrow"]}
      src={smallDropdownImg.src}
      alt="정렬 드롭다운"
    />
  ) : (
    <>
      {selectedItem}
      <img
        className={styles[`arrow big`]}
        src={arrowDownImg.src}
        alt="정렬 드롭다운"
      />
    </>
  );

  return (
    <div className={styles["droppdown-main"]}>
      <Dropdown
        trigger={triggerContent}
        items={items}
        textDrop={!isMobile}
        onSelect={handleOptionClick}
        triggerClassName={styles.trigger}
        menuClassName={styles["menu"]}
        itemClassName={styles["menu-item"]}
      />
    </div>
  );
}
