import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="info-conatiner">
        <div className="footer-info">
          <div className="footer-element">
            <h1 className="footer-head">Utentic</h1>
            <p>
              {`Check out the best hiking offers and Enjoy the Best Adventure.
            Choose by price and destination and find the trip that works for you`}
            </p>
          </div>

          <div className="footer-element">
            <h2 className="footer-head">Company</h2>
            <div>
              <h3>mobile</h3>
              <h3>ssthn</h3>
            </div>
          </div>

          <div className="footer-element">
            <h2 className="footer-head">Contact</h2>
            <h3>utentictravel@gmail.com</h3>
            <h3>Affiliates</h3>
          </div>

          <div className="footer-element">
            <h2 className="footer-head">More</h2>
            <h3>Packages</h3>
            <h3>Discounted Packages</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
