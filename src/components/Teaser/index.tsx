import React, { useEffect, useRef, useState } from "react";

/* Children */
import Carousel from "./Carousel";

/* Styles */
import styles from "./styles.module.css";

/* Data */
import contentSlideData from "./data/contentSlideData";

function Teaser() {
  const [slide, setSlide] = useState(contentSlideData.sensor);
  const [selectedControl, setSelectedControl] = useState<string>("sensor");

  const sliderRef = useRef<HTMLSpanElement>(null);

  /* conditional styling */
  const getControlClassName = (controlName: string) => {
    return controlName === selectedControl
      ? `${styles.Control} ${styles.Selected}`
      : `${styles.Control}`;
  };

  const getIndicatorClassName = (indicator: string) => {
    return indicator === selectedControl
      ? `${styles.Indicator} ${styles.Active}`
      : `${styles.Indicator}`;
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
    <section className={styles.Teaser} id="teaser-section">
      <div className={styles.Wrapper}>
        <span className={styles.Title}>Trusted by 1,000+ companies</span>
        <Carousel />
      </div>
      <div className={styles.ContentWrapper}>
        <div className={styles.Headings}>
          <h2>Effortless Predictive Maintainence</h2>
          <h3>
            Keep your team and machines{" "}
            <strong>performing at their best</strong>
          </h3>
        </div>

        <div className={styles.Controls}>
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
          <span className={styles.Slider} ref={sliderRef} />
        </div>

        <div className={styles.Container}>
          <div className={styles.ContentSlide}>
            <div className={styles.ImageWrapper}>
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className={styles.Image}
              />
            </div>

            <div className={styles.Wrapper}>
              <h4 className={styles.Title}>{slide.title}</h4>

              <p className={styles.Description}>{slide.description}</p>

              <button className={`${styles.Button} Button`} type="button">
                Schedule a demo
              </button>

              <div className={styles.Indicators}>
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
