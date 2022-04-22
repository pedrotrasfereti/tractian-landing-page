import React from "react";
import { v4 } from "uuid";

/* Children */
import SocialProof from "./SocialProof";

/* Data */
import socialProofs from "./data";

/* Styles */
import styles from "./styles.module.css";

function Testimonials() {
  return (
    <section className={styles.Testimonials}>
      <h2 className={styles.Heading}>What our customers say about us:</h2>

      <div className={styles.SocialProofs}>
        {socialProofs.map((s) => (
          <SocialProof key={v4()} author={s.author} quote={s.quote} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
