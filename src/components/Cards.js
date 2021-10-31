import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="cards">
      <h1> {props.text}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWUboXNc5BHzUXNfglewUktNqr5Cn9E8wzw&usqp=CAU'
              text="Explore the hidden Waterfalls of Ensaro"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWUboXNc5BHzUXNfglewUktNqr5Cn9E8wzw&usqp=CAU'
              text="Explore the hidden Waterfalls of Ensaro"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src='https://lp-cms-production.imgix.net/2020-12/shutterstockRF_1052066939.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850'
              text="Explore the hidden beaches"
              label="Hiking"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWUboXNc5BHzUXNfglewUktNqr5Cn9E8wzw&usqp=CAU'
              text="Explore the hidden Waterfalls of Ensaro"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWUboXNc5BHzUXNfglewUktNqr5Cn9E8wzw&usqp=CAU'
              text="Explore the hidden Waterfalls of Ensaro"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src='https://lp-cms-production.imgix.net/2020-12/shutterstockRF_1052066939.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850'
              text="Explore the hidden beaches"
              label="Hiking"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  ); 
}
export default Cards;
