import React from "react";
import HowManyParks from "./parks/howManyParks";
import Elevation from "./parks/RockyMountain";

function ColoradoStateParks() {
  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <HowManyParks />
      <Elevation /> 
    </div>
  )
}

export default ColoradoStateParks