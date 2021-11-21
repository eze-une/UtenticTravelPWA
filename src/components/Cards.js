import React from "react";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="cards">
      <h1>{props.title}</h1>
      <div className="main">
        {props.data.map((item, index) => {
          return (
            <div className="main__container" key={index}>
              <div className="card__container">
                <li className="cards__item">
                  <figure
                    className="cards__item__pic-wrap"
                    data-category={item.label}
                  >
                    <img
                      src={item.src}
                      alt="Travel"
                      className="cards__item__img"
                    ></img>
                  </figure>

                  <div className="cards__item__info">
                    <h5 className="cards__item__text">{item.text}</h5>
                  </div>
                </li>
              </div>
            </div>
          );
        })}
      </div>
      <h3 className="link">See More</h3>
    </div>
  );
}

// const Container = (prop) => {
//   return (
//     <div style={{ height: "2300px", width: "514px", margin: "16px" }}>
//       <Paper style={{ height: "20%", width: "234px" }} elevation={6} >{prop.title}</Paper>
//     </div>
//   );
// }
