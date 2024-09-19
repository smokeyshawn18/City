import PropTypes from "prop-types";
import {
  FaCalendarAlt,
  FaHandsHelping,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import Norway from "../assets/images/norway.webp";
import Belgium from "../assets/images/belgium.png";
import Portugal from "../assets/images/portugal.webp";
import player1Image from "../assets/images/haaland.jpg";
import player2Image from "../assets/images/kdb.jpg";
import player3Image from "../assets/images/silva.jpg";
import premierLeagueLogo from "../assets/images/prem.webp";
import championsLeagueLogo from "../assets/images/Champ.png";
import Carabao from "../assets/images/carabao.png";
import otherIcon from "../assets/images/sheld.png";
import { useState } from "react";

const playersData = [
  {
    name: "Erling Haaland",
    matches: {
      premierLeague: 4,
      championsLeague: 1,
      other: 1,
      Carabao: 0,
      nationalStats: 2,
    },
    goals: {
      premierLeague: 9,
      championsLeague: 0,
      other: 0,
      Carabao: 0,
      nationalStats: 1,
    },
    assists: {
      premierLeague: 0,
      championsLeague: 0,
      other: 0,
      Carabao: 0,
      nationalStats: 0,
    },
    nationalStats: { matches: 2, goals: 1, assists: 0 },
    age: 24,
    position: "ST",
    image: player1Image,
    nimg: Norway,
  },
  {
    name: "Kevin De Bruyne",
    matches: {
      premierLeague: 4,
      championsLeague: 1,
      other: 1,
      Carabao: 0,
      nationalStats: 2,
    },
    goals: {
      premierLeague: 1,
      championsLeague: 0,
      other: 0,
      Carabao: 0,
      nationalStats: 2,
    },
    assists: {
      premierLeague: 1,
      championsLeague: 0,
      other: 0,
      Carabao: 0,
      nationalStats: 0,
    },
    nationalStats: { matches: 2, goals: 2, assists: 0 },
    nimg: Belgium,
    age: 33,
    position: "AM",
    image: player2Image,
  },
  {
    name: "Bernardo Silva",
    matches: {
      premierLeague: 4,
      championsLeague: 1,
      other: 1,
      Carabao: 0,
      nationalStats: 2,
    },
    goals: {
      premierLeague: 0,
      championsLeague: 0,
      other: 1,
      Carabao: 0,
      nationalStats: 0,
    },
    assists: {
      premierLeague: 2,
      championsLeague: 0,
      other: 0,
      Carabao: 0,
      nationalStats: 0,
    },
    nationalStats: { matches: 2, goals: 0, assists: 0 },
    age: 30,
    position: "AM",
    nimg: Portugal,
    image: player3Image,
  },
];

const KeyPerformers = () => {
  const [expandedPlayerIndex, setExpandedPlayerIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedPlayerIndex(expandedPlayerIndex === index ? null : index);
  };

  return (
    <div className="mb-12">
      <h2 className="p-4 text-4xl font-extrabold mb-8 text-center text-[#1b3c42] uppercase tracking-widest">
        Key Performers this Season
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {playersData.map((player, index) => {
          const totalGoals =
            player.goals.premierLeague +
            player.goals.championsLeague +
            player.goals.Carabao +
            player.goals.other +
            player.goals.nationalStats;

          const totalMatches =
            player.matches.premierLeague +
            player.matches.championsLeague +
            player.matches.Carabao +
            player.matches.other +
            player.matches.nationalStats;

          const totalAssists =
            player.assists.premierLeague +
            player.assists.championsLeague +
            player.assists.Carabao +
            player.assists.other +
            player.assists.nationalStats;

          const isExpanded = expandedPlayerIndex === index;

          return (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex flex-col items-center mb-6">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-black mb-4"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#182d33] uppercase">
                    {player.name}
                  </h3>
                  <img
                    src={player.nimg}
                    alt=""
                    className="w-10 h-8 mx-auto mb-5 mt-3"
                  />
                  <p className="text-lg font-semibold text-[#182d33]">
                    {player.position}
                  </p>
                  <p className="text-[#182d33] font-semibold">
                    Age: {player.age}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {/* Matches */}
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
                  <FaCalendarAlt className="text-black text-2xl mb-2" />
                  <p className="text-xl font-semibold text-black">
                    {totalMatches}
                  </p>
                  <span className="text-sm text-gray-800 font-semibold">
                    Matches
                  </span>
                </div>
                {/* Goals */}
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
                  <GoGoal className="text-black text-2xl mb-2" />
                  <p className="text-xl font-semibold text-black">
                    {totalGoals}
                  </p>
                  <span className="text-sm text-gray-800 font-semibold">
                    Goals
                  </span>
                </div>
                {/* Assists */}
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
                  <FaHandsHelping className="text-black text-2xl mb-2" />
                  <p className="text-xl font-semibold text-black">
                    {totalAssists}
                  </p>
                  <span className="text-sm text-gray-800 font-semibold">
                    Assists
                  </span>
                </div>
              </div>

              <button
                onClick={() => toggleExpand(index)}
                className="flex items-center justify-center mt-6 text-black hover:text-[#1e2c50] transition-colors duration-300"
              >
                {isExpanded ? (
                  <>
                    <span className="font-bold text-[#1e2c50] text-lg">
                      Show Less
                    </span>
                    <FaAngleUp className="ml-1 text-3xl transition-transform duration-300 transform hover:scale-110" />
                  </>
                ) : (
                  <>
                    <span className="font-bold text-lg text-[#1e2c50]">
                      Show More
                    </span>
                    <FaAngleDown className="ml-1 text-3xl transition-transform duration-300 transform hover:scale-110" />
                  </>
                )}
              </button>

              {isExpanded && (
                <div className="mt-6">
                  <div className="bg-gray-50 p-4 rounded-xl mb-4">
                    <div className="flex items-center mb-2">
                      <img
                        src={premierLeagueLogo}
                        alt="Premier League"
                        className="w-8 h-8 mr-2"
                      />
                      <span className="text-[#3D195B] font-semibold">
                        Premier League
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Matches:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.matches.premierLeague}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Goals:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.goals.premierLeague}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-semibold">
                        Assists:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.assists.premierLeague}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl mb-4">
                    <div className="flex items-center mb-2">
                      <img
                        src={championsLeagueLogo}
                        alt="Champions League"
                        className="w-8 h-8 mr-2"
                      />
                      <span className="text-[#3D195B] font-semibold">
                        Champions League
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Matches:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.matches.championsLeague}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Goals:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.goals.championsLeague}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-semibold">
                        Assists:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.assists.championsLeague}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl mb-4">
                    <div className="flex items-center mb-2">
                      <img
                        src={Carabao}
                        alt="Carabao Cup"
                        className="w-8 h-8 mr-2"
                      />
                      <span className="text-[#3D195B] font-semibold">
                        Carabao Cup
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Matches:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.matches.Carabao}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Goals:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.goals.Carabao}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-semibold">
                        Assists:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.assists.Carabao}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl mb-4">
                    <div className="flex items-center mb-2">
                      <img
                        src={player.nimg}
                        alt="National Stats"
                        className="w-8 h-8 mr-2"
                      />
                      <span className="text-[#3D195B] font-semibold">
                        National Stats
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Matches:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.nationalStats.matches}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Goals:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.nationalStats.goals}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-semibold">
                        Assists:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.nationalStats.assists}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl mb-4">
                    <div className="flex items-center mb-2">
                      <img
                        src={otherIcon}
                        alt="Community Shield"
                        className="w-8 h-8 mr-2"
                      />
                      <span className="text-[#3D195B] font-semibold">
                        Community Shield
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Matches:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.matches.other}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Goals:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.goals.other}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-semibold">
                        Assists:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.assists.other}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

KeyPerformers.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      matches: PropTypes.shape({
        premierLeague: PropTypes.number.isRequired,
        championsLeague: PropTypes.number.isRequired,
        other: PropTypes.number.isRequired,
        Carabao: PropTypes.number.isRequired,
        nationalStats: PropTypes.number.isRequired,
      }).isRequired,
      goals: PropTypes.shape({
        premierLeague: PropTypes.number.isRequired,
        championsLeague: PropTypes.number.isRequired,
        other: PropTypes.number.isRequired,
        Carabao: PropTypes.number.isRequired,
        nationalStats: PropTypes.number.isRequired,
      }).isRequired,
      assists: PropTypes.shape({
        premierLeague: PropTypes.number.isRequired,
        championsLeague: PropTypes.number.isRequired,
        other: PropTypes.number.isRequired,
        Carabao: PropTypes.number.isRequired,
        nationalStats: PropTypes.number.isRequired,
      }).isRequired,
      nationalStats: PropTypes.shape({
        matches: PropTypes.number.isRequired,
        goals: PropTypes.number.isRequired,
        assists: PropTypes.number.isRequired,
      }).isRequired,
      age: PropTypes.number.isRequired,
      position: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      nimg: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default KeyPerformers;
