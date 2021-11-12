import React, { useState } from "react";
import "./AutoSlide.css";

function AutoSlide(props) {
  // const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const colors = [
    `https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80`,
    `https://images.unsplash.com/photo-1624314138470-5a2f24623f10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80`,
    `https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80`,
    `https://images.unsplash.com/photo-1572888195250-3037a59d3578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80`
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
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
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
        {colors.map((backgroundColor, index) => (
          <div className="slides" key={index}>
            <img src={backgroundColor} style={{height:'100%', width: '100%'}}/>
          </div>
        ))}
      </div>

      {/* <div className="dots">
        {colors.map((_, indx) => (
          <div
            key={indx}
            className={`dot${index === indx ? " active" : ""}`}
            onClick={() => {
              setIndex(indx);
            }}
          ></div>
        ))}
      </div> */}
      <div className="info-container">
        <h1 className="title">The Adventure awaits!</h1>
        <h3 className="description">
          We bring you all the best travel for you to choose from and have the best adventure!
        </h3>
        
      </div>
    </div>
  );
}

export default AutoSlide;
