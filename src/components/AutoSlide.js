import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AutoSlide.css";

function AutoSlide(props) {
  const images = [
    `https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80`,
    `https://images.unsplash.com/photo-1624314138470-5a2f24623f10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80`,
    `https://images.unsplash.com/photo-1572888195250-3037a59d3578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80`,
    `https://images.unsplash.com/photo-1516533075015-a3838414c3ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    `https://images.unsplash.com/photo-1508914127305-fa5114b81b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
  ];
  const delay = 3500;
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // we used side effects because we have setTimeout. use state are used only when the index is changed
  React.useEffect(() => {
    resetTimeout();
    //to do something after sometime
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%,0,0` }}
      >
        {images.map((backgroundColor, index) => (
          <div className="slides" key={index}>
            <img
              src={backgroundColor}
              style={{ height: "108%", width: "100%", opacity: "0.5" }}
            />
          </div>
        ))}
      </div>
      <div className="info-container">
        <h1 className="title">Explore The Authentic!</h1>
        <h3 className="description">
          Find the best travel packages in one place.{" "}
        </h3>
        <div>
          <Link to="/Explore" className="explore-button">
            <div className="ui animated button" style={{backgroundColor:'red',color:"white",borderRadius:'30px', marginTop:'10px'}}>
              <div class="visible content"  style={{height:"30px",marginTop:'1rem'}}>Explore Now</div>
              <div class="hidden content"  style={{height:"50px", marginTop:'-2rem'}}>
                <i class="right arrow icon"></i>
              </div>
            </div>
          </Link>
        </div>
        <div className="dots">
        {images.map((_, indx) => (
          <div
            key={indx}
            className={`dot${index === indx ? " active" : ""}`}
            onClick={() => {
              setIndex(indx);
            }}
          ></div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default AutoSlide;
