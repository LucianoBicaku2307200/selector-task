import React from "react";
import "./pickGender.scss";
import { png } from "../../Assets";
const PickGender = () => {
  return (
    <div className="pick-gender">
      <div>
        <img src={png.Pic7} alt="" />
        <a>Female</a>
      </div>
      <div>
        <img src={png.Pic13} alt="" />
        <a>male</a>
      </div>
    </div>
  );
};

export default PickGender;
