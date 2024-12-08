import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">

        <nav className="header-center-nav-container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>

      </header>
    </>
  );
}

export default Header;