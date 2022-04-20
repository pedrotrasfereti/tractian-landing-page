import React, { useEffect, useRef, useState } from "react";

/* Children */
import Carousel from "./Carousel";

/* Styles */
import "./styles.css";

/* Data */
import contentSlideData from "./data/contentSlideData";

function Teaser() {
  const [slide, setSlide] = useState(contentSlideData.sensor);
  const [selectedControl, setSelectedControl] = useState<string>("sensor");

  const sliderRef = useRef<HTMLSpanElement>(null);

  /* conditional styling */
  const getControlClassName = (controlName: string) => {
    return controlName === selectedControl ? "Control Selected" : "Control";
  };

  const getIndicatorClassName = (indicator: string) => {
    return indicator === selectedControl ? "Indicator Active" : "Indicator";
  };

  useEffect(() => {
    /* hydrate slide */
    setSlide(
      contentSlideData[selectedControl as keyof typeof contentSlideData]
    );

    /* slider style */
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
          <h2>Effortless Predictive Maintainence</h2>
          <h3>
            Keep your team and machines{" "}
            <strong>performing at their best</strong>
          </h3>
        </div>

        <div className="Controls">
          <button
            className={getControlClassName("sensor")}
            type="button"
            onClick={() => setSelectedControl("sensor")}
          >
            Plug &#38; Play Sensor
          </button>
          <button
            className={getControlClassName("om")}
            type="button"
            onClick={() => setSelectedControl("om")}
          >
            Online Monitoring
          </button>
          <button
            className={getControlClassName("am")}
            type="button"
            onClick={() => setSelectedControl("am")}
          >
            Asset Management
          </button>
          <span className="Slider" ref={sliderRef} />
        </div>

        <div className="Container">
          <div className="ContentSlide">
            <div className="ImageWrapper">
              <img src={slide.image} alt={slide.imageAlt} className="Image" />
            </div>

            <div className="Wrapper">
              <h4 className="Title">{slide.title}</h4>

              <p className="Description">{slide.description}</p>

              <button className="Button" type="button">
                Schedule a demo
              </button>

              <div className="Indicators">
                <span className={getIndicatorClassName("sensor")} />
                <span className={getIndicatorClassName("om")} />
                <span className={getIndicatorClassName("am")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teaser;
