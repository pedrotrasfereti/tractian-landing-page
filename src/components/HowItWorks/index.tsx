import React, { useState, useEffect } from "react";

/* Styles */
import "./styles.css";

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
    return step === selectedStep ? "Step Active" : "Step";
  };

  const { image } = content.steps[Number(selectedStep) - 1];

  useEffect(() => {
    /* switch content data */
    setContent(data[selectedControl as keyof typeof data]);

    /* set selected step */
    setSelectedStep("1");
  }, [selectedControl]);

  return (
    <section id="how-it-works" className="HowItWorks">
      <div className="Wrapper">
        <h2 className="Title">How It Works?</h2>
        <h3 className="Subtitle">
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

      <div className="ContentWrapper">
        <ul className="Steps">
          <li className={getStepClassName("1")}>
            <button type="button" onClick={() => setSelectedStep("1")}>
              <div className="Number">1</div>
              <div className="Content">
                <h3 className="Title">{content.steps[0].title}</h3>
                <p className="Description">{content.steps[0].description}</p>
              </div>
            </button>
          </li>
          <li className={getStepClassName("2")}>
            <button type="button" onClick={() => setSelectedStep("2")}>
              <div className="Number">2</div>
              <div className="Content">
                <h3 className="Title">{content.steps[1].title}</h3>
                <p className="Description">{content.steps[1].description}</p>
              </div>
            </button>
          </li>
          <li className={getStepClassName("3")}>
            <button type="button" onClick={() => setSelectedStep("3")}>
              <div className="Number">3</div>
              <div className="Content">
                <h3 className="Title">{content.steps[2].title}</h3>
                <p className="Description">{content.steps[2].description}</p>
              </div>
            </button>
          </li>
        </ul>

        <div className="ImageContainer">
          <img src={image} alt="" className="Image" />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
