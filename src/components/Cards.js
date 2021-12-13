import React from "react";
import SingleCard from "../SingleCard";
import "./Cards.css";
import { Carousel } from "@trendyol-js/react-carousel";

export default function Cards(props) {
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
    <div className="cards">
      <h1 style={{marginLeft:'2rem'}}>{props.title}</h1>
      <div
        className="main"
        style={{
          cursor: "pointer",
          display: "flex",
          borderRadius: "20px",
          padding: "25px",
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
      <h3 className="link">See More</h3>
    </div>
  );
}
