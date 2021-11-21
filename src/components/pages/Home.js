import React from "react";
import "../../App.css";
import AutoSlide from "../AutoSlide";
import Cards from "../Cards";
import Content from "../Content";
import { SliderData } from "../SliderData";
import { CardInfoData } from "../CardInfoData";
import Footer from "../Footer";
import Camping from "../Camping";
import Hiking from "../Hiking";

function Home() {
  return (
    <>
      {/* <HeroPage /> */}
      <AutoSlide slides={SliderData} />
      <Camping />
      <Hiking />
      <Content />
      <Cards title="Check out These Destinations!" data={CardInfoData} />
      <Cards title="Trips happening this week..." data={CardInfoData} />
      <Footer />
    </>
  );
}

export default Home;
