import React, { useEffect, useRef, useState } from "react";

/* Assets */
// import { Motor, MotorTablet, PlatformScreen } from "./assets";

/* Children */
import Carousel from "./Carousel";

/* Styles */
import "./styles.css";

function Teaser() {
  const [selectedControl, setSelectedControl] = useState<string>("sensor");

  const sliderRef = useRef<HTMLSpanElement>(null);

  /* conditional styling */
  const getClassName = (controlName: string) => {
    return selectedControl === controlName ? "Control Selected" : "Control";
  };

  useEffect(() => {
    const leftOffsetMap = {
      sensor: "0",
      om: "calc(100% / 3)",
      am: "calc(100% / 3 * 2)",
    };

    if (sliderRef.current) {
      sliderRef.current.style.left =
        leftOffsetMap[selectedControl as keyof typeof leftOffsetMap];
    }
  }, [selectedControl]);

  return (
    <section className="Teaser" id="teaser-section">
      <div className="Wrapper">
        <span className="Title">Trusted by 1,000+ companies</span>
        <Carousel />
      </div>
      <div className="ContentWrapper">
        <div className="Headings">
          <h3>Effortless Predictive Maintainence</h3>
          <h2>
            Keep your team and machines{" "}
            <strong>performing at their best</strong>
          </h2>
        </div>

        <div className="Controls">
          <button
            className={getClassName("sensor")}
            type="button"
            onClick={() => setSelectedControl("sensor")}
          >
            Plug &#38; Play Sensor
          </button>
          <button
            className={getClassName("om")}
            type="button"
            onClick={() => setSelectedControl("om")}
          >
            Online Monitoring
          </button>
          <button
            className={getClassName("am")}
            type="button"
            onClick={() => setSelectedControl("am")}
          >
            Asset Management
          </button>
          <span className="Slider" ref={sliderRef} />
        </div>

        <div className="Container" />
      </div>
    </section>
  );
}

export default Teaser;
