import React, { useState } from 'react';
import style from './Dropdown.module.css';

interface DropdownProps {
  options: string[];
  onChange: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className={style.DropdownContainer}>
      <select
        className={style.Select}
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
