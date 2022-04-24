import React from "react";

/* Assets */
import { CMMSPresentation, PlatformTabletMobile } from "./assets";

/* Styles */
import styles from "./styles.module.css";

function Products() {
  return (
    <section id="products-section" className={styles.Products}>
      <div id="trac-os" className={`${styles.Product} ${styles.TrackOS}`}>
        <h2 className={styles.Title}>Maintenance Software TracOS™</h2>
        <div className={styles.ImageWrapper}>
          <img
            src={CMMSPresentation}
            alt="Sensor and Tractian's online platform"
            className={styles.Image}
          />
        </div>
        <p className={styles.Description}>
          The revolutionary CMMS for planning, tracking metrics, and connecting
          with your team.
        </p>
        <button type="button" className="ButtonAlt">
          See More
        </button>
      </div>

      <div id="smart-trac" className={`${styles.Product} ${styles.SmartTrac}`}>
        <h2 className={styles.Title}>Online Monitoring Smart Trac</h2>
        <div className={styles.ImageWrapper}>
          <img
            src={PlatformTabletMobile}
            alt="Tablet and mobile displays of Tractian's online platform"
            className={styles.Image}
          />
        </div>
        <p className={styles.Description}>
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
