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

function Slides() {
  return (
    <>
      <div className="Slide">
        <img
          src={AirLiquideLogo}
          alt="Air Liquide logo"
          className="CompanyLogo Shorter"
        />
      </div>
      <div className="Slide">
        <img
          src={ArcelorMittalLogo}
          alt="Arcelor Mittal logo"
          className="CompanyLogo"
        />
      </div>
      <div className="Slide">
        <img src={BoschLogo} alt="Bosch logo" className="CompanyLogo Shorter" />
      </div>
      <div className="Slide">
        <img src={DanoneLogo} alt="Danone logo" className="CompanyLogo" />
      </div>
      <div className="Slide">
        <img
          src={ElectroluxLogo}
          alt="Electrolux logo"
          className="CompanyLogo Shorter"
        />
      </div>
      <div className="Slide">
        <img src={EmbraerLogo} alt="Embraer logo" className="CompanyLogo" />
      </div>
      <div className="Slide">
        <img
          src={KärcherLogo}
          alt="Kärcher logo"
          className="CompanyLogo Taller"
        />
      </div>
    </>
  );
}

export default Slides;
