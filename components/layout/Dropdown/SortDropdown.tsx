import arrowDownImg from "@/public/images/icons/ic_arrow_down.svg";
import { useEffect, useState } from "react";
import styles from "./SortDropdown.module.scss";
import smallDropdownImg from "@/public/images/icons/ic_sort.svg";
import useDeviceType from "@/hooks/useDeviceType";
import Dropdown from "./Dropdown";

export default function SortDropdown({
  onOrderChange,
}: {
  onOrderChange: (newOption: string) => void;
}) {
  const items = ["최신순", "좋아요순"];
  const { isMobile } = useDeviceType();
  const [isMounted, setIsMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState("최신순");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleOptionClick = (option: string) => {
    setSelectedItem(option);
    onOrderChange(option === "최신순" ? "recent" : "like");
  };

  const triggerContent = isMobile ? (
    <img
      className={styles["arrow"]}
      src={smallDropdownImg.src}
      alt="작은 드롭다운"
    />
  ) : (
    <>
      {selectedItem}
      <img
        className={styles[`arrow big`]}
        src={arrowDownImg.src}
        alt="아래 화살표"
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
      />
    </div>
  );
}
