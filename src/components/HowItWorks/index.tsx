import React, { useState } from "react";

/* Styles */
import "./styles.css";

function HowItWorks() {
  const [selectedControl, setSelectedControl] = useState("om");

  const getClassName = (controlName: string) => {
    return controlName === selectedControl ? "SwitchBtn Active" : "SwitchBtn";
  };

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
            className={getClassName("om")}
            onClick={() => setSelectedControl("om")}
          >
            Online Monitoring
          </button>
          <button
            type="button"
            className={getClassName("am")}
            onClick={() => setSelectedControl("am")}
          >
            Asset Management
          </button>
        </div>
      </div>

      <div className="ContentWrapper">
        <ul className="Steps">
          <li className="Step">
            <div className="Container">
              <div className="Number">1</div>
              <div className="Content">
                <h3 className="Title">A</h3>
                <p className="Description">B</p>
              </div>
            </div>
          </li>
          <li className="Step">
            <div className="Container">
              <div className="Number">2</div>
              <div className="Content">
                <h3 className="Title">C</h3>
                <p className="Description">D</p>
              </div>
            </div>
          </li>
          <li className="Step">
            <div className="Container">
              <div className="Number">3</div>
              <div className="Content">
                <h3 className="Title">E</h3>
                <p className="Description">F</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="ImageContainer">
          <img src="" alt="" className="Image" />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
