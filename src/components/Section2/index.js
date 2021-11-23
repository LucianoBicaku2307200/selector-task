import React from "react";
import "./section2.scss";
import { png, svg } from "../../Assets";

const Dots = () => {
  return (
    <div className="dots">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

const Section2 = () => {
  return (
    <>
      <div className="section2">
        <div className="text">
          <img src={svg.shopping_bagBlack} alt="" />
          <p>EXPLORE BRANDS</p>
        </div>
        <Dots />
        <div className="text">
          <img src={svg.plane_ticketBlack} alt="" />
          <p>
            INSERT FLIGHT <br />
            INFORMATION
          </p>
        </div>
        <Dots />
        <div className="text">
          <img src={svg.shopBlack} alt="" />
          <p>
            BOOK & PICK UP AT
            <br /> TERMINAL
          </p>
        </div>
      </div>
      <div className="grid-wrapper">
        <div className="grid">
          <div>
            <div className="item_1">
              <img alt="" src={png.Pic10} />
              <h5>SHOES SELECTION</h5>
              <a>Shop now</a>
            </div>
          </div>
          <div>
            <div className="item_2">
              <img alt="" src={png.Pic5} />
              <div>
                <h5>SUNGLASSES SEASON</h5>
                <a className="link-animation link-animation-white">
                  GO TO SUNGLASSES
                </a>
              </div>
            </div>
            <div className="item_2">
              <img alt="" src={png.Pic6} />
              <div>
                <h5>THE SANDAL-SYMBOL</h5>
                <a className="link-animation link-animation-white">
                  GO TO SANDALS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
