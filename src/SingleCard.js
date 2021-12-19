import React from "react";

function SingleCard(props) {
  return (
    <div className="card__container">
      <li className="cards__item" style={{width:'300px',margin:"0"}}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img src={props.src} alt="Travel" className="cards__item__img"></img>
        </figure>

        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
          <p className="cards__item__price">{props.price} ETB</p>
        </div>
      </li>
    </div>
  );
}

export default SingleCard;
