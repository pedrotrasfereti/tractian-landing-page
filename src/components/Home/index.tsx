import React from "react";

/* Assets */
import Illustration from "./assets/illustration.png";

/* Styles */
import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.Home} id="home">
      <div className={styles.RowContainer}>
        <div className={styles.ColumnContainer} id="heading-container">
          <h1 className={styles.Title} id="title">
            Online Monitoring and Asset Management in One Place
          </h1>
          <h4 className={styles.Subtitle} id="subtitle">
            Avoid failures in your machines and make downtime a thing of the
            past with TRACTIAN&apos;s predictive system.
          </h4>
          <button className="Button" id="schedule-demo-btn" type="button">
            Schedule a demo
          </button>
          <p className={styles.LinkParagraph}>
            Already a customer?
            <span> </span>
            <a href="http://">Access here.</a>
          </p>
        </div>

        <img
          className={styles.Illustration}
          src={Illustration}
          alt="Illustration"
        />
      </div>

      <section className={styles.Waves} id="bg-waves">
        <div className={`${styles.Wave} ${styles.Wave1}`} />
        <div className={`${styles.Wave} ${styles.Wave2}`} />
        <div className={`${styles.Wave} ${styles.Wave3}`} />
      </section>
    </div>
  );
}

export default Home;
