import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroPage from "../HeroPage";
import { SliderData } from "../SliderData";
import SliderPage from "../SliderPage";

function Home() {
  return (
    <>
      <HeroPage />
      <SliderPage slides={SliderData} leng={SliderData.length}/>
      <Cards text="Check out These Destinations!" />
    </>
  );
}

export default Home;
