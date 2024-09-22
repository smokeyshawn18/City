import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <nav className="bg-[#6caddf] p-4 sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 mx-2 rounded-full"
            />
            <span className="text-white font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wider">
              CityPulse
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 md:space-x-6">
          {[
            { path: "/", label: "Home" },
            { path: "/Schedule", label: "Schedule" },
            { path: "/Results", label: "Results" },
            { path: "/Trophy-Cabinet", label: "Trophy Cabinet" },
            { path: "/Player-Card", label: "Player Card" },
            { path: "/History", label: "History" },
          ].map(({ path, label }, index) => (
            <NavLink
              key={index}
              to={path}
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-sky-900 rounded-md font-bold px-3 py-2 transition-colors duration-300 ease-in-out shadow-md"
                  : "text-white hover:bg-sky-900 hover:text-sky-300 rounded-md font-bold px-3 py-2 transition-colors duration-300 ease-in-out shadow-md"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col space-y-3 mt-4 bg-sky-200 p-4 rounded-lg shadow-md">
            {[
              { path: "/", label: "Home" },
              { path: "/Schedule", label: "Schedule" },
              { path: "/Results", label: "Results" },
              { path: "/Trophy-Cabinet", label: "Trophy Cabinet" },
              { path: "/Player-Card", label: "Player Card" },
              { path: "/History", label: "History" },
            ].map(({ path, label }, index) => (
              <NavLink
                key={index}
                to={path}
                onClick={handleNavLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-sky-900 rounded-md px-4 py-2"
                    : "text-sky-700 hover:bg-sky-400 hover:text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
