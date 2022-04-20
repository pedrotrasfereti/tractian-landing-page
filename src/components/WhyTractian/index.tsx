import React from "react";

/* Assets */
import CheckCircle from "./assets/CheckCircle";

/* Styles */
import "./styles.css";

function WhyTractian() {
  return (
    <section id="why-tractian" className="WhyTractian">
      <h2 className="Heading">Why Tractian?</h2>

      <div className="Container">
        <div className="Card">
          <h3 className="Title">
            <CheckCircle />
            Predictive Maintenance
          </h3>
          <p className="Paragraph">
            Automatic fault detection, real-time asset health, reliability
            percentage and automatic insights.
          </p>
        </div>

        <div className="Card">
          <h3 className="Title">
            <CheckCircle />
            Online Monitoring
          </h3>
          <p className="Paragraph">
            Tractian sensor collects vibration, temperature, hour meter and
            energy consumption data in real time.
          </p>
        </div>

        <div className="Card">
          <h3 className="Title">
            <CheckCircle />
            Instant Setup
          </h3>
          <p className="Paragraph">
            Plug &#38; Play solution, forget about gateways or routers,
            communication via independent 2G / 3G network.
          </p>
        </div>

        <div className="Card">
          <h3 className="Title">
            <CheckCircle />
            Integrated CMMS
          </h3>
          <p className="Paragraph">
            Automate processes, work orders, and have total control over your
            assets and staff.
          </p>
        </div>
      </div>

      <button type="button" className="Button">
        Get Started!
      </button>
    </section>
  );
}

export default WhyTractian;
