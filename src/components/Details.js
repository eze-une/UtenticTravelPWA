import React from "react";
import { useInView } from "react-intersection-observer";
import "./Details.css";

const Details = ({
  src,
  title,
  description,
  flipped,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const renderContent = () => {
    console.log(flipped);
    console.log('jhjh');
    if (flipped) {
      return (
        <>
          <div className="slider-content">
            <img src={src} className="slider-image" alt="Travel" />
            <div className="slider-details">
              <h1 className="slider-title">{title}</h1>
              <h3 className="slider-description">{description}</h3>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
           <div className="slider-content">
            <div className="slider-details">
              <h1 className="slider-title">{title}</h1>
              <h3 className="slider-description">{description}</h3>
            </div>
            <img src={src} className="slider-image" alt="Travel" />
          </div>
        </>
      );
    }
  };
  return (
    <div className={inView ? "slider slider-zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Details;
