import React from "react";

/* Children */
import Arrow from "./assets/Arrow";

function NavBar() {
  return (
    <nav className="NavBar" id="navbar">
      <ul className="NavBarList" id="navbar-list">
        <li className="NavBarItem" id="solutions">
          <button className="DropdownBtn" id="solutions-btn" type="button">
            Solutions <Arrow />
          </button>
        </li>
        <li className="NavBarItem" id="about">
          <button className="DropdownBtn" id="about-btn" type="button">
            About Us <Arrow />
          </button>
        </li>
        <li className="NavBarItem" id="resources">
          <button className="DropdownBtn" id="resources-btn" type="button">
            Resources <Arrow />
          </button>
        </li>
        <li className="NavBarItem" id="blog">
          <button className="LinkBtn" id="customers-area" type="button">
            <a href="https://">Blog</a>
          </button>
        </li>
      </ul>

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

      <button className="LinkBtn" id="customers-area-btn" type="button">
        <a href="https://">Customer&apos;s area</a>
      </button>

      <button className="Button" id="demonstration-btn" type="button">
        Demonstration
      </button>
    </nav>
  );
}

export default NavBar;
