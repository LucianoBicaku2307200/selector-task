import React from "react";
import {
  BigSlider,
  Header,
  HeroSection,
  NewIn,
  Section2,
  SelectGender,
  ForYou,
  OurBrands,
  Footer,
} from "./components";
import "./styles/index.scss";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Section2 />
      <BigSlider />
      <NewIn />
      <SelectGender />
      <ForYou />
      <OurBrands />
      <Footer />
    </div>
  );
}

export default App;
