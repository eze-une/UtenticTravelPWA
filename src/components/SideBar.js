import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import './SideBar.css'

function SideBar() {
    const [click,setClick]= useState(false);
    const changeBackground=()=>setClick(!click);

    return (
        <div className="sidebar__container">
            <h3>Filter By</h3>
            <ul className="sidebar__menu">
                <li className={click ? "sidebar__item" : "sidebar__item__active"}>
                    <Link to="/explore" className="sidebar__links" onClick={changeBackground}>Price</Link>
                </li>
                <li className="sidebar__item">
                    <Link to="/explore" className="sidebar__links">Price</Link>
                </li>
                <li className="sidebar__item">
                    <Link to="/explore" className="sidebar__links">Price</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
