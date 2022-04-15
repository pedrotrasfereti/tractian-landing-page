import React from "react";

/* Children */
import Logo from "./assets/Logo";
import NavBar from "./NavBar";

/* Styles */
import "./index.css";

function Header() {
  return (
    <header className="Header">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
