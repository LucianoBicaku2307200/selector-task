import React from "react";
import { svg } from "../../Assets";
import "./nav.scss";
import CustomDropDown from "../CustomDropdown";

const Options = ["Italian", "English", "русский", "中文"];

const Nav = () => {
  return (
    <nav className="nav-desktop">
      <div className="nav-wrapper">
        <div className="nav-first-header">
          <CustomDropDown text="italian" options={Options} />
          <p>Check your order</p>
        </div>
        <div>
          <div className="main-logo">
            <img alt="" src={svg.Logo} />
            <h3>Brand Logo</h3>
          </div>
          <ul>
            <li>Shops</li>
            <li>Brands</li>
            <li>products</li>
            <li>services</li>
            <li>
              <img src={svg.SearchWhite} alt="" />
            </li>
          </ul>
          <ul>
            <li>
              <img src={svg.planeWhite} alt="" />
            </li>
            <li>
              <img src={svg.shopping_bagWhite} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
