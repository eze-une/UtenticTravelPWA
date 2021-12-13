import React from "react";
import { CardInfoData } from "../CardInfoData";
import ExploreCards from "../ExploreCards";
function Explore() {
  return (
    <div>
      <ExploreCards data={CardInfoData} title="Trips for this Week" />
    </div>
  );
}
export default Explore;
