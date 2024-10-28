import logo from "../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#1F5673] to-[#6CABDD] text-white font-semibold p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden">
      {/* Decorative Overlays */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="200"
            fill="url(#gradient1)"
            opacity="0.3"
            className="animate-slow-move"
          />
          <circle
            cx="1000"
            cy="400"
            r="300"
            fill="url(#gradient2)"
            opacity="0.3"
            className="animate-slow-move-reverse"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Logo and Text */}
        <aside className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
          <NavLink to="/" onClick={scrollToTop} className="relative">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full shadow-xl transform hover:scale-110 transition-transform duration-300"
            />
          </NavLink>
          <div className="bg-white/30 p-4 rounded-xl shadow-2xl backdrop-blur-xl animate-fade-in-down">
            <p className="text-xl sm:text-2xl font-extrabold uppercase text-gray-900">
              CityPulse
            </p>
            <p className="text-lg sm:text-xl font-semibold text-black">
              Ultimate source for Man City Fans.
            </p>
          </div>
        </aside>

        {/* Navigation Links */}
        <nav className="text-center md:text-left md:mx-6">
          {" "}
          {/* Adjusted margin-right here */}
          <p className="mb-4 text-xl sm:text-2xl font-bold uppercase">
            Quick Links
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { path: "/", label: "Home" },
              // { path: "/News", label: "News" },
              { path: "/Schedule", label: "Schedule" },
              { path: "/Results", label: "Results" },
              { path: "/Trophy-Cabinet", label: "Trophy Cabinet" },
              { path: "/Player-Card", label: "Player Card" },
              { path: "/History", label: "History" },
            ].map(({ path, label }, index) => (
              <NavLink
                key={index}
                to={path}
                onClick={scrollToTop}
                className="block p-3 bg-white/10   hover:bg-blue-400 transition duration-300 text-white font-bold text-center py-2 rounded-lg shadow-lg"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Social Media Icons */}
        <nav className="text-center md:text-right md:ml-8">
          <p className="mb-4 text-2xl sm:text-xl font-bold uppercase">
            Connect With Us
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            {[
              {
                href: "#",
                label: "X",
                svgPath:
                  "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
              },
              {
                href: "#",
                label: "YouTube",
                svgPath:
                  "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
              },
              {
                href: "https://www.facebook.com/profile.php?id=61564650966182",
                label: "Facebook",
                svgPath:
                  "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
              },
            ].map(({ href, label, svgPath }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                className="relative group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  className="fill-current relative z-10 group-hover:scale-110 transition-transform duration-300"
                >
                  <path d={svgPath}></path>
                </svg>
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Footer Bottom Text */}
      <div className="relative z-10 text-center mt-8 text-sm md:text-base">
        <p className="bg-white/40 backdrop-blur-xl rounded-lg shadow-2xl inline-block px-4 py-2 md:px-6 md:py-3 font-bold text-gray-900">
          Copyright © {new Date().getFullYear()} - CityPulse. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
