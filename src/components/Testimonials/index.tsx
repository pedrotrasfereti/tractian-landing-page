import React from "react";

/* Assets */
import assets from "./assets";

/* Children */
import Slider from "./Slider";

/* Styles */
import styles from "./styles.module.css";

function Testimonials() {
  return (
    <section className={styles.Testimonials}>
      <div className={styles.Wrapper}>
        <div className={styles.Badges}>
          {assets.badges.map((badge) => (
            <div className={styles.BadgeImageWrapper}>
              <img src={badge} alt={badge} className={styles.Image} />
            </div>
          ))}
        </div>

        <h2 className={styles.Heading}>What our customers say about us:</h2>
      </div>

      <Slider />
    </section>
  );
}

export default Testimonials;
