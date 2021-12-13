import React from "react";
import SingleCard from "../SingleCard";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="cards">
      <h1>{props.title}</h1>
      <div className="main">
        {props.data.map((item, index) => {
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
      </div>
      <h3 className="link">See More</h3>
    </div>
  );
}
