import React from "react";
import "../../App.css";
import AutoSlide from "../AutoSlide";
import Cards from "../Cards";
import HeroPage from "../HeroPage";
import { SliderData } from "../SliderData";
import SliderPage from "../SliderPage";

function Home() {
  return (
    <>
    <AutoSlide slides={SliderData}/>
      <HeroPage />
      <SliderPage slides={SliderData} leng={SliderData.length}/>
      <Cards text="Check out These Destinations!" />
    </>
  );
}

export default Home;
