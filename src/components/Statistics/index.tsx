import React from "react";

/* Styles */
import "./styles.css";

function Statistics() {
  return (
    <section id="statistics" className="Statistics">
      <span className="Decoration" />

      <div className="Container">
        <h2 className="Heading">
          Better machine performance for better maintenance teams&apos;
          productivity
        </h2>

        <div className="ContentWrapper">
          <div className="Statistic">
            <h5 className="Title">90%</h5>
            <p className="Subtitle">
              Assertiveness of Insights generated by Tractian platform
            </p>
          </div>
          <div className="Statistic">
            <h5 className="Title">45%</h5>
            <p className="Subtitle">
              Increased reliability of machines with Tractian Solution
            </p>
          </div>
          <div className="Statistic">
            <h5 className="Title">30%</h5>
            <p className="Subtitle">
              Reduction of last-minute maintenance occurrences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
