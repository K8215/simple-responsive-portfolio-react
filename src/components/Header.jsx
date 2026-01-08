import { React, useState, useEffect } from "react";
import Nav from "./Nav";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);
  //Store default classes for the hamburger menu so they don't have to be written twice.
  const togglerClasses = "menu-toggler hamburger hamburger--squeeze";

  //Mobile nav toggle
  const handleMenuToggle = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  //Fix header on scroll
  const handleFixedNav = () => {
    if (window.scrollY >= 100) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFixedNav);
  }, [fixedNav]);

  return (
    <header
      id="js-header"
      className={`header ${menu ? "js-open" : ""} ${
        fixedNav ? "js-scrolled" : ""
      }`}
    >
      <div className="header__logo">
        <a className="header__link" href="#top" aria-label="Return home">
          Logo
        </a>
      </div>

      <button
        id="js-menu-toggle"
        className={menu ? `${togglerClasses} is-active` : togglerClasses}
        type="button"
        aria-label="open navigation menu"
        onClick={handleMenuToggle}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <Nav handleMenuToggle={handleMenuToggle} />
    </header>
  );
}
