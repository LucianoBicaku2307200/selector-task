import React, { useState } from "react";
import { svg } from "../../Assets";
import "./customDropDown.scss";

const CustomDropDown = ({ text, options }) => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const toggle = () => {
    setVisible(!visible);
  };

  const selectOption = (id) => {
    setSelectedOption(id);
  };

  return (
    <div className="custom-dropdown">
      <div onClick={toggle}>
        <p>{text || options[selectedOption]}</p>
        <img src={svg.DownArrow} alt="" />
      </div>
      {visible && (
        <div className="custom-dropdown-options">
          {options.map((el, index) => (
            <div
              key={index}
              onClick={() => selectOption(index)}
              className={`custom-dropdown-option ${
                index === selectedOption ? "custom-dropdown-option-active" : ""
              }`}
            >
              <p>{el}</p>
              <span>
                <img src={svg.CheckMark} alt="" />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
