import React from "react";

import { NavBarPropTypes } from "../../interfaces";

/* Children */
import Arrow from "../Header/assets/Arrow";
import NavButtons from "./NavButtons";
import SelectLanguage from "./SelectLanguage";

function NavBar({ headerChange, inMenu }: NavBarPropTypes) {
  /* conditional styling */
  const navBarClassName = inMenu ? "NavBar MenuNavBar" : "NavBar";
  const navBarListClassName = inMenu ? "NavBarList MenuNavBar" : "NavBarList";
  const arrowFillColor = headerChange || inMenu ? "#07074E" : "#fff";

  return (
    <nav className={navBarClassName} id="navbar">
      <ul className={navBarListClassName} id="navbar-list">
        <li className="NavBarItem" id="solutions">
          <button className="DropdownBtn" id="solutions-btn" type="button">
            Solutions <Arrow fillColor={arrowFillColor} />
          </button>
        </li>
        <li className="NavBarItem" id="about-us">
          <button className="DropdownBtn" id="about-btn" type="button">
            About Us <Arrow fillColor={arrowFillColor} />
          </button>
        </li>
        <li className="NavBarItem" id="resources">
          <button className="DropdownBtn" id="resources-btn" type="button">
            Resources <Arrow fillColor={arrowFillColor} />
          </button>
        </li>
        <li className="NavBarItem" id="blog">
          <button className="LinkBtn" id="customers-area" type="button">
            <a href="https://">Blog</a>
          </button>
        </li>
      </ul>

      <SelectLanguage inMenu={inMenu} />

      <NavButtons inMenu={inMenu} />
    </nav>
  );
}

export default NavBar;
