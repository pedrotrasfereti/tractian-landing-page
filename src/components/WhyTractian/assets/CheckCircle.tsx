import React from "react";

/* Styles */
import styles from "../styles.module.css";

function CheckCircle() {
  return (
    <svg
      className={styles.CheckIcon}
      width={17}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={8.5} cy={8.5} r={7.75} stroke="#03D8A9" strokeWidth={1.5} />
      <path
        d="m4.9 9.238 2.584 2.08m4.604-5.668L7.55 11.334"
        stroke="#03D8A9"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CheckCircle;
