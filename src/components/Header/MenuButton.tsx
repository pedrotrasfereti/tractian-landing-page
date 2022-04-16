import React from "react";
import { MenuButtonPropTypes } from "../../interfaces";

function MenuButton({ menuActive, toggleMenu }: MenuButtonPropTypes) {
  const menuBtnClassName = menuActive
    ? "MenuButton MenuBtnActive"
    : "MenuButton";

  const lineClassName = menuActive ? "Line LineDark" : "Line";

  return (
    <button
      className={menuBtnClassName}
      id="toggle-menu-button"
      onClick={toggleMenu}
      type="button"
    >
      <span className={lineClassName} />
      <span className={lineClassName} />
      <span className={lineClassName} />
    </button>
  );
}

export default MenuButton;
