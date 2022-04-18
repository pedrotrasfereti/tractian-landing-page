import React from "react";

/* Children */
import Slides from "./Slides";

function Carousel() {
  return (
    <div className="Carousel">
      <div className="Track">
        <Slides />

        {/* doubled */}
        <Slides />
      </div>
    </div>
  );
}

export default Carousel;
