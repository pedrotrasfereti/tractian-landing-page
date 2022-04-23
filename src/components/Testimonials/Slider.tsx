import React, { useState } from "react";
import { v4 } from "uuid";

/* Assets */
import { ArrowLeft, ArrowRight } from "./assets";

/* Children */
import SocialProof from "./SocialProof";

/* Data */
import socialProofs from "./data";

/* Styles */
import styles from "./styles.module.css";

/* Types */
import ISocialProof from "../../interfaces/SocialProof";

function Slider() {
  const [slides, setSlides] = useState<ISocialProof[]>(socialProofs);

  const handleClick = (reverse: boolean) => {
    const updated = slides.slice();

    if (reverse) updated.unshift(updated.pop() as ISocialProof);
    else updated.push(updated.shift() as ISocialProof);

    setSlides(updated);
  };

  return (
    <div className={styles.Slider}>
      {/* Track */}
      <div className={styles.Track}>
        {slides.map((s) => (
          <SocialProof key={v4()} author={s.author} quote={s.quote} />
        ))}
      </div>

      {/* Slider Buttons */}
      <button
        id="btn-backward"
        type="button"
        className={`${styles.Button} ${styles.FloatLeft}`}
        onClick={() => handleClick(true)}
      >
        <ArrowLeft />
      </button>

      <button
        id="btn-foward"
        type="button"
        className={`${styles.Button} ${styles.FloatRight}`}
        onClick={() => handleClick(false)}
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default Slider;
