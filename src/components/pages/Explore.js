import React from 'react'
import Cards from '../Cards'
import SideBar from '../SideBar'
import './Explore.css'

function Explore() {
    return (
        <div className="explore">
            <div className="explore__container">
                <SideBar />       
                <Cards text="Lets Exlplore!"/> 
            </div>
        </div>
    )
}

export default Explore
