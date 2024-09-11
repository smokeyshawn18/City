import { FaFutbol, FaCalendarAlt } from "react-icons/fa";
import ManCityLogo from "../assets/images/logo.svg";
import ChelseaLogo from "../assets/images/Chelsea.webp";
import LiverpoolLogo from "../assets/images/lfc.webp";
import WestHamLogo from "../assets/images/westham.png";
import AstonVillaLogo from "../assets/images/aston-villa.png";
import RealMadridLogo from "../assets/images/rma.png";
import ArsenalLogo from "../assets/images/arsenal.png";
import PremierLeagueLogo from "../assets/images/prem.webp";
import ChampionsLeagueLogo from "../assets/images/Champ.png";
import FACupLogo from "../assets/images/fa.jpg";
import InterMilan from "../assets/images/inter.webp";
import Brent from "../assets/images/brentford.png";

const teamColors = {
  "Man City": "#6caddf",
  Liverpool: "#C8102E",
  Chelsea: "#034694",
  "West Ham": "#7A263A",
  "Aston Villa": "#95BFE5",
  "Real Madrid": "#000000",
  Arsenal: "#EF0107",
  "Inter Milan": "#010E80",
  Brentford: "#d20000",
};

const teamLogos = {
  "Man City": ManCityLogo,
  Chelsea: ChelseaLogo,
  Liverpool: LiverpoolLogo,
  "West Ham": WestHamLogo,
  "Aston Villa": AstonVillaLogo,
  "Real Madrid": RealMadridLogo,
  Arsenal: ArsenalLogo,
  "Inter Milan": InterMilan,
  Brentford: Brent,
};

const competitionLogos = {
  "Premier League": PremierLeagueLogo,
  "Champions League": ChampionsLeagueLogo,
  "FA Cup": FACupLogo,
};

const matches = [
  // {
  //   id: 1,
  //   homeTeam: "Man City",
  //   awayTeam: "Brentford",
  //   homeScore: 3,
  //   awayScore: 1,
  //   homeLogo: "Man City",
  //   awayLogo: "Brentford",
  //   scorers: {
  //     home: ["Haaland 10', 30', 83'"],
  //     away: ["R. Dias(OG) 19'"],
  //   },
  //   timestamp: "2024-08-31T22:15:00",
  //   competition: "Premier League",
  // },
  {
    id: 2,
    homeTeam: "Man City",
    awayTeam: "West Ham",
    homeScore: 3,
    awayScore: 1,
    homeLogo: "Man City",
    awayLogo: "West Ham",
    scorers: {
      home: ["Haaland 10', 30', 83'"],
      away: ["R. Dias(OG) 19'"],
    },
    timestamp: "2024-08-31T22:15:00",
    competition: "Premier League",
  },

  {
    id: 3,
    homeTeam: "Man City",
    awayTeam: "Chelsea",
    homeScore: 2,
    awayScore: 0,
    homeLogo: "Man City",
    awayLogo: "Chelsea",
    scorers: {
      home: ["Haaland 18'", "Kovacic 84'"],
      away: [],
    },
    timestamp: "2024-08-18T21:15:00",
    competition: "Premier League",
  },
  // {
  //   id: 3,
  //   homeTeam: "Man City",
  //   awayTeam: "Inter Milan",
  //   homeScore: 3,
  //   awayScore: 2,
  //   homeLogo: "Man City",
  //   awayLogo: "Inter Milan",
  //   scorers: {
  //     home: ["Haaland 18'", "Kovacic 84'", "Foden 89'"],
  //     away: ["Barella 10'", "Thuram 77'"],
  //   },
  //   timestamp: "2024-09-19T12:45:00",
  //   competition: "Champions League",
  // },

  {
    id: 4,
    homeTeam: "Man City",
    awayTeam: "Real Madrid",
    homeScore: 3,
    awayScore: 3,
    homeLogo: "Man City",
    awayLogo: "Real Madrid",
    scorers: {
      home: ["B. Silva 2'", "Foden 66'", "Gvardiol 71'"],
      away: ["R. Dias(OG) 12'", "Rodrygo 14'", "Valverde 79'"],
    },
    timestamp: "2024-04-10T12:45:00",
    competition: "Champions League",
  },
];

const Results = () => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="uppercase text-3xl font-bold text-center text-white mb-8">
        main Matches Results 2024/25
      </h2>
      <div className="space-y-6">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
          >
            <div className="flex flex-col md:flex-row">
              {/* Home Team Section */}
              <div
                className="flex-1 flex items-center justify-center p-4"
                style={{ backgroundColor: teamColors[match.homeTeam] }}
              >
                <div className="text-center">
                  <img
                    src={teamLogos[match.homeLogo]}
                    alt={`${match.homeTeam} Logo`}
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <h3 className="text-xl font-bold text-white">
                    {match.homeTeam}
                  </h3>
                </div>
              </div>

              {/* Match Details Section */}
              <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-100">
                <div className="flex items-center space-x-2 mb-2">
                  <img
                    src={competitionLogos[match.competition]}
                    alt={`${match.competition} Logo`}
                    className="w-8 h-8"
                  />
                  <span className="text-gray-700 font-bold">
                    {match.competition}
                  </span>
                </div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-2xl font-bold text-gray-800">
                    {match.homeScore}
                  </span>
                  <span className="text-2xl font-bold text-gray-600">-</span>
                  <span className="text-2xl font-bold text-gray-800">
                    {match.awayScore}
                  </span>
                </div>
                <div className="flex items-center space-x-2 font-bold text-gray-600">
                  <FaCalendarAlt />
                  <span>{formatDate(match.timestamp)}</span>
                  <span>{formatTime(match.timestamp)}</span>
                </div>
              </div>

              {/* Away Team Section */}
              <div
                className="flex-1 flex items-center justify-center p-4"
                style={{ backgroundColor: teamColors[match.awayTeam] }}
              >
                <div className="text-center">
                  <img
                    src={teamLogos[match.awayLogo]}
                    alt={`${match.awayTeam} Logo`}
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <h3 className="text-xl font-bold text-white">
                    {match.awayTeam}
                  </h3>
                </div>
              </div>
            </div>

            {/* Scorers Section */}
            <div className="p-4 bg-gray-50">
              <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Home Scorers */}
                <div className="flex-1 mb-4 md:mb-0 p-2">
                  <h4
                    className="text-lg font-extrabold mb-2 flex items-center"
                    style={{ color: teamColors[match.homeTeam] }}
                  >
                    <FaFutbol className="mr-2 text-green-500" />
                    {match.homeTeam}
                  </h4>
                  {match.scorers.home.length > 0 ? (
                    <ul className="list-disc list-inside text-[#001838] font-bold">
                      {match.scorers.home.map((scorer, index) => (
                        <li key={index}>{scorer}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No goals scored.</p>
                  )}
                </div>

                {/* Away Scorers */}
                <div className="p-2">
                  <h4 className="text-lg font-extrabold text-gray-700 mb-2 flex items-center">
                    <FaFutbol className="mr-2 text-green-500" />
                    {match.awayTeam}
                  </h4>
                  {match.scorers.away.length > 0 ? (
                    <ul className="list-disc list-inside text-gray-700 font-bold ">
                      {match.scorers.away.map((scorer, index) => (
                        <li key={index}>{scorer}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 font-bold"></p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
