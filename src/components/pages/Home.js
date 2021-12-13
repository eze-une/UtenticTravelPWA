import React from "react";
import "../../App.css";
import AutoSlide from "../AutoSlide";
import Cards from "../Cards";
import Content from "../Content";
import { SliderData } from "../SliderData";
import { CardInfoData } from "../CardInfoData";
import Details from "../Details";
import travel01 from "../../Ellipse 49 (1).png";
import travel02 from "../../Group 1112.png";
import HomeSlider from "../HomeSlider";

// amplitude.getInstance().logEvent('visitedHomePage');

function Home() {
  return (
    <>
      <AutoSlide slides={SliderData}/>
      <Content />
      <HomeSlider data={CardInfoData} title="Check out These Destinations!"/>
      <Cards title="Check out These Destinations!" data={CardInfoData} />
      <Details
        imagesrc={travel01}
        title={`Explore the wonders of nature`}
        subtitle={`product display`}
        description={`Use this section to show off oneof your features in great details`}
        subtitleDescription={'you can add a product display just like the ones in the herosection'}
        flipped={false}
      />
      <Details
        imagesrc={travel02}
        title={`Discover Local cultures`}
        subtitle={`This cool list with icons`}
        description={`Use this section to show off oneof your features in great details`}
        subtitleDescription={'you can add a product display just like the ones in the herosection'}
        flipped={true}
      />
      <Content />
    </>
  );
}

export default Home;
