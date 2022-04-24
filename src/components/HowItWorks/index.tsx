import React, { useState, useEffect } from "react";

/* Styles */
import styles from "./styles.module.css";

/* Data */
import data from "./data";

/* Types */
interface IStep {
  title: string;
  description: string;
  image: string;
}

interface IContent {
  steps: Array<IStep>;
}

type Control = "om" | "am";
type StepNumber = "1" | "2" | "3";

function HowItWorks() {
  const [selectedControl, setSelectedControl] = useState<Control>("om");
  const [selectedStep, setSelectedStep] = useState<StepNumber>("1");
  const [content, setContent] = useState<IContent>(data.om);

  /* conditional rendering */
  const getControlClassName = (controlName: Control) => {
    return controlName === selectedControl ? "SwitchBtn Active" : "SwitchBtn";
  };

  const getStepClassName = (step: StepNumber) => {
    return step === selectedStep
      ? `${styles.Step} ${styles.Active}`
      : `${styles.Step}`;
  };

  const { image } = content.steps[Number(selectedStep) - 1];

  useEffect(() => {
    /* switch content data */
    setContent(data[selectedControl as keyof typeof data]);

    /* set selected step */
    setSelectedStep("1");
  }, [selectedControl]);

  return (
    <section id="how-it-works" className={styles.HowItWorks}>
      <div className={styles.Wrapper}>
        <h2 className={styles.Title}>How It Works?</h2>
        <h3 className={styles.Subtitle}>
          Combine monitoring and management, take your pick:
        </h3>
        <div className="Switch">
          <button
            type="button"
            className={getControlClassName("om")}
            onClick={() => setSelectedControl("om")}
          >
            Online Monitoring
          </button>
          <button
            type="button"
            className={getControlClassName("am")}
            onClick={() => setSelectedControl("am")}
          >
            Asset Management
          </button>
        </div>
      </div>

      <div className={styles.ContentWrapper}>
        <ul className={styles.Steps}>
          <li className={getStepClassName("1")}>
            <button type="button" onClick={() => setSelectedStep("1")}>
              <div className={styles.Number}>1</div>
              <div className={styles.Content}>
                <h3 className={styles.Title}>{content.steps[0].title}</h3>
                <p className={styles.Description}>
                  {content.steps[0].description}
                </p>
              </div>
            </button>
          </li>
          <li className={getStepClassName("2")}>
            <button type="button" onClick={() => setSelectedStep("2")}>
              <div className={styles.Number}>2</div>
              <div className={styles.Content}>
                <h3 className={styles.Title}>{content.steps[1].title}</h3>
                <p className={styles.Description}>
                  {content.steps[1].description}
                </p>
              </div>
            </button>
          </li>
          <li className={getStepClassName("3")}>
            <button type="button" onClick={() => setSelectedStep("3")}>
              <div className={styles.Number}>3</div>
              <div className={styles.Content}>
                <h3 className={styles.Title}>{content.steps[2].title}</h3>
                <p className={styles.Description}>
                  {content.steps[2].description}
                </p>
              </div>
            </button>
          </li>
        </ul>

        <div className={styles.ImageContainer}>
          <img src={image} alt="" className={styles.Image} />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
