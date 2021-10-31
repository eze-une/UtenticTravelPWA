import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import HeroPage from '../HeroPage';


function Home() {
    return (
        <>
        <HeroPage />
        <Cards text="Check out These Destinations!"/>
        </>
    )
}

export default Home;
