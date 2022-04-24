import React from "react";

/* Styles */
import styles from "../styles.module.css";

/* Types */
import { MenuButtonPropTypes } from "../../../interfaces";

function MenuButton({
  menuActive,
  headerChange,
  toggleMenu,
}: MenuButtonPropTypes) {
  const menuBtnClassName = menuActive
    ? `${styles.MenuButton} ${styles.MenuBtnActive}`
    : `${styles.MenuButton}`;

  const lineClassName =
    menuActive || headerChange
      ? `${styles.Line} ${styles.LineDark}`
      : `${styles.Line}`;

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
