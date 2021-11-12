import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="content-container">
      <h1 className="Title">What Do We Have In Store For You?</h1>
      <div className="cards-container">
        <div className="card">
          <div className="pics">
            {/* <img src={cherry} alt="hike" className="image" width="100" height="100"/> */}
          </div>
          <h3>Our added value</h3>
          <div className="textcolumn">
            <p>
              Check out the best hiking offers and Enjoy the Best Adventure.
              Choose by price and destination and find the trip that works for
              you
            </p>
          </div>
          <div className="link-container">
            <span>Read more</span>
          </div>
        </div>

        <div className="card">
          <div className="pics">
            {/* <img src={cherry} alt="hike" className="image" width="100" height="100"/> */}
          </div>
          <h3>Hiking</h3>
          <div className="textcolumn">
            <p>
              Check out the best hiking offers and Enjoy the Best Adventure.
              Choose by price and destination and find the trip that works for
              you
            </p>
          </div>
          <div className="link-container">
            <span>Read more</span>
          </div>
        </div>

        <div className="card">
        <div className="pics">
            {/* <img src={cherry} alt="hike" className="image" width="100" height="100"/> */}
          </div>
          <h3>Camping</h3>
          <div className="textcolumn">
            <p>
              Check out the best hiking offers and Enjoy the Best Adventure.
              Choose by price and destination and find the trip that works for
              you
            </p>
          </div>
          <div className="link-container">
              <span>Read more</span></div>
        </div>

        <div className="card">
        <div className="pics">
            {/* <img src={cherry} alt="hike" className="image" width="100" height="100"/> */}
          </div>
          <h3>City Walks</h3>
          <div className="textcolumn">
            <p>
              Check out the best hiking offers and Enjoy the Best Adventure.
              Choose by price and destination and find the trip that works for
              you
            </p>
          </div>
          <div className="link-container">
              <span>Read more</span></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
