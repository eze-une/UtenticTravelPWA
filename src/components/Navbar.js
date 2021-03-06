import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import { sendAmplitudeData } from "./utilities/amplitude";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [navbar, setNavbar] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const exploreButton = () => {
		var event = "Explore Button Clicked";
		var eventProperties = {
			Test: "Hello",
		};
		console.log(event, eventProperties);
		setClick(false);
		sendAmplitudeData(event, eventProperties);
	};

	const showButton = () => {
		if (window.innerWidth <= 700) {
			setButton(false);
		} else {
			setButton(true);
		}
	};
	window.addEventListener("resize", showButton);

	const changeBackground = () => {
		console.log(window.scrollY);
	};
	window.addEventListener("srcoll", changeBackground);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						UTENTIC
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="name-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="name-item">
							<Link to="/explore" className="nav-links" onClick={exploreButton}>
								Explore
							</Link>
						</li>
					</ul>

					<button class="ui black basic button">
						<a href="http://bit.ly/31YBqZU">Join Us On Telegram</a>
					</button>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
