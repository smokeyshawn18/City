import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FaRunning, FaFutbol, FaHandsHelping } from "react-icons/fa";
import premierLeagueLogo from "../assets/images/prem.webp";
import championsLeagueLogo from "../assets/images/Champ.png";
import faCupLogo from "../assets/images/fa.jpg";
import communityShieldLogo from "../assets/images/sheld.png";
import clubWorldCupLogo from "../assets/images/cwc.webp";
import carabaoCupLogo from "../assets/images/carabao.png";
import Ag from "../assets/images/ag.avif";
import europaLeagueLogo from "../assets/images/europa.png";
import Raheem from "../assets/images/raheem.webp";
import ErlingHaaland from "../assets/images/haaland.jpg";
import Supercup from "../assets/images/supercup.png";
import KDB from "../assets/images/kdb.jpg";
import Gab from "../assets/images/gab.webp";
import PhilFoden from "../assets/images/fode.jpg";
import Ya from "../assets/images/yaya.avif";
import Riyad from "../assets/images/mahrez.jpg";
import SilvaD from "../assets/images/dsilva.jpg";
import Tevez from "../assets/images/tevez.jpg";
import Dzeko from "../assets/images/dzeko.webp";
import SilvaB from "../assets/images/silvab.jpg";

const playersData = [
  {
    name: "Sergio Agüero",
    image: Ag,
    position: "ST",
    age: "35",
    year: "2011-2021",
    status: "Retired",
    competitions: {
      premierLeague: {
        matches: 275,
        goals: 184,
        assists: 47,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 64,
        goals: 36,
        assists: 7,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 22, goals: 20, assists: 5, logo: faCupLogo },
      communityShield: {
        matches: 2,
        goals: 2,
        assists: 0,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 23, goals: 13, assists: 3, logo: carabaoCupLogo },
      europaLeague: {
        matches: 4,
        goals: 5,
        assists: 2,
        logo: europaLeagueLogo,
      },
    },
  },
  {
    name: "Raheem Sterling",
    image: Raheem,
    position: "LW",
    age: "29",
    year: "2015-2022",
    status: "Active - Arsenal",
    competitions: {
      premierLeague: {
        matches: 225,
        goals: 91,
        assists: 41,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 67,
        goals: 24,
        assists: 16,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 23, goals: 9, assists: 7, logo: faCupLogo },
      communityShield: {
        matches: 1,
        goals: 1,
        assists: 0,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 23, goals: 6, assists: 9, logo: carabaoCupLogo },
      europaLeague: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: europaLeagueLogo,
      },
    },
  },
  {
    name: "Erling Haaland",
    image: ErlingHaaland,
    position: "ST",
    age: "24",
    status: "Active",
    year: "2022-Present",
    competitions: {
      premierLeague: {
        matches: 77,
        goals: 75,
        assists: 12,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 24,
        goals: 21,
        assists: 2,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 7, goals: 8, assists: 0, logo: faCupLogo },
      communityShield: {
        matches: 3,
        goals: 0,
        assists: 0,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 2, goals: 1, assists: 0, logo: carabaoCupLogo },
      europaLeague: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: europaLeagueLogo,
      },
      SuperCup: {
        matches: 1,
        goals: 0,
        assists: 0,
        logo: Supercup,
      },
    },
  },
  {
    name: "Kevin De Bruyne",
    image: KDB,
    position: "AM",
    age: "33",
    year: "2015-Present",
    status: "Active",
    competitions: {
      premierLeague: {
        matches: 263,
        goals: 69,
        assists: 113,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 67,
        goals: 16,
        assists: 28,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 30, goals: 8, assists: 18, logo: faCupLogo },
      communityShield: {
        matches: 4,
        goals: 0,
        assists: 1,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 26, goals: 10, assists: 11, logo: carabaoCupLogo },
      europaLeague: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: europaLeagueLogo,
      },
      SuperCup: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: Supercup,
      },
    },
  },
  {
    name: "Gabriel Jesus",
    image: Gab,
    year: "2017-2022",
    position: "ST",
    age: "27",
    status: "Active - Arsenal",
    competitions: {
      premierLeague: {
        matches: 159,
        goals: 58,
        assists: 31,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 38,
        goals: 20,
        assists: 5,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 20, goals: 10, assists: 8, logo: faCupLogo },
      communityShield: {
        matches: 2,
        goals: 0,
        assists: 0,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 17, goals: 7, assists: 1, logo: carabaoCupLogo },
      europaLeague: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: europaLeagueLogo,
      },
    },
  },
  {
    name: "Phil Foden",
    position: "AM",
    age: "24",
    year: "2016-Present",
    image: PhilFoden,
    status: "Active",
    competitions: {
      premierLeague: {
        matches: 172,
        goals: 54,
        assists: 27,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 56,
        goals: 18,
        assists: 12,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 26, goals: 12, assists: 8, logo: faCupLogo },
      communityShield: {
        matches: 4,
        goals: 0,
        assists: 1,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 2,
        goals: 1,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 23, goals: 5, assists: 7, logo: carabaoCupLogo },
      europaLeague: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: europaLeagueLogo,
      },
      SuperCup: {
        matches: 1,
        goals: 0,
        assists: 0,
        logo: Supercup,
      },
    },
  },
  {
    name: "Yaya Toure",
    image: Ya,
    position: "CM",
    year: "2010-2018",
    age: "41",
    status: "Retired",
    competitions: {
      premierLeague: {
        matches: 229,
        goals: 60,
        assists: 32,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 42,
        goals: 7,
        assists: 5,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 20, goals: 6, assists: 4, logo: faCupLogo },
      communityShield: {
        matches: 3,
        goals: 1,
        assists: 0,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 13, goals: 5, assists: 2, logo: carabaoCupLogo },
      europaLeague: {
        matches: 9,
        goals: 1,
        assists: 4,
        logo: europaLeagueLogo,
      },
    },
  },
  {
    name: "Riyad Mahrez",
    image: Riyad,
    year: "2018-2023",
    position: "RW",
    age: "33",
    status: "Active - Al-Ahli",
    competitions: {
      premierLeague: {
        matches: 145,
        goals: 43,
        assists: 34,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 46,
        goals: 16,
        assists: 12,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 23, goals: 11, assists: 5, logo: faCupLogo },
      communityShield: {
        matches: 3,
        goals: 0,
        assists: 0,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 19, goals: 8, assists: 5, logo: carabaoCupLogo },
      europaLeague: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: europaLeagueLogo,
      },
    },
  },
  {
    name: "David Silva",
    image: SilvaD,
    year: "2010-2020",
    position: "AM",
    age: "38",
    status: "Retired",
    competitions: {
      premierLeague: {
        matches: 309,
        goals: 60,
        assists: 93,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 56,
        goals: 9,
        assists: 14,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 34, goals: 5, assists: 14, logo: faCupLogo },
      communityShield: {
        matches: 4,
        goals: 0,
        assists: 2,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 21, goals: 1, assists: 5, logo: carabaoCupLogo },
      europaLeague: {
        matches: 12,
        goals: 2,
        assists: 3,
        logo: europaLeagueLogo,
      },
    },
  },
  {
    name: "Carlos Tevez",
    image: Tevez,
    year: "2010-2013",
    position: "ST",
    age: "40",
    status: "Retired",
    competitions: {
      premierLeague: {
        matches: 110,
        goals: 56,
        assists: 23,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 6,
        goals: 0,
        assists: 0,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 12, goals: 7, assists: 5, logo: faCupLogo },
      communityShield: {
        matches: 1,
        goals: 1,
        assists: 0,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 13, goals: 9, assists: 2, logo: carabaoCupLogo },
      europaLeague: {
        matches: 6,
        goals: 0,
        assists: 2,
        logo: europaLeagueLogo,
      },
    },
  },
  {
    name: "Eden Dzeko",
    image: Dzeko,
    year: "2010-2015",
    position: "ST",
    age: "38",
    status: "Retired",
    competitions: {
      premierLeague: {
        matches: 130,
        goals: 50,
        assists: 13,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 24,
        goals: 5,
        assists: 5,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 13, goals: 4, assists: 7, logo: faCupLogo },
      communityShield: {
        matches: 3,
        goals: 1,
        assists: 0,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 13, goals: 9, assists: 2, logo: carabaoCupLogo },
      europaLeague: {
        matches: 6,
        goals: 3,
        assists: 1,
        logo: europaLeagueLogo,
      },
    },
  },
  {
    name: "Bernardo Silva",
    image: SilvaB,
    year: "2017-Present",
    position: "RW",
    age: "30",
    status: "Active",
    competitions: {
      premierLeague: {
        matches: 244,
        goals: 39,
        assists: 45,
        logo: premierLeagueLogo,
      },
      championsLeague: {
        matches: 72,
        goals: 14,
        assists: 10,
        logo: championsLeagueLogo,
      },
      faCup: { matches: 27, goals: 10, assists: 7, logo: faCupLogo },
      communityShield: {
        matches: 6,
        goals: 1,
        assists: 1,
        logo: communityShieldLogo,
      },
      clubWorldCup: {
        matches: 2,
        goals: 1,
        assists: 0,
        logo: clubWorldCupLogo,
      },
      carabaoCup: { matches: 20, goals: 2, assists: 5, logo: carabaoCupLogo },
      europaLeague: {
        matches: 0,
        goals: 0,
        assists: 0,
        logo: europaLeagueLogo,
      },
    },
  },
];

