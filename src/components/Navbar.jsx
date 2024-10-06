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
    <nav className="bg-[#6caddf] p-4 sticky top-0 z-50 shadow-md">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 mx-2 rounded-full"
            />
            <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-wider"></span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {[
            { path: "/", label: "Home" },
            { path: "/News", label: "News" },
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
                  ? "text-white bg-sky-900 rounded-md font-bold text-lg px-5 py-3 transition-colors duration-300 ease-in-out shadow-lg"
                  : "text-white hover:bg-sky-900 hover:text-sky-300 rounded-md font-bold text-lg px-5 py-3 transition-colors duration-300 ease-in-out"
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
        <div className="lg:hidden mt-4">
          <div className="flex flex-col space-y-3 bg-sky-200 p-4 rounded-lg shadow-md">
            {[
              { path: "/", label: "Home" },
              { path: "/News", label: "News" },
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
                    ? "text-white bg-sky-900 rounded-md px-4 py-3 text-lg transition-colors duration-300 ease-in-out"
                    : "text-sky-700 hover:bg-sky-400 hover:text-white px-4 py-3 rounded-md text-lg transition-colors duration-300 ease-in-out"
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
