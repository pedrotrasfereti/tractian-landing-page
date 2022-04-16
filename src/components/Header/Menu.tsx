import React from "react";

import { MenuPropTypes } from "../../interfaces";

import NavBar from "../NavBar";

function Menu({ menuActive }: MenuPropTypes) {
  /* conditional styling */
  const menuClassName = menuActive ? "HamburgerMenu" : "HamburgerMenu hidden";

  return (
    <div className={menuClassName}>
      <NavBar inMenu />
    </div>
  );
}

export default Menu;
