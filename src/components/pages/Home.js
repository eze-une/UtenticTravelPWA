import React from "react";
import "../../App.css";
import AutoSlide from "../AutoSlide";
import Cards from "../Cards";
import Content from "../Content";
import { SliderData } from "../SliderData";
import { CardInfoData } from "../CardInfoData";
import Footer from "../Footer";
import Details from "../Details";
import travel01 from "../../Ellipse 49.png";
import travel02 from "../../Group 1109.png";

function Home() {
  return (
    <>
      {/* <HeroPage /> */}
      <AutoSlide slides={SliderData} />
      <Details
        imagesrc={travel01}
        title={`Explore the wonders of nature`}
        subtitle={`Our platform can help you find the perfect trip for you and help you ceonnect with nature`}
        flipped={true}
      />
      <Details
        imagesrc={travel02}
        title={`Discover Local cultures`}
        subtitle={`Our platform can help you find the perfect trip for you and help you ceonnect with nature`}
        flipped={false}
      />
      <Content />
      <Cards title="Check out These Destinations!" data={CardInfoData} />
      <Cards title="Trips happening this week..." data={CardInfoData} />
      <Footer />
    </>
  );
}

export default Home;
