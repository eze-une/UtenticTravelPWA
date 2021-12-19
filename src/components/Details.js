import React from "react";
import { useInView } from "react-intersection-observer";
import "./Cards.css";

const Details = ({
  imagesrc,
  title,
  description,
  subtitle,
  subtitleDescription,
  flipped,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imagesrc} className="slider-image" alt="Travel" />
          <div className="slider-content">
            <h1 className="slider-title">{title}</h1>
            <h2 className="slider-description">{description}</h2>
            <div className="slider-details">
              <h3 className="slider-subtitle">{subtitle}</h3>
              <p>{subtitleDescription}</p>
            </div>
            <div className="slider-details">
              <h3 className="slider-subtitle">{subtitle}</h3>
              <p>{subtitleDescription}</p>
            </div>
            <div className="slider-details">
              <h3 className="slider-subtitle">{subtitle}</h3>
              <p>{subtitleDescription}</p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider-content">
            <h1 className="slider-title">{title}</h1>
            <h2 className="slider-description">{description}</h2>
            <div className="slider-details">
              <h3 className="slider-subtitle">{subtitle}</h3>
              <p>{subtitleDescription}</p>
            </div>
            <div className="slider-details">
              <h3 className="slider-subtitle">{subtitle}</h3>
              <p>{subtitleDescription}</p>
            </div>
            <div className="slider-details">
              <h3 className="slider-subtitle">{subtitle}</h3>
              <p>{subtitleDescription}</p>
            </div>
          </div>
          <img src={imagesrc} className="slider-image" alt="Travel" />
        </>
      );
    }
  };
  return (
    <div className={inView ? "slider slider-zoom" : "slider"} ref={ref}>
      {" "}
      {renderContent()}
    </div>
  );
};

export default Details;
