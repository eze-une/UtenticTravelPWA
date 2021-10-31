import React from 'react'
import { Link } from "react-router-dom";
import './HeroPage.css'

function HeroPage() {

    return (
        <div className="hero-page">
            <div className='hero-page-container'>
                <h1 className="title">We bring  you all the travel options to a signle platform!</h1>
                <h3 className="description">Find your ideal trip from many of the travel pacages.</h3>
                <div className='hero-page-button'>
                    <Link to="/signup" className="hero-page-signup"> Sign Up</Link>
                    <Link to="/signup" className="hero-page-login"> Login</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroPage
