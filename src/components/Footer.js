import React from "react";
import "./Footer.css";
import telegram from "../telegram.png";
import instagram from "../instagram.png";
import facebook from "../facebook.png";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-items">
				<div className="footer-logo">
					<h1>UTENTIC</h1>
					<h4 style={{fontWeight: "lighter"}}>Experience the Authentic!</h4>
					<br />
					<p>Contact Us</p>
					<hr /> <br />
					<div>
						<p>
							Email us: <a href="mailto:travel.utentic@gmail.com">
								travel.utentic@gmail.com
							</a>
						</p>
						<p>
							Send us a message on telegram: <a href="https://t.me/utentic">@utentic</a>
						</p>
					</div>
				</div>

				<div className="footer-socials">
					<div className="footer-socials-container">
						<a href="https://t.me/travelethiopiautentic">
							<img src={telegram} className="socials-icon" alt="telegram" />
						</a>
						<a href="http://instagram.com/travelethiopiautentic">
							<img src={instagram} className="socials-icon" alt="instagram" />
						</a>
						<a href="http://facebook.com/travelethiopiautentic">
							<img
								src={facebook}
								className="socials-icon-facebook"
								alt="facebook"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
