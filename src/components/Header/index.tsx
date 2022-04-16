import React, { useState } from "react";

/* Children */
import Logo from "./assets/Logo";
import NavBar from "../NavBar";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

/* Styles */
import "./styles.css";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  const headerClassName = menuActive ? "Header light--bg" : "Header";
  const logoFillColor = menuActive ? "#08084C" : "#fff";

  return (
    <header className={headerClassName}>
      <Logo fillColor={logoFillColor} />
      <NavBar />
      <MenuButton menuActive={menuActive} toggleMenu={toggleMenu} />
      <Menu menuActive={menuActive} />
    </header>
  );
}

export default Header;
