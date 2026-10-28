import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BRAND, industries, navItems } from "../data/siteContent.js";

const advertiserLogin = import.meta.env.VITE_ADVERTISER_LOGIN_URL;
const publisherLogin = import.meta.env.VITE_PUBLISHER_LOGIN_URL;

function Dropdown({ label, children, open, onToggle }) {
  const ref = useRef(null);
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") onToggle(false);
    }
    function onPointerDown(event) {
      if (ref.current && !ref.current.contains(event.target)) onToggle(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [onToggle]);
  return (
    <div className="nav-dropdown" ref={ref}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => onToggle(!open)}
      >
        {label} <span aria-hidden="true">⌄</span>
      </button>
      {open && <div className="dropdown-panel">{children}</div>}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light",
  );
  const toggleDropdown = (name) => (open) => setDropdown(open ? name : "");
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("ringstack-theme", next);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#101916" : "#f7faf8");
  }
  function closeMenu() {
    setMenuOpen(false);
    setDropdown("");
  }
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            R
          </span>
          <span>{BRAND}</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? " open" : ""}`}
          aria-label="Main navigation"
        >
          <Dropdown
            label="Industries"
            open={dropdown === "industries"}
            onToggle={toggleDropdown("industries")}
          >
            {industries.map((item) => (
              <Link
                key={item.slug}
                to={`/industries/${item.slug}`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/industries" onClick={closeMenu}>
              All industries
            </Link>
          </Dropdown>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
          {(advertiserLogin || publisherLogin) && (
            <Dropdown
              label="Login"
              open={dropdown === "login"}
              onToggle={toggleDropdown("login")}
            >
              {advertiserLogin && (
                <a href={advertiserLogin} target="_blank" rel="noreferrer">
                  Advertiser login
                </a>
              )}
              {publisherLogin && (
                <a href={publisherLogin} target="_blank" rel="noreferrer">
                  Publisher login
                </a>
              )}
            </Dropdown>
          )}
          <Link
            className="button button-primary"
            to="/contact"
            onClick={closeMenu}
          >
            Get started
          </Link>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "☀" : "◐"}
        </button>
      </div>
    </header>
  );
}
