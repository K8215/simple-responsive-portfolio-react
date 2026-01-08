export default function Nav({ handleMenuToggle }) {
  return (
    <nav className="nav" onClick={handleMenuToggle}>
      <ul className="nav__ul" id="js-nav">
        <li className="nav__li">
          <a className="nav__a" href="#about">
            About
          </a>
        </li>
        <li className="nav__li">
          <a className="nav__a" href="#work">
            Work
          </a>
        </li>
        <li className="nav__li">
          <a className="nav__a" href="#skills">
            Skills{" "}
          </a>
        </li>
        <li className="nav__li">
          <a className="nav__a" href="#experience">
            Experience
          </a>
        </li>
      </ul>
    </nav>
  );
}
