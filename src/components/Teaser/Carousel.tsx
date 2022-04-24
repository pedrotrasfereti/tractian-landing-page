import React from "react";

/* Styles */
import styles from "./styles.module.css";

/* Children */
import Slides from "./Slides";

function Carousel() {
  return (
    <div className={styles.Carousel}>
      <div className={styles.Track}>
        <Slides />

        {/* doubled */}
        <Slides />
      </div>
    </div>
  );
}

export default Carousel;
