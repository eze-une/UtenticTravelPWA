import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import SingleCard from "../SingleCard";

function HomeSlider(props, show) {
    const rightArrow=(
        <div>
            
        </div>
    )
  return (
    <div style={{cursor: "pointer", display: "flex", border: "1px solid #DFE1E5", borderRadius: "20px", lineHeight: "38px", padding: "12px", margin: "14px", }}>
      <Carousel show={4.5} slide={1} swiping={true} infinite={false} rightArrow={rightArrow}>
        {props.data.slice(0,9).map((item, index) => {
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
  );
}

export default HomeSlider;
