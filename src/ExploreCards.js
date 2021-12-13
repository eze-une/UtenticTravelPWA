import React from "react";
import SingleCard from "./SingleCard";
import { Grid } from "semantic-ui-react";
// import './ExploreCards.css';

function ExploreCards(props) {
  return (
    <div style={{margin:'6rem'}}>
        <h2 style={{margin:'0px 30px '}}>{props.title}</h2>
      <Grid>
        {props.data.map((item, index) => {
          return (
            <Grid.Column width={4}>
              <div className="main__container" key={index}>
                <SingleCard
                  data-category={item.label}
                  src={item.src}
                  text={item.text}
                  label={item.label}
                />
              </div>
            </Grid.Column>
          );
        })}
      </Grid>
    </div>
  );
}

export default ExploreCards;
