import React from "react";

/* Styles */
import styles from "../styles.module.css";

/* Types */
import { NavBarChildPropTypes } from "../../../interfaces";

function SelectLanguage({ inMenu }: NavBarChildPropTypes) {
  return inMenu ? (
    <div className={styles.RadioOuterContainer} id="language-select">
      <div className={styles.RadioInnerContainer}>
        <input
          id="english-option"
          name="language-radio"
          type="radio"
          value="en"
          defaultChecked
        />
        <label htmlFor="english-option">πΊπΈ EN</label>
      </div>

      <div className={styles.RadioInnerContainer}>
        <input
          id="portuguese-option"
          name="language-radio"
          type="radio"
          value="pt"
        />
        <label htmlFor="portuguese-option">π§π· PT</label>
      </div>

      <div className={styles.RadioInnerContainer}>
        <input
          id="spanish-option"
          name="language-radio"
          type="radio"
          value="es"
        />
        <label htmlFor="spanish-option">π²π½ ES</label>
      </div>
    </div>
  ) : (
    <select className={styles.Select} id="language-select" name="language">
      <option id="english-option" value="en">
        πΊπΈ EN
      </option>
      <option id="portuguese-option" value="pt">
        π§π· PT
      </option>
      <option id="spanish-option" value="es">
        π²π½ ES
      </option>
    </select>
  );
}

export default SelectLanguage;
