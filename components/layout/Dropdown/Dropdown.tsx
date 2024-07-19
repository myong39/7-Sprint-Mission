import React, { ReactElement, useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.scss";
import useClickOutside from "@/hooks/useClickOutside";

interface DropdownProps {
  trigger?: ReactElement | string;
  items?: string[];
  children?: React.ReactNode;
  onSelect?: (item: string) => void;
  textDrop?: boolean;
  triggerClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
  onToggle?: (isOpen: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger = "",
  items = [],
  children = null,
  onSelect = () => {},
  textDrop = true,
  triggerClassName = "",
  menuClassName = "",
  itemClassName = "",
  onToggle = () => {},
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<string>(
    typeof trigger === "string" ? trigger : ""
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item);
    onToggle(false);
  };

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
    onToggle(false);
  });

  const renderTrigger = () => {
    if (typeof trigger === "string") {
      return <>{selectedItem}</>;
    } else if (React.isValidElement(trigger))
      return React.cloneElement(trigger);
  };

  useEffect(() => {}, [trigger]);

  return (
    <div className={styles.dropdown} ref={dropdownRef} {...rest}>
      <div
        className={`${styles.trigger} ${triggerClassName}`}
        onClick={handleToggle}
      >
        {renderTrigger()}
      </div>
      <div className={`${styles.menu} ${menuClassName}`}>
        {isOpen && (
          <>
            {items
              ? items.map((item, index) => (
                  <div
                    className={`${styles["menu-item"]} ${itemClassName}`}
                    key={index}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </div>
                ))
              : children}
          </>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
