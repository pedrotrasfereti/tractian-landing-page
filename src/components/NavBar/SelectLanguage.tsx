import React from "react";

import { NavBarPropTypes } from "../../interfaces";

function SelectLanguage({ inMenu }: NavBarPropTypes) {
  return inMenu ? (
    <div className="RadioOuterContainer" id="language-select">
      <div className="RadioInnerContainer">
        <input
          id="english-option"
          name="language-radio"
          type="radio"
          value="en"
          defaultChecked
        />
        <label htmlFor="english-option">🇺🇸 EN</label>
      </div>

      <div className="RadioInnerContainer">
        <input
          id="portuguese-option"
          name="language-radio"
          type="radio"
          value="pt"
        />
        <label htmlFor="portuguese-option">🇧🇷 PT</label>
      </div>

      <div className="RadioInnerContainer">
        <input
          id="spanish-option"
          name="language-radio"
          type="radio"
          value="es"
        />
        <label htmlFor="spanish-option">🇲🇽 ES</label>
      </div>
    </div>
  ) : (
    <select className="Select" id="language-select" name="language">
      <option id="english-option" value="en">
        🇺🇸 EN
      </option>
      <option id="portuguese-option" value="pt">
        🇧🇷 PT
      </option>
      <option id="spanish-option" value="es">
        🇲🇽 ES
      </option>
    </select>
  );
}

export default SelectLanguage;
