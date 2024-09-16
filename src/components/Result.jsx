import { FaFutbol, FaCalendarAlt } from "react-icons/fa";
import ManCityLogo from "../assets/images/logo.svg";
import ChelseaLogo from "../assets/images/Chelsea.webp";
import LiverpoolLogo from "../assets/images/lfc.webp";
import WestHamLogo from "../assets/images/westham.png";
import AstonVillaLogo from "../assets/images/aston-villa.png";
import RealMadridLogo from "../assets/images/rma.png";
import ArsenalLogo from "../assets/images/arsenal.png";
import PremierLeagueLogo from "../assets/images/prem.webp";
import { MdOutlineStadium } from "react-icons/md";
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

const calculateScore = (scorers) => {
  if (!scorers || !Array.isArray(scorers)) {
    return 0;
  }

  return scorers.reduce((total, scorer) => {
    const goals = scorer.split(",").length;
    return total + goals;
  }, 0);
};

const matches = [
  {
    id: 1,
    homeTeam: "Man City",
    awayTeam: "Brentford",
    scorers: {
      home: ["Haaland 19', 32'"],
      away: ["Yoane Wissa 1'"],
    },
    timestamp: "2024-09-14T19:45:00",
    competition: "Premier League",
    venue: "Etihad Stadium",
    competitionLogo: PremierLeagueLogo,
  },
  {
    id: 2,
    homeTeam: "Man City",
    awayTeam: "West Ham",
    scorers: {
      home: ["Haaland 10', 30', 83'"],
      away: ["R. Dias(OG) 19'"],
    },
    timestamp: "2024-08-31T22:15:00",
    competition: "Premier League",
    venue: "Etihad Stadium",
    competitionLogo: PremierLeagueLogo,
  },
  {
    id: 3,
    homeTeam: "Man City",
    awayTeam: "Chelsea",
    scorers: {
      home: ["Haaland 18'", "Kovacic 84'"],
      away: [],
    },
    timestamp: "2024-08-18T21:15:00",
    competition: "Premier League",
    venue: "Stamford Bridge",
    competitionLogo: PremierLeagueLogo,
  },
];

const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }
  return `${date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })}, ${date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};

const Results = () => {
  return (
    <div className="min-h-screen bg-darkblue p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Main Matches Results 24/25 Season
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {matches.map((match) => {
          // Calculate home and away team scores dynamically
          const homeScore = calculateScore(match.scorers.home);
          const awayScore = calculateScore(match.scorers.away);

          return (
            <div
              key={match.id}
              className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <div className="w-full h-40 bg-gradient-to-r from-[#31607f] to-[#002f6c] flex items-center justify-center text-center text-white">
                  {/* Home Team Section */}
                  <div className="absolute left-4 flex flex-col items-center">
                    <img
                      src={teamLogos[match.homeTeam]}
                      alt={`${match.homeTeam} Logo`}
                      className="w-24 h-24 rounded-full border-2 border-white"
                    />
                    <p className="mt-2 text-lg font-semibold">
                      {match.homeTeam}
                    </p>
                  </div>

                  {/* Score Display */}
                  <p className="text-3xl font-bold mx-8">
                    {homeScore} - {awayScore}
                  </p>

                  {/* Away Team Section */}
                  <div className="absolute right-4 flex flex-col items-center">
                    <img
                      src={teamLogos[match.awayTeam]}
                      alt={`${match.awayTeam} Logo`}
                      className="w-24 h-24 rounded-full border-2 border-white"
                    />
                    <p className="mt-2 text-lg font-semibold">
                      {match.awayTeam}
                    </p>
                  </div>
                </div>

                {/* Scorers Section */}
                <div className="p-4 bg-gray-900">
                  <div className="flex flex-col md:flex-row md:space-x-8">
                    {/* Home Scorers */}
                    <div className="flex-1 mb-4 md:mb-0 p-2">
                      <h4
                        className="text-lg font-extrabold mb-2 flex items-center"
                        style={{ color: teamColors[match.homeTeam] }}
                      >
                        <FaFutbol className="mr-2 text-green-400" />
                        {match.homeTeam}
                      </h4>
                      {match.scorers.home.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-300 font-bold">
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
                      <h4 className="text-lg font-extrabold text-gray-300 mb-2 flex items-center">
                        <FaFutbol className="mr-2 text-green-400" />
                        {match.awayTeam}
                      </h4>
                      {match.scorers.away.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-300 font-bold">
                          {match.scorers.away.map((scorer, index) => (
                            <li key={index}>{scorer}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500">No goals scored.</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Match Details Section */}
                <div className="p-4 text-center">
                  <FaCalendarAlt className="text-blue-500 text-2xl mb-2 mx-auto" />
                  <p className="text-xl font-semibold text-blue-200">
                    {formatDateTime(match.timestamp)}
                  </p>
                  <img
                    src={match.competitionLogo}
                    className="w-14 h-14 mx-auto mt-3 mb-3"
                    alt={`${match.competition} Logo`}
                  />
                  <p className="text-xl font-bold text-blue-300">
                    {match.competition}
                  </p>
                  <MdOutlineStadium className="text-blue-500 text-2xl mb-2 mt-4 mx-auto" />
                  <p className="text-md font-semibold text-gray-200 mt-4">
                    {match.venue}
                  </p>

                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
                    Enjoy The Game
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
