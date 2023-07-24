import React, { useState } from "react";

export default function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className="dropdown" data-open={isOpen}>
        <label htmlFor="dropdown-toggle" className="dropdown-active">
          <span id="dropdown-selected">{selectedOption}</span>
          <img src="/chevron-down.png" alt="" className="dropdown-icon" />
        </label>
        <input
          type="checkbox"
          className="dropdown-toggle"
          name="dropdown-toggle"
          id="dropdown-toggle"
          aria-controls="dropdown-list"
          checked={isOpen}
          onChange={handleToggle}
        />
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option}
              data-option={option}
              className={selectedOption === option ? "active" : ""}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="searchbar">
        <img src="/search-line.png" alt="" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search apps, plugins and more"
        />
      </div>
    </div>
  );
}
