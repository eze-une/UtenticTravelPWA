import React from 'react'
import Cards from '../Cards'
import SideBar from '../SideBar'
import './Explore.css'
import { CardInfoData } from "../CardInfoData";

function Explore() {
    return (
        <div className="explore">
            <div className="explore__container">
                <SideBar />    
                <div>
                <Cards title="Lets Explore!" data={CardInfoData} />
                <Cards title="This Weekend.." data={CardInfoData} />
                <Cards title="Trips for this month" data={CardInfoData} />
                </div>   
                
                
            </div>
        </div>
    )
}

export default Explore
