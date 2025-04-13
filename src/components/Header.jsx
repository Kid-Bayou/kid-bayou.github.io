function Header({ activeSection }) {
  return (
    <header className="sticky">
      <nav className="header-nav">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "nav-link active" : "nav-link"}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
