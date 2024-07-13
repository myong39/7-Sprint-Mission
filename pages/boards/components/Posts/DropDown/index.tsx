// DropDown.tsx
import { useState } from "react";
import styles from "./styles.module.scss";

interface DropDownProps {
  onChange: (value: string) => void;
}

export default function DropDown({ onChange }: DropDownProps) {
  const [selected, setSelected] = useState("recent");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
    onChange(value);
  };

  return (
    <select
      value={selected}
      onChange={handleSelectChange}
      className={styles["dropdown"]}
    >
      <option value="recent">최신순</option>
      <option value="like">인기순</option>
    </select>
  );
}