function TopScorers({ players }) {
  const [expandedPlayers, setExpandedPlayers] = useState({});

  // Calculate total stats for each player
  const playersWithTotalStats = useMemo(
    () =>
      players.map((player) => {
        const totalStats = Object.values(player.competitions).reduce(
          (totals, comp) => ({
            matches: totals.matches + comp.matches,
            goals: totals.goals + comp.goals,
            assists: totals.assists + comp.assists,
          }),
          { matches: 0, goals: 0, assists: 0 }
        );
        return { ...player, totalStats };
      }),
    [players]
  );

  const handleToggleExpand = (playerName) => {
    setExpandedPlayers((prev) => ({
      ...prev,
      [playerName]: !prev[playerName],
    }));
  };

  return (
    <section className="bg-gradient-to-b from-[#6CABDD] to-[#003A70] py-12 px-6 sm:px-8 md:px-12 mb-5">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-8 sm:mb-12 tracking-wider">
        Manchester City Top Scorers of the 21st Century - Top 12
      </h2>

      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {playersWithTotalStats.map((player, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="bg-[#003A70] text-white py-4 px-6 flex items-center justify-between">
              <span className="text-xs sm:text-sm italic">{player.status}</span>
            </div>

            <div className="relative bg-gray-100 p-4 sm:p-6 text-center">
              <img
                src={player.image}
                alt={player.name}
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full border-4 border-[#6CABDD] shadow-md object-cover transform transition-all hover:scale-110 hover:shadow-lg"
              />
            </div>

            <div className="p-4 sm:p-6 text-center text-gray-800 border-t border-gray-200">
              <span className="font-extrabold text-base xl:text-xl tracking-wide mb-3 uppercase text-sky-900">
                {player.name}
              </span>

              <p className="font-bold text-lg sm:text-xl mt-4 mx-1 mb-3 sm:mb-5">
                Age: {player.age}
              </p>
              <p className="font-bold text-lg sm:text-xl mx-1 mb-3 sm:mb-5">
                Position: {player.position}
              </p>
              <p className="font-bold text-lg sm:text-xl mx-1 mb-3 sm:mb-5">
                {player.year}
              </p>

              <div className="flex justify-around text-base sm:text-lg font-semibold text-[#003A70]">
                <div className="flex flex-col items-center">
                  <FaRunning className="text-lg sm:text-2xl text-[#6CABDD]" />
                  Matches
                  <p className="text-lg sm:text-2xl">
                    {player.totalStats.matches}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <FaFutbol className="text-lg sm:text-2xl text-[#003A70]" />
                  Goals
                  <p className="text-lg sm:text-2xl">
                    {player.totalStats.goals}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <FaHandsHelping className="text-lg sm:text-2xl text-[#6CABDD]" />
                  Assists
                  <p className="text-lg sm:text-2xl">
                    {player.totalStats.assists}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-4 py-4 sm:py-6 text-center">
              <button
                onClick={() => handleToggleExpand(player.name)}
                className="mt-4 text-white bg-[#6CABDD] hover:bg-[#003A70] px-3 sm:px-4 py-2 rounded-md shadow transition"
              >
                {expandedPlayers[player.name] ? "Show Less" : "More Stats"}
              </button>

              {expandedPlayers[player.name] && (
                <div className="mt-4">
                  <h4 className="font-bold text-[#003A70] mb-2 text-center">
                    Competitions
                  </h4>
                  <ul className="space-y-2 text-gray-800">
                    {Object.entries(player.competitions).map(
                      ([comp, stats], i) => (
                        <li
                          key={i}
                          className="flex flex-col items-center py-2 px-3 sm:px-4 bg-gray-50 rounded-lg shadow-md space-y-2"
                        >
                          <img
                            src={stats.logo}
                            alt={`${comp} logo`}
                            className="w-6 h-6 sm:w-8 sm:h-8 mb-1"
                          />
                          <span className="capitalize font-semibold text-[#003A70]">
                            {comp.replace(/([A-Z])/g, " $1")}
                          </span>
                          <div className="flex space-x-4 items-center">
                            <span className="flex items-center space-x-1 text-[#003A70]">
                              <FaRunning className="text-sm sm:text-base" />
                              <span className="font-bold">{stats.matches}</span>
                            </span>
                            <span className="flex items-center space-x-1 text-[#1b334b]">
                              <FaFutbol className="text-sm sm:text-base" />
                              <span className="font-extrabold">
                                {stats.goals}
                              </span>
                            </span>
                            <span className="flex items-center space-x-1 text-[#003A70]">
                              <FaHandsHelping className="text-sm sm:text-base" />
                              <span className="font-bold">{stats.assists}</span>
                            </span>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

TopScorers.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      competitions: PropTypes.objectOf(
        PropTypes.shape({
          matches: PropTypes.number.isRequired,
          goals: PropTypes.number.isRequired,
          assists: PropTypes.number.isRequired,
          logo: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

TopScorers.defaultProps = {
  players: playersData,
};

export default TopScorers;
