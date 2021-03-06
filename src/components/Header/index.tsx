import React, { useState, useEffect } from "react";

/* Assets */
import Logo from "../../assets/Logo";

/* Children */
import NavBar from "./NavBar";
import MenuButton from "./Menu/MenuButton";
import Menu from "./Menu";

/* Styles */
import styles from "./styles.module.css";

function Header() {
  const [headerChange, setHeaderChange] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  const handleScroll = () => {
    if (window.scrollY > 45) {
      setHeaderChange(true);
    } else {
      setHeaderChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* conditional styling */
  const headerClassName =
    headerChange || menuActive
      ? `${styles.Header} ${styles.HeaderWhite}`
      : `${styles.Header}`;

  const logoFillColor = headerChange || menuActive ? "#08084C" : "#fff";

  return (
    <header className={headerClassName}>
      <Logo className={styles.Logo} fillColor={logoFillColor} />
      <NavBar headerChange={headerChange} />
      <MenuButton
        menuActive={menuActive}
        headerChange={headerChange}
        toggleMenu={toggleMenu}
      />
      <Menu menuActive={menuActive} />
    </header>
  );
}

export default Header;
