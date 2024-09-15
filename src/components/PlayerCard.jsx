import PropTypes from "prop-types";
import {
  FaFutbol,
  FaMedal,
  FaRegFutbol,
  FaRunning,
  FaFlag,
  FaTrophy,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const PlayerCard = ({ player }) => {
  const [activeTab, setActiveTab] = useState("career");
  const [careerStats, setCareerStats] = useState(player.careerStats);

  // UseEffect to automatically update career stats based on season stats
  useEffect(() => {
    setCareerStats({
      goals: player.careerStats.goals + player.seasonStats.goals,
      assists: player.careerStats.assists + player.seasonStats.assists,
      appearances:
        player.careerStats.appearances + player.seasonStats.appearances,
    });
  }, [player]);

  return (
    <>
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-3xl duration-300 ease-in-out">
        <div className="relative w-24 h-24 mx-auto mt-4 overflow-hidden rounded-full bg-[#6accf5] shadow-md">
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-contain object-center"
          />
        </div>

        <div className="p-6 bg-gradient-to-b from-[#ffffff] via-[#f9fafb] to-[#f0f4f8]">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-[#2ea9cb] mb-2 text-center uppercase tracking-widest">
            {player.name}
          </h2>

          <p className="text-[#000000] mb-4 text-xl font-bold text-center">
            {player.position}
          </p>
          <img
            src={player.country}
            alt={player.country}
            className="w-10 h-8 mx-auto mb-4"
          />
          <p className="text-[#245664] mb-6 text-xl font-bold text-center uppercase">
            {player.age}
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-4 space-x-2">
            <button
              className={`px-4 py-2 mx-1 font-bold text-sm uppercase tracking-wider rounded-full flex items-center ${
                activeTab === "career"
                  ? "bg-[#1e3a8a] text-white shadow-md"
                  : "bg-[#f0f4f8] text-[#1e3a8a] hover:bg-[#e2e8f0]"
              } transition-colors duration-300 ease-in-out`}
              onClick={() => setActiveTab("career")}
            >
              <FaTrophy className="mr-2" />
              Career Stats
            </button>
            <button
              className={`px-4 py-2 mx-1 font-bold text-sm uppercase tracking-wider rounded-full flex items-center ${
                activeTab === "season"
                  ? "bg-[#1e3a8a] text-white shadow-md"
                  : "bg-[#f0f4f8] text-[#1e3a8a] hover:bg-[#e2e8f0]"
              } transition-colors duration-300 ease-in-out`}
              onClick={() => setActiveTab("season")}
            >
              <FaMedal className="mr-2" />
              This Season
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            {activeTab === "career" ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FaRunning className="mr-2 text-[#1e3a8a]" />
                  <span className="flex-1 text-lg text-[#1e3a8a] font-extrabold">
                    <strong className="text-green-600">Matches:</strong>{" "}
                    {careerStats.appearances}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <FaFutbol className="mr-2 text-[#1e3a8a]" />
                  <span className="flex-1 text-lg text-[#1e3a8a] font-extrabold">
                    <strong className="text-pink-600">Goals:</strong>{" "}
                    {careerStats.goals}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <FaRegFutbol className="mr-2 text-[#1e3a8a]" />
                  <span className="flex-1 text-lg text-[#1e3a8a] font-extrabold">
                    <strong className="text-purple-600">Assists:</strong>{" "}
                    {careerStats.assists}
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FaFlag className="mr-2 text-[#272373]" />
                  <span className="flex-1 text-lg text-[#24205e] font-extrabold">
                    <strong className="text-green-700">Matches:</strong>{" "}
                    {player.seasonStats.appearances}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <FaFutbol className="mr-2 text-[#272465]" />
                  <span className="flex-1 text-lg text-[#29266a] font-extrabold">
                    <strong className="text-pink-700">Goals:</strong>{" "}
                    {player.seasonStats.goals}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <FaRegFutbol className="mr-2 text-[#25225b]" />
                  <span className="flex-1 text-lg text-[#272468] font-extrabold">
                    <strong className="text-purple-700">Assists:</strong>{" "}
                    {player.seasonStats.assists}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-2 right-2 bg-[#1e3a8a] text-white text-xs sm:text-sm md:text-xl font-extrabold px-4 py-2 rounded-full shadow-lg transform transition-transform hover:scale-110">
          #{player.number}
        </div>
      </div>
    </>
  );
};

// Define PropTypes for validation
PlayerCard.propTypes = {
  player: PropTypes.shape({
    country: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    careerStats: PropTypes.shape({
      goals: PropTypes.number.isRequired,
      assists: PropTypes.number.isRequired,
      appearances: PropTypes.number.isRequired,
    }).isRequired,
    seasonStats: PropTypes.shape({
      goals: PropTypes.number.isRequired,
      assists: PropTypes.number.isRequired,
      appearances: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PlayerCard;
