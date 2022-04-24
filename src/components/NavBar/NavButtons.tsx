import React from "react";

/* Styles */
import styles from "../Header/styles.module.css";

/* Types */
import { NavBarChildPropTypes } from "../../interfaces";

function NavButtons({ inMenu }: NavBarChildPropTypes) {
  /* conditional styling */
  const navButtonsClassName = inMenu
    ? `${styles.NavButtons}`
    : `${styles.NavButtons} ml--10`;

  return (
    <div className={navButtonsClassName} id="nav-buttons">
      <button
        className={`${styles.LinkBtn} LinkBtn`}
        id="customers-area-btn"
        type="button"
      >
        <a href="https://">Customer&apos;s area</a>
      </button>

      <button className="Button" id="demonstration-btn" type="button">
        Demonstration
      </button>
    </div>
  );
}

export default NavButtons;
