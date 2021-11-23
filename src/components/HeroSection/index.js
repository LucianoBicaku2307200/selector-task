import React, { useEffect, useState } from "react";
import "./heroSection.scss";
import Nav from "../Navigation/Nav";
import { png } from "../../Assets";
import NavMobile from "../Navigation/navMobile";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 765);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth < 765)
    );
  }, []);

  return (
    <div className="hero-section">
      <img className="hero-bg-img" src={png.Pic14} alt="" />
      {isMobile ? <NavMobile /> : <Nav />}

      <div className="hero-content">
        <div className="line" />

        <div>
          <h1>
            EVER SEEN <br />
            SOMETHING LIKE THIS?
          </h1>
          <p>
            Electric blues, cotton-candy pinks, and citrus greens: Fall’s
            <br />
            palette is all over the color wheel.
          </p>
          <a className="main-black-button" href="#">
            DISCOVER NEW COLLECTION
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
