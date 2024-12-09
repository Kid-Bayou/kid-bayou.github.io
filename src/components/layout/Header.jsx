import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <header>
          <nav className="header-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </nav>
        </header>
      </header>
    </>
  );
}

export default Header;
