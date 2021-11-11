import React, { useState } from "react";
import "./SliderPage.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
const SliderPage = (props) => {
  const [currrent, setCurrrent] = useState(0);

  const nextSlide = () => {
    setCurrrent(currrent === props.leng - 1 ? 0 : currrent + 1);
  };
  const previousSlide = () => {
    setCurrrent(currrent === 0 ? props.leng - 1 : currrent - 1);
  };

  if (!Array.isArray(props.slides) || props.leng < 0) {
    return null;
  }
  return (
    <div className="container">
      <h2 className="title">Whate are you doing this weekend? Why not</h2>
      <section className="slider">
        <FaArrowAltCircleLeft
          className="icon left-arrow"
          onClick={previousSlide}
        />
        <FaArrowAltCircleRight
          className="icon right-arrow"
          onClick={nextSlide}
        />

        {props.slides.map((slide, index) => {
          return (
            <div
              className={index === currrent ? "slide active" : "slide"}
              key={index}
            >
              {index === currrent && (
                <img src={slide.image} className="image" alt="images" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default SliderPage;
