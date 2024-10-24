import {
  FaTrophy,
  FaRegHandshake,
  FaTimesCircle,
  FaFutbol,
} from "react-icons/fa";
import Guardiola from "../assets/images/pepg.webp";

export default function CoachProfile() {
  // Define individual stats
  const wins = 358; // Example value
  const draws = 60; // Example value
  const losses = 66; // Example value
  const totalTrophies = 18; // Example value

  // Calculate total matches
  const totalMatches = wins + draws + losses;

  // Data array with computed totalMatches
  const data = [
    {
      type: "stat",
      icon: <FaTrophy className="text-yellow-500 w-6 h-6" />,
      label: "Trophies",
      value: totalTrophies,
    },
    {
      type: "stat",
      icon: <FaFutbol className="text-gray-600 w-6 h-6" />,
      label: "Matches",
      value: totalMatches,
    },
    {
      type: "stat",
      icon: <FaTrophy className="text-teal-600 w-6 h-6" />,
      label: "Wins",
      value: wins,
    },
    {
      type: "stat",
      icon: <FaRegHandshake className="text-blue-400 w-6 h-6" />,
      label: "Draws",
      value: draws,
    },
    {
      type: "stat",
      icon: <FaTimesCircle className="text-rose-400 w-6 h-6" />,
      label: "Losses",
      value: losses,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-sky-100 rounded-xl">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
        {/* Coach Image */}
        <div className="relative mb-6">
          <img
            src={Guardiola}
            alt="Pep Guardiola"
            className="w-full h-64 object-cover rounded-lg border-4 border-purple-200 shadow-lg transition-transform transform hover:scale-110"
          />
        </div>

        {/* Coach Name */}
        <h2 className="text-4xl font-bold text-center text-gray-800 hover:text-purple-600 transition duration-300">
          Pep Guardiola
        </h2>
        <h3 className="text-lg font-semibold text-center text-gray-600 mt-1">
          2016 - Now
        </h3>

        {/* Coach Role */}
        <p className="text-lg text-center text-gray-600 italic mt-2">
          Head Coach of Manchester City
        </p>

        {/* Bio */}
        <p className="mt-4 text-gray-800 leading-relaxed font-medium text-center">
          Pep Guardiola has been the head coach of Manchester City since 2016.
          Under his leadership, the team has won multiple Premier League titles
          and domestic trophies, showcasing his tactical brilliance and
          leadership.
        </p>

        {/* Stats */}
        <div className="mt-6">
          {data.map((stat, index) => (
            <div key={index} className="flex items-center mb-4 space-x-4">
              <div className="p-3 text-purple-600">{stat.icon}</div>
              <p className="text-lg font-bold text-gray-700">
                {stat.label}:{" "}
                <span className="text-gray-800">{stat.value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
