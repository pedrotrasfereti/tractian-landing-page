import React from "react";

/* Assets */
import {
  AirLiquideLogo,
  ArcelorMittalLogo,
  BoschLogo,
  DanoneLogo,
  ElectroluxLogo,
  EmbraerLogo,
  KärcherLogo,
} from "./assets";

/* Styles */
import styles from "./styles.module.css";

function Slides() {
  return (
    <>
      <div className={styles.Slide}>
        <img
          src={AirLiquideLogo}
          alt="Air Liquide logo"
          className={`${styles.CompanyLogo} ${styles.Shorter}`}
        />
      </div>
      <div className={styles.Slide}>
        <img
          src={ArcelorMittalLogo}
          alt="Arcelor Mittal logo"
          className={styles.CompanyLogo}
        />
      </div>
      <div className={styles.Slide}>
        <img
          src={BoschLogo}
          alt="Bosch logo"
          className={`${styles.CompanyLogo} ${styles.Shorter}`}
        />
      </div>
      <div className={styles.Slide}>
        <img
          src={DanoneLogo}
          alt="Danone logo"
          className={styles.CompanyLogo}
        />
      </div>
      <div className={styles.Slide}>
        <img
          src={ElectroluxLogo}
          alt="Electrolux logo"
          className={`${styles.CompanyLogo} ${styles.Shorter}`}
        />
      </div>
      <div className={styles.Slide}>
        <img
          src={EmbraerLogo}
          alt="Embraer logo"
          className={styles.CompanyLogo}
        />
      </div>
      <div className={styles.Slide}>
        <img
          src={KärcherLogo}
          alt="Kärcher logo"
          className={`${styles.CompanyLogo} ${styles.Taller}`}
        />
      </div>
    </>
  );
}

export default Slides;
