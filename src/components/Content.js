import React from "react";
import "./Content.css";
import camping from "../camping-tent.png";
import citywalks from "../city.png"
import values from "../Group 1114.png"
import hiking from "../hiking (1).png"

function Content() {
  return (
    <div className="content-container">
      <h1 className="titl">What Do We Have In Store For You?</h1>
      <div className="cards-container">
        <div className="card">
        <img src={values} className="icon" alt="camping"/>
          <h3>Our added value</h3>
          <div className="textcolumn">
            <p>
              Check out the best hiking offers and Enjoy the Best Adventure.
              Choose by price and destination and find the trip that works for
              you
            </p>
          </div>
        </div>

        <div className="card">
        <img src={hiking} className="icon" alt="camping"/>
          <h3>Hiking</h3>
          <div className="textcolumn">
            <p>
              Check out the best hiking offers and Enjoy the Best Adventure.
              Choose by price and destination and find the trip that works for
              you
            </p>
          </div>
        </div>

        <div className="card">
        <img src={camping} className="icon" alt="camping"/>
          <h3>Camping</h3>
          <div className="textcolumn">
            <p>
              Check out the best hiking offers and Enjoy the Best Adventure.
              Choose by price and destination and find the trip that works for
              you
            </p>
          </div>
        </div>

        <div className="card">
        <img src={citywalks} className="icon" alt="camping"/>
          <h3>City Walks</h3>
          <div className="textcolumn">
            <p>
              Check out the best hiking offers and Enjoy the Best Adventure.
              Choose by price and destination and find the trip that works for
              you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
