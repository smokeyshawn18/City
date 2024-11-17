import {
  FaCalendarAlt,
  FaHandsHelping,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import England from "../assets/images/eng.png";
import Norway from "../assets/images/norway.webp";
// import Belgium from "../assets/images/belgium.png";
import Portugal from "../assets/images/portugal.webp";
import player1Image from "../assets/images/haaland.jpg";
// import player2Image from "../assets/images/kdb.jpg";
// import player3Image from "../assets/images/silva.jpg";
import Nunes from "../assets/images/nunes.jpg";
import premierLeagueLogo from "../assets/images/prem.webp";
import championsLeagueLogo from "../assets/images/Champ.png";
import Carabao from "../assets/images/carabao.png";
import otherIcon from "../assets/images/sheld.png";
import PhilFoden from "../assets/images/fode.jpg";
// Placeholder for national team icon
import { useState } from "react";

const playersData = [
  {
    name: "Erling Haaland",
    matches: {
      premierLeague: 11,
      championsLeague: 4,
      other: 1,
      Carabao: 0,
      nationalStats: 6,
    },
    goals: {
      premierLeague: 12,
      championsLeague: 3,
      other: 0,
      Carabao: 0,
      nationalStats: 7,
    },
    assists: {
      premierLeague: 0,
      championsLeague: 0,
      other: 0,
      Carabao: 0,
      nationalStats: 1,
    },
    age: 24,
    position: "ST",
    image: player1Image,
    nimg: Norway,
  },

  {
    name: "Matheus Nunes",
    matches: {
      premierLeague: 8,
      championsLeague: 3,
      other: 1,
      Carabao: 2,
      nationalStats: 0,
    },
    goals: {
      premierLeague: 0,
      championsLeague: 1,
      other: 0,
      Carabao: 2,
      nationalStats: 0,
    },
    assists: {
      premierLeague: 2,
      championsLeague: 2,
      other: 0,
      Carabao: 0,
      nationalStats: 0,
    },
    age: 26,
    position: "AM",
    nimg: Portugal,
    image: Nunes,
  },
  {
    name: "Phil Foden",
    matches: {
      premierLeague: 8,
      championsLeague: 4,
      other: 0,
      Carabao: 2,
      nationalStats: 2,
    },
    goals: {
      premierLeague: 0,
      championsLeague: 3,
      other: 0,
      Carabao: 0,
      nationalStats: 0,
    },
    assists: {
      premierLeague: 1,
      championsLeague: 1,
      other: 0,
      Carabao: 0,
      nationalStats: 0,
    },
    age: 24,
    position: "AM",
    nimg: England,
    image: PhilFoden,
  },
  // {
  //   name: "Kevin De Bruyne",
  //   matches: {
  //     premierLeague: 4,
  //     championsLeague: 2,
  //     other: 1,
  //     Carabao: 0,
  //     nationalStats: 2,
  //   },
  //   goals: {
  //     premierLeague: 1,
  //     championsLeague: 0,
  //     other: 0,
  //     Carabao: 0,
  //     nationalStats: 2,
  //   },
  //   assists: {
  //     premierLeague: 1,
  //     championsLeague: 0,
  //     other: 0,
  //     Carabao: 0,
  //     nationalStats: 0,
  //   },
  //   nimg: Belgium,
  //   age: 33,
  //   position: "AM",
  //   image: player2Image,
  // },
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
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
                    alt="national flag"
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
                  {/* League Stats */}
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

                  {/* Champions League Stats */}
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
                  {/* National Stats */}
                  <div className="bg-gray-50 p-4 rounded-xl mb-4">
                    <div className="flex items-center mb-2">
                      <img
                        src={player.nimg}
                        alt="National Team"
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
                        {player.matches.nationalStats}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-semibold">
                        Goals:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.goals.nationalStats}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-semibold">
                        Assists:
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {player.assists.nationalStats}
                      </span>
                    </div>
                  </div>
                  {/* Carabao Cup Stats */}
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
                  {/* Other Stats */}
                  <div className="bg-gray-50 p-4 rounded-xl mb-4">
                    <div className="flex items-center mb-2">
                      <img
                        src={otherIcon}
                        alt="Other"
                        className="w-8 h-8 mr-2"
                      />
                      <span className="text-[#3D195B] font-semibold">
                        Other
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

export default KeyPerformers;
