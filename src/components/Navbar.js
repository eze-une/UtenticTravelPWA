import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import {sendAmplitudeData} from './utilities/amplitude';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton]=useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const exploreButton = () => {
        var event = "Explore Button Clicked";
        var eventProperties = {
            "Test": "Hello"
        };
        console.log(event, eventProperties);
        setClick(false);
        sendAmplitudeData(event, eventProperties);
    };

    const showButton=()=>{
        if(window.innerWidth<=700){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    window.addEventListener('resize',showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Utentic
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="name-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="name-item">
                            <Link
                                to="/explore"
                                className="nav-links"
                                onClick={exploreButton}
                            >
                                Explore
                            </Link>
                        </li>
                        <li className="name-item">
                            <Link
                                to="/services"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="name-item">
                            <Link
                                to="/signup"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
