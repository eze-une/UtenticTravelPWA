import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroPage from "../HeroPage";
import SliderPage from "../SliderPage";

function Home() {
  return (
    <>
      <HeroPage />
      <SliderPage />
      <Cards text="Check out These Destinations!" />
    </>
  );
}

export default Home;
