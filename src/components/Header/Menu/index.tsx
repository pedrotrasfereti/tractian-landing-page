import React from "react";

/* Children */
import NavBar from "../NavBar";

/* Styles */
import styles from "../styles.module.css";

/* Types */
import { MenuPropTypes } from "../../../interfaces";

function Menu({ menuActive }: MenuPropTypes) {
  /* conditional styling */
  const menuClassName = menuActive
    ? `${styles.HamburgerMenu}`
    : `${styles.HamburgerMenu} hidden`;

  return (
    <div className={menuClassName}>
      <NavBar inMenu />
    </div>
  );
}

export default Menu;
