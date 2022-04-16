import React from "react";

import { NavBarPropTypes } from "../../interfaces";

function NavButtons({ inMenu }: NavBarPropTypes) {
  /* conditional styling */
  const navButtonsClassName = inMenu ? "NavButtons" : "NavButtons ml--10";

  return (
    <div className={navButtonsClassName} id="nav-buttons">
      <button className="LinkBtn" id="customers-area-btn" type="button">
        <a href="https://">Customer&apos;s area</a>
      </button>

      <button className="Button" id="demonstration-btn" type="button">
        Demonstration
      </button>
    </div>
  );
}

export default NavButtons;
