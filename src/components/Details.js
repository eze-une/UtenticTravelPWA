import React from "react";
import { useInView } from 'react-intersection-observer';
import './Details.css'

const Details = ({ imagesrc, title, subtitle, flipped }) => {
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
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider-content">
            <h1 className="slider-title">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imagesrc} className="slider-image" alt="Travel" />
        </>
      );
    }
  };
  return <div className={inView ? "slider slider-zoom" : "slider"} ref={ref}> {renderContent()}</div>;
};

export default Details;
