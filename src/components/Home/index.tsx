import React from "react";

/* Styles */
import "./styles.css";

function Home() {
  return (
    <div className="Home" id="home">
      <div className="Container" id="heading-container">
        <h1 className="h1" id="title">
          Online Monitoring and Asset Management in One Place
        </h1>
        <h4 className="h4" id="subtitle">
          Avoid failures in your machines and make downtime a thing of the past
          with TRACTIAN&apos;s predictive system.
        </h4>
        <button className="Button" id="schedule-demo-btn" type="button">
          Schedule a demo
        </button>
        <p className="LinkParagraph">
          Already a customer?
          <span> </span>
          <a href="http://">Access here.</a>
        </p>
      </div>

      <section className="Waves" id="bg-waves">
        <div className="Wave Wave1" />
        <div className="Wave Wave2" />
        <div className="Wave Wave3" />
        <div className="Wave Wave4" />
      </section>
    </div>
  );
}

export default Home;
