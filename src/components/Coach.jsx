import {
  FaTrophy,
  FaRegHandshake,
  FaTimesCircle,
  FaFutbol,
} from "react-icons/fa";
import Guardiola from "../assets/images/pepp.jpeg";

export default function CoachProfile() {
  // Define individual stats
  const wins = 354; // Example value
  const draws = 57; // Example value
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
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
        {/* Coach Image */}
        <div className="relative mb-6">
          <img
            src={Guardiola}
            alt="Pep Guardiola"
            className="w-50 h-40 mx-auto rounded-xl border-4 border-blue-200 shadow-md transition-transform transform hover:scale-110"
          />
        </div>

        {/* Coach Name */}
        <h2 className="text-3xl font-bold text-gray-800 mt-6 text-center">
          Pep Guardiola
        </h2>
        <h2 className="text-xl font-bold text-gray-800 mt-2 text-center">
          2016 - Now
        </h2>

        {/* Coach Role */}
        <p className="text-lg text-gray-800 mt-2 italic font-bold text-center">
          Head Coach of Manchester City
        </p>

        {/* Bio */}
        <p className="mt-4 text-gray-900 leading-relaxed font-semibold text-center">
          Pep Guardiola has been the head coach of Manchester City since 2016.
          Under his leadership, the team has won multiple Premier League titles
          and domestic trophies, known for his tactical brilliance and team
          management.
        </p>

        {/* Stats */}
        <div className="mt-6">
          {data.map((stat, index) => (
            <div key={index} className="flex items-center mb-4 space-x-4">
              <div className="p-3">{stat.icon}</div>
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
