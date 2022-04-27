import React, { FormEvent } from "react";

/* Styles */
import styles from "./styles.module.css";

function RequestADemo() {
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="request-a-demo" className={styles.RequestADemo}>
      <h2 className={styles.Title}>Improve your maintenance processes</h2>
      <h3 className={styles.Subtitle}>Request a demo to understand more!</h3>

      <form id="request-a-demo-form" className={styles.Form}>
        {/* Personal Information */}
        <fieldset id="personal-information" className={styles.Fieldset}>
          <div className={styles.InputWrapper}>
            <label htmlFor="input-name">Name</label>
            <input
              id="input-name"
              type="text"
              className="Input"
              placeholder="Your name here"
            />
          </div>

          <div className={styles.InputWrapper}>
            <label htmlFor="input-name">Job Title</label>
            <input
              id="input-name"
              type="text"
              className="Input"
              placeholder="Your Title here"
            />
          </div>

          <div className={styles.RowContainer}>
            <div className={styles.InputWrapper}>
              <label htmlFor="input-name">Corporate Email</label>
              <input
                id="input-name"
                type="email"
                className="Input"
                placeholder="Your corporate email"
              />
            </div>

            <div className={styles.InputWrapper}>
              <label htmlFor="input-name">Phone Number</label>
              <input
                id="input-name"
                type="tel"
                className="Input"
                placeholder="+1"
              />
            </div>
          </div>
        </fieldset>

        {/* Choose Solution */}
        <fieldset id="product" className={styles.Fieldset}>
          <legend className={styles.Legend}>
            What interested you most about our solutions?
          </legend>

          <div className={styles.RadioInputWrapper}>
            <input
              type="radio"
              id="monitoring-sensors"
              name="product"
              value="monitoring-sensors"
              className={styles.Radio}
            />
            <label htmlFor="monitoring-sensors" className={styles.Label}>
              Real Time Monitoring and IoT Sensors
            </label>
          </div>

          <div className={styles.RadioInputWrapper}>
            <input
              type="radio"
              id="cmms-eam"
              name="product"
              value="cmms-eam"
              className={styles.Radio}
            />
            <label htmlFor="cmms-eam" className={styles.Label}>
              CMMS &#38; EAM
            </label>
          </div>

          <div className={styles.RadioInputWrapper}>
            <input
              type="radio"
              id="all-solutions"
              name="product"
              value="monitoring-sensors"
              className={styles.Radio}
            />
            <label htmlFor="all-solutions" className={styles.Label}>
              All Solutions
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className={`${styles.Button} Button`}
          onClick={(evt) => handleClick(evt)}
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default RequestADemo;
