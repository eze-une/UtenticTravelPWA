import React from "react";
import { CardInfoData } from "../CardInfoData";
import ExploreCards from "../../ExploreCards";
function Explore() {
  return (
    <div>
      <ExploreCards data={CardInfoData} title="Trips for this Week" />
      <ExploreCards data={CardInfoData} title="Trips for this Month" />
      <ExploreCards data={CardInfoData} title="Destinations" />
      <ExploreCards data={CardInfoData} title="Hot Spots" />
      <ExploreCards data={CardInfoData} title="Trips Creators" />
    </div>
  );
}
export default Explore;
