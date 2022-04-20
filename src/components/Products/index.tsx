import React from "react";

/* Assets */
import { CMMSPresentation, PlatformTabletMobile } from "./assets";

/* Styles */
import "./styles.css";

function Products() {
  return (
    <section id="products-section" className="Products">
      <div id="trac-os" className="Product TrackOS">
        <h2 className="Title">Maintenance Software TracOS™</h2>
        <div className="ImageWrapper">
          <img
            src={CMMSPresentation}
            alt="Sensor and Tractian's online platform"
            className="Image"
          />
        </div>
        <p className="Description">
          The revolutionary CMMS for planning, tracking metrics, and connecting
          with your team.
        </p>
        <button type="button" className="ButtonAlt">
          See More
        </button>
      </div>
      <div id="smart-trac" className="Product SmartTrac">
        <h2 className="Title">Online Monitoring Smart Trac</h2>
        <div className="ImageWrapper">
          <img
            src={PlatformTabletMobile}
            alt="Tablet and mobile displays of Tractian's online platform"
            className="Image"
          />
        </div>
        <p className="Description">
          The most complete predictive system on the market. Monitor your assets
          vibration, temperature and hour meter.
        </p>
        <button type="button" className="ButtonAltDark">
          See More
        </button>
      </div>
    </section>
  );
}

export default Products;
