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
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
          <span className="text-white font-bold text-xl uppercase tracking-wider">
            CityPulse
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
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
              onClick={handleNavLinkClick} // Ensure scroll to top on click
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-sky-900 rounded-md font-bold px-4 py-2 transition-colors duration-300 ease-in-out shadow-md"
                  : "text-white hover:bg-sky-900 hover:text-sky-300 rounded-md font-bold px-4 py-2 transition-colors duration-300 ease-in-out shadow-md"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden">
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
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-4">
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
                onClick={handleNavLinkClick} // Close navbar on link click and scroll to top
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-sky-900 rounded-md px-4 py-2"
                    : "text-white hover:text-gray-300"
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
