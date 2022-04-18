import React from "react";

/* Children */
import Carousel from "./Carousel";

/* Styles */
import "./styles.css";

function Teaser() {
  return (
    <section className="Teaser" id="teaser-section">
      <div className="Wrapper">
        <span className="Title">Trusted by 1,000+ companies</span>

        <Carousel />
      </div>
    </section>
  );
}

export default Teaser;
