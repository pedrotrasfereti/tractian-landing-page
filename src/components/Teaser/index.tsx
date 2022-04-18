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
      <div className="ContentWrapper">
        <h3>Effortless Predictive Maintainence</h3>
        <h2>Keep your team and machines performing at their best</h2>
      </div>
    </section>
  );
}

export default Teaser;
