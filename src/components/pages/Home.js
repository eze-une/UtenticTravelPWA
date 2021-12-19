import React from "react";
import "../../App.css";
import AutoSlide from "../AutoSlide";
import Content from "../Content";
import { SliderData } from "../SliderData";
import { CardInfoData } from "../CardInfoData";
import Details from "../Details";
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
      <Testimonials />
    </>
  );
}

export default Home;
