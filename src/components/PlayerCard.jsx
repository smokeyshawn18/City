import PropTypes from "prop-types";
import {
  FaFutbol,
  FaMedal,
  FaRegFutbol,
  FaRunning,
  FaFlag,
  FaTrophy,
} from "react-icons/fa";
import { useState } from "react";

const PlayerCard = ({ player }) => {
  const [activeTab, setActiveTab] = useState("career");

  return (
    <>
      <div className="relative bg-gradient-to-br from-[#e0f2f1] via-[#c1d3fd] to-[#a5b4fc] shadow-2xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-3xl duration-300 ease-in-out">
        <div className="relative w-full h-56  sm:h-64 md:h-72 p-2">
          <img
            src={player.image}
            alt={player.name}
            className="
   
    absolute inset-0 p-3 m-2
    w-[95%] h-[95%] 
    object-cover object-top 
    rounded-t-xs
    shadow-2xl 
    transition-transform 
    duration-500 
    hover:scale-110 
    hover:shadow-3xl 
    mx-auto 
    hover:brightness-110 
    hover:contrast-125 
    hover:saturate-150 
    hover:rotate-1 
    hover:-translate-y-1"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-transparent rounded-t-lg"></div>
        </div>

        <div className="p-6 bg-gradient-to-b from-[#ffffff] via-[#f9fafb] to-[#f0f4f8]">
          <h2 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-[#2ea9cb] mb-4 text-center uppercase tracking-widest">
            {player.name}
          </h2>
          <p className="text-[#000000] mb-6 text-2xl font-bold text-center">
            {player.position}
          </p>
          <p className="text-[#2ea9cb] mb-6 text-2xl font-bold text-center uppercase">
            {player.age}
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-4">
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
                    {player.careerStats.appearances}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <FaFutbol className="mr-2 text-[#1e3a8a]" />
                  <span className="flex-1 text-lg text-[#1e3a8a] font-extrabold">
                    <strong className="text-pink-600">Goals:</strong>{" "}
                    {player.careerStats.goals}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <FaRegFutbol className="mr-2 text-[#1e3a8a]" />
                  <span className="flex-1 text-lg text-[#1e3a8a] font-extrabold">
                    <strong className="text-purple-600">Assists:</strong>{" "}
                    {player.careerStats.assists}
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

        <div className="absolute top-2 right-2 bg-[#1e3a8a] text-white text-xs sm:text-sm md:text-xl font-extrabold px-6 py-4 rounded-full shadow-lg transform transition-transform hover:scale-110">
          #{player.number}
        </div>
      </div>
    </>
  );
};

// Define PropTypes for validation
PlayerCard.propTypes = {
  player: PropTypes.shape({
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
