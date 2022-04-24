import React from "react";

/* Assets */
import CheckCircle from "./assets/CheckCircle";

/* Styles */
import styles from "./styles.module.css";

function WhyTractian() {
  return (
    <section id="why-tractian" className={styles.WhyTractian}>
      <h2 className={styles.Heading}>Why Tractian?</h2>

      <div className={styles.Container}>
        <div className={styles.Card}>
          <h3 className={styles.Title}>
            <CheckCircle />
            Predictive Maintenance
          </h3>
          <p className={styles.Paragraph}>
            Automatic fault detection, real-time asset health, reliability
            percentage and automatic insights.
          </p>
        </div>

        <div className={styles.Card}>
          <h3 className={styles.Title}>
            <CheckCircle />
            Online Monitoring
          </h3>
          <p className={styles.Paragraph}>
            Tractian sensor collects vibration, temperature, hour meter and
            energy consumption data in real time.
          </p>
        </div>

        <div className={styles.Card}>
          <h3 className={styles.Title}>
            <CheckCircle />
            Instant Setup
          </h3>
          <p className={styles.Paragraph}>
            Plug &#38; Play solution, forget about gateways or routers,
            communication via independent 2G / 3G network.
          </p>
        </div>

        <div className={styles.Card}>
          <h3 className={styles.Title}>
            <CheckCircle />
            Integrated CMMS
          </h3>
          <p className={styles.Paragraph}>
            Automate processes, work orders, and have total control over your
            assets and staff.
          </p>
        </div>
      </div>

      <button type="button" className={`${styles.Button} Button`}>
        Get Started!
      </button>
    </section>
  );
}

export default WhyTractian;
