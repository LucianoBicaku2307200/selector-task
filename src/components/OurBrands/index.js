import React from "react";
import "./OurBrands.scss";

const brands = [
  "TOD’S",
  "FURLA",
  "GUCCI",
  "PRADA",
  "CHANEL",
  "HOGAN",
  "BULGARI",
  "ARMANI",
  "CHURCH’S",
  "KENZO",
  "BURBERRY",
  "JUST CAVALLI",
  "DIOR",
  "CHRISTIAN LOUBOUTIN",
  "DAMIANI",
  "MOSCHINO",
  "ELISABETTA FRANCHI",
  "HERMÈS",
  "TIFFANY & CO.",
  "LUIS VUITTON",
];

const OurBrands = () => {
  return (
    <div className="our-brands">
      <h5>Our brands</h5>
      <div>
        {brands.map((el, index) => (
          <div className="brand" key={index}>
            {el}
          </div>
        ))}
        <div className="last">BRAND A-Z</div>
      </div>
    </div>
  );
};

export default OurBrands;
