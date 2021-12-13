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
      <h1 style={{ marginLeft: "6rem" }}>{props.title}</h1> 
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          padding: "20px",
          margin: "50px",
          marginTop:"10px"
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
      <h3 className="link">See More <i class="angle double right icon #ff0000" style={{marginRight:'6rem', marginLeft:'-1rem'}}></i></h3>
    </>
  );
}

export default HomeSlider;
