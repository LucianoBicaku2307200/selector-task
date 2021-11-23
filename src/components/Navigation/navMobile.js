import React, { useState } from "react";
import { svg } from "../../Assets";
import "./nav.scss";

const DropDown = ({ text, options }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <p onClick={() => setHidden(!hidden)}>{text}</p>
      {hidden && (
        <div>
          {(options || []).map((el, index) => (
            <a key={index}>{el}</a>
          ))}
        </div>
      )}
    </div>
  );
};

const NavMobile = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  const toggle = () => {
    setIsSideBarVisible(!isSideBarVisible);
  };
  return (
    <div className="nav-mobile">
      <div>
        <img src={svg.Menu} alt="" onClick={toggle} />
        <img src={svg.SearchWhite} alt="" />
      </div>
      <div className="logo-mobile">
        <img alt="" src={svg.Logo} />
      </div>
      <ul>
        <li>
          <img src={svg.planeWhite} alt="" />
        </li>
        <li>
          <img src={svg.shopping_bagWhite} alt="" />
        </li>
      </ul>
      {isSideBarVisible && (
        <div className="sidebar-background" onClick={toggle} />
      )}
      <div
        className={`sidebar-content ${isSideBarVisible ? "show-sidebar" : ""}`}
      >
        <div>
          <DropDown text="shop" options={["Dufry", "Bottega Veneta"]} />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
