import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md w-full px-6 py-4 text-white">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <button
          onClick={() => navigate("/home")}
          className="text-2xl font-bold tracking-wide cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md"
        >
          DesignHub
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium items-center">
          {navLinks.slice(0, 4).map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:underline transition-all duration-200 ${
                    isActive ? "font-bold underline" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {!isLoggedIn ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  className="bg-white text-purple-700 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className="bg-yellow-400 text-black px-4 py-1 rounded-lg font-semibold hover:bg-yellow-300 transition"
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="ml-4 border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-purple-700 transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-screen mt-4" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block hover:text-purple-600 font-medium transition ${
                  isActive ? "font-bold text-purple-700" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <hr className="my-3" />

          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="block w-full text-center bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="block w-full text-center bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="mt-4 w-full border border-gray-300 rounded-lg py-2 text-gray-800 hover:bg-gray-100 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
