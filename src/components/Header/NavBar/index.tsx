import React from "react";

/* Children */
import Arrow from "../assets/Arrow";
import NavButtons from "./NavButtons";
import SelectLanguage from "./SelectLanguage";

/* Styles */
import styles from "../styles.module.css";

/* Types */
import { NavBarPropTypes } from "../../../interfaces";

function NavBar({ headerChange, inMenu }: NavBarPropTypes) {
  /* conditional styling */
  const navBarClassName = inMenu
    ? `${styles.NavBar} ${styles.MenuNavBar}`
    : `${styles.NavBar}`;

  const navBarListClassName = inMenu
    ? `${styles.NavBarList} ${styles.MenuNavBar}`
    : `${styles.NavBarList}`;

  const arrowFillColor = headerChange || inMenu ? "#07074E" : "#fff";

  return (
    <nav className={navBarClassName} id="navbar">
      <ul className={navBarListClassName} id="navbar-list">
        <li className={styles.NavBarItem} id="solutions">
          <button
            className={styles.DropdownBtn}
            id="solutions-btn"
            type="button"
          >
            Solutions <Arrow fillColor={arrowFillColor} />
          </button>
        </li>
        <li className={styles.NavBarItem} id="about-us">
          <button className={styles.DropdownBtn} id="about-btn" type="button">
            About Us <Arrow fillColor={arrowFillColor} />
          </button>
        </li>
        <li className={styles.NavBarItem} id="resources">
          <button
            className={styles.DropdownBtn}
            id="resources-btn"
            type="button"
          >
            Resources <Arrow fillColor={arrowFillColor} />
          </button>
        </li>
        <li className={styles.NavBarItem} id="blog">
          <button
            className={`${styles.LinkBtn} LinkBtn`}
            id="customers-area"
            type="button"
          >
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
