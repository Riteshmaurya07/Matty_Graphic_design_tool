import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Features", path: "/feature" },
    { name: "Canvas", path: "/canvas" },
    { name: "Chatbot", path: "/chatbot" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
    { name: "Finance", path: "/finance" },
    { name: "Administration", path: "/administration" },
    { name: "Payment", path: "/payment" },
    { name: "Feedback", path: "/feedback" },
    { name: "Settings", path: "/setting" },
  ];

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <button onClick={() => navigate("/home")} className="navbar-logo">
          DesignHub
        </button>

        {/* Desktop Menu */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {!isLoggedIn ? (
            <>
              <li>
                <NavLink to="/login" className="btn-login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" className="btn-signup">
                  Sign Up
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${isOpen ? "open" : "closed"}`}>
        <div className="mobile-dropdown">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <hr className="mobile-divider" />

          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="mobile-login"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="mobile-signup"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <button onClick={handleLogout} className="mobile-logout">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
