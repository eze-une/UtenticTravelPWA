import React from "react";
import "../../App.css";
import AutoSlide from "../AutoSlide";
import Content from "../Content";
import { SliderData } from "../SliderData";
import { CardInfoData } from "../CardInfoData";
import Details from "../Details";
import travel01 from "../../photo_2021-10-21_12-12-05.jpg";
// import travel02 from "../../Group 1112.png";
import HomeSlider from "../HomeSlider";
import Testimonials from "../Testimonials";
import { DetailsInfo } from "../DetailsInfo";
// amplitude.getInstance().logEvent('visitedHomePage');

function Home() {
  const info = DetailsInfo;
  return (
    <>
      <AutoSlide slides={SliderData} />
      <Content />
      <HomeSlider data={CardInfoData} title="Check out These Destinations!" />
      {info.map((item, index) => {
        return (
          <Details
            src={item.src}
            title={item.title}
            description={item.description}
            flipped={item.flipped}
          />
        );
      })}

      <Content />

      <Testimonials />
    </>
  );
}

export default Home;
