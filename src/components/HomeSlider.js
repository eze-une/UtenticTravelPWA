import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import SingleCard from "../SingleCard";
import { Icon } from "semantic-ui-react";

function HomeSlider(props, show) {
  const RightArrow = (
    <div>
      <i
        class="circular chevron right icon red large"
        style={{ marginTop: "10rem" }}
      ></i>
    </div>
  );
  const LeftArrow = (
    <div>
      <i
        class="circular chevron left icon red large"
        style={{ marginTop: "10rem" }}
      ></i>
    </div>
  );
  return (
    <>
      <h1 style={{ marginLeft: "7rem" }}>{props.title}</h1>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          padding: "20px",
          margin: "14px",
        }}
      >
        <Carousel
          show={4.3}
          slide={1}
          swiping={true}
          infinite={false}
          rightArrow={RightArrow}
          leftArrow={LeftArrow}
        >
          {props.data.slice(0, 9).map((item, index) => {
            return (
              <div className="main__container" key={index}>
                <SingleCard
                  data-category={item.label}
                  src={item.src}
                  text={item.text}
                  label={item.label}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default HomeSlider;
