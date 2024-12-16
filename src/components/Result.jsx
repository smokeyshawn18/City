import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineStadium } from "react-icons/md";
import ManCityLogo from "../assets/images/logo.svg";
import ChelseaLogo from "../assets/images/Chelsea.webp";
import LiverpoolLogo from "../assets/images/lfc.webp";
import WestHamLogo from "../assets/images/westham.png";
import United from "../assets/images/united.png";
import AstonVillaLogo from "../assets/images/aston-villa.png";
import RealMadridLogo from "../assets/images/rma.png";
import ArsenalLogo from "../assets/images/arsenal.png";
import PremierLeagueLogo from "../assets/images/prem.webp";
import InterMilan from "../assets/images/inter.webp";
import Sheld from "../assets/images/sheld.png";
import Brent from "../assets/images/brentford.png";
import ChampionsLeague from "../assets/images/champions.png";
import Barella from "../assets/images/barella.webp";
import Haaland from "../assets/images/haaland.jpg";
import Bob from "../assets/images/bob.jpg";
import Raya from "../assets/images/raya.jpg";
import New from "../assets/images/newcastle.png";
import JoskoGvardiol from "../assets/images/gv.jpg";
import SLB from "../assets/images/slb.png";
import PhilFoden from "../assets/images/pfoden.jpg";
import Fulham from "../assets/images/fulham.png";
import Kovacic from "../assets/images/kovacic.webp";
import Tottenham from "../assets/images/tottenham.webp";
import Carabao from "../assets/images/carabao.png";
import Kul from "../assets/images/kul.jpg";
import Sporting from "../assets/images/sporting.png";
import Victor from "../assets/images/gyokeres.webp";
import Brighton from "../assets/images/brigton.png";
import Pedro from "../assets/images/pedro.jpg";
import Mad from "../assets/images/mad.webp";
import Salah from "../assets/images/salah.webp";
import Juventus from "../assets/images/juv.jpg";
import Vla from "../assets/images/vla.jpg";
import Amad from "../assets/images/amad.webp";

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
  "Manchester United": "#DA291C",
};

const teamLogos = {
  "Man United": United,
  "Man City": ManCityLogo,
  Chelsea: ChelseaLogo,
  Liverpool: LiverpoolLogo,
  "West Ham": WestHamLogo,
  "Aston Villa": AstonVillaLogo,
  "Real Madrid": RealMadridLogo,
  Arsenal: ArsenalLogo,
  "Inter Milan": InterMilan,
  Tottenham: Tottenham,
  Brentford: Brent,
  NewCastle: New,
  "S. Bratislava": SLB,
  "Sporting CP": Sporting,
  Fulham: Fulham,
  Brighton: Brighton,
  Juventus: Juventus,
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
    awayTeam: "Man United",
    scorers: { home: ["B. Silva 89'"], away: ["Garnacho 82'"] },
    timestamp: "2024-08-10T19:45:00",
    time: "FT",
    pen: "Pen 7-6",
    competition: "Community Shield - Final",
    venue: "Wembley Stadium",
    competitionLogo: Sheld,
    manOfTheMatch: Bob,
    motm: "Oscar Bobb",
  },
  {
    id: 2,
    homeTeam: "Man City",
    awayTeam: "Chelsea",
    scorers: {
      home: ["Haaland 18'", "Kovacic 84'"],
      away: [],
    },
    timestamp: "2024-08-18T21:15:00",
    time: "FT",
    competition: "Premier League",
    venue: "Stamford Bridge",
    competitionLogo: PremierLeagueLogo,
    manOfTheMatch: Haaland,
    motm: "Erling Haaland",
  },
  {
    id: 3,
    homeTeam: "Man City",
    awayTeam: "West Ham",
    scorers: {
      home: ["Haaland 10' , 30', 83'"],
      away: ["R. Dias(OG) 19'"],
    },
    timestamp: "2024-08-31T22:15:00",
    time: "FT",
    competition: "Premier League",
    venue: "Etihad Stadium",
    competitionLogo: PremierLeagueLogo,
    manOfTheMatch: Haaland,
    motm: "Erling Haaland",
  },
  {
    id: 4,
    homeTeam: "Man City",
    awayTeam: "Brentford",
    scorers: { home: ["Haaland 19', 32'"], away: ["Yoane Wissa 1'"] },
    timestamp: "2024-09-14T19:45:00",
    time: "FT",
    competition: "Premier League",
    venue: "Etihad Stadium",
    competitionLogo: PremierLeagueLogo,
    manOfTheMatch: Haaland,
    motm: "Erling Haaland",
  },
  {
    id: 5,
    homeTeam: "Man City",
    awayTeam: "Inter Milan",
    scorers: { home: [], away: [] },
    timestamp: "2024-09-19T12:45:00",
    time: "FT",
    competition: "Champions League",
    venue: "Etihad Stadium",
    competitionLogo: ChampionsLeague,

    manOfTheMatch: Barella,
    motm: "Nicolo Barella",
  },
  {
    id: 6,
    homeTeam: "Man City",
    awayTeam: "Arsenal",
    scorers: {
      home: ["Haaland 9'", "Stones 90+8'"],
      away: ["Calafiori 22'", "Gabriel 45+1'"],
    },
    timestamp: "2024-09-22T21:15:00",
    time: "FT",
    competition: "Premier League",
    venue: "Etihad Stadium",
    competitionLogo: PremierLeagueLogo,

    manOfTheMatch: Raya,
    motm: "David Raya",
  },
  {
    id: 7,
    homeTeam: "Man City",
    awayTeam: "NewCastle",
    scorers: {
      home: ["Gvardiol 35'"],
      away: ["Gordon 58' (Pen)"],
    },
    timestamp: "2024-09-28T17:15",
    time: "FT",
    competition: "Premier League",
    venue: "St. James' Park",
    competitionLogo: PremierLeagueLogo,

    manOfTheMatch: JoskoGvardiol,
    motm: "Josko Gvardiol",
  },
  {
    id: 8,
    homeTeam: "Man City",
    awayTeam: "S. Bratislava",
    scorers: {
      home: ["Gundogan 8'", "Foden 15'", "Haaland 58'", "McAtee 74'"],
      away: [],
    },
    timestamp: "2024-10-02T12:45:00",
    time: "FT",
    competition: "Champions League",
    venue: "Stadion Tehelne pole, Slovakia",
    competitionLogo: ChampionsLeague,

    manOfTheMatch: PhilFoden,
    motm: "Phil Foden",
  },
  {
    id: 9,
    homeTeam: "Man City",
    awayTeam: "Fulham",
    scorers: {
      home: ["Kovacic 32', 47'", "Doku 82'"],
      away: ["Pereira 26'", "Muniz 88'"],
    },
    timestamp: "2024-10-05T17:15",
    time: "FT",
    competition: "Premier League",
    venue: "Etihad Stadium",
    competitionLogo: PremierLeagueLogo,

    manOfTheMatch: Kovacic,
    motm: "Mateo Kovacic",
  },
  {
    id: 10,
    homeTeam: "Man City",
    awayTeam: "Tottenham",
    scorers: {
      home: ["Nunes 45+4'"],
      away: ["Werner 5'", "Sarr 25'"],
    },
    timestamp: "2024-10-31T02:00",
    time: "FT",
    competition: "Carabao Cup",
    venue: "Tottenham Hotspur Stadium",
    competitionLogo: Carabao,

    manOfTheMatch: Kul,
    motm: "Dejan Kulusevski",
  },
  {
    id: 11,
    homeTeam: "Man City",
    awayTeam: "Sporting CP",
    scorers: {
      home: ["Foden 4'"],
      away: ["Gyokeres 38', 49' (Pen), 80' (Pen)", "Araujo 46'"],
    },
    timestamp: "2024-11-06T01:45:00",
    time: "FT",
    competition: "Champions League",
    venue: "José Alvalade Stadium",
    competitionLogo: ChampionsLeague,

    manOfTheMatch: Victor,
    motm: "Victor Gyokeres",
  },
  {
    id: 12,
    homeTeam: "Man City",
    awayTeam: "Brighton",
    scorers: {
      home: ["Haaland 23'"],
      away: ["Pedro 78'", "O'Riley 83'"],
    },
    timestamp: "2024-11-09T23:15",
    time: "FT",
    competition: "Premier League",
    venue: "Falmer Stadium",
    competitionLogo: PremierLeagueLogo,

    manOfTheMatch: Pedro,
    motm: "Joao Pedro",
  },
  {
    id: 13,
    homeTeam: "Man City",
    awayTeam: "Tottenham",
    scorers: {
      home: [],
      away: ["Maddison 13', 20'", "Porro 52'", "Johnson 90+3'"],
    },
    timestamp: "2024-11-23T23:15",
    time: "FT",
    competition: "Premier League",
    venue: "Etihad Stadium",
    competitionLogo: PremierLeagueLogo,

    manOfTheMatch: Mad,
    motm: "James Maddison",
  },
  {
    id: 14,
    homeTeam: "Man City",
    awayTeam: "Liverpool",
    scorers: {
      home: [],
      away: ["Gakpo 12'", "Salah 78'(Pen)"],
    },
    timestamp: "2024-12-01T21:45",
    time: "FT",
    competition: "Premier League",
    venue: "Anfield",
    competitionLogo: PremierLeagueLogo,

    manOfTheMatch: Salah,
    motm: "Mohammad Salah",
  },
  {
    id: 15,
    homeTeam: "Man City",
    awayTeam: "Juventus",
    scorers: {
      home: [],
      away: ["Vlahovic 53'", "McKennie 75'"],
    },
    timestamp: "2024-12-12T01:45:00",
    time: "FT",
    competition: "Champions League",
    venue: "Juventus Stadium",
    competitionLogo: ChampionsLeague,

    manOfTheMatch: Vla,
    motm: "Dusan Vlahovic",
  },
  {
    id: 16,
    homeTeam: "Man City",
    awayTeam: "Man United",
    scorers: {
      home: ["Gvardiol 36'"],
      away: ["Fernandes 88'(Pen)", "Amad 90'"],
    },
    timestamp: "2024-12-15T22:15:00",
    time: "FT",

    competition: "Premier League",
    venue: "Etihad Stadium",
    competitionLogo: PremierLeagueLogo,
    manOfTheMatch: Amad,
    motm: "Amad Diallo",
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
    <div className="min-h-screen bg-sky-100 p-6 sm:p-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-sky-900 uppercase">
        Main Matches Results 24/25 Season
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-10">
        {matches
          .sort((a, b) => b.id - a.id) // Sort by id in descending order
          .map((match) => {
            const homeScore = calculateScore(match.scorers.home);
            const awayScore = calculateScore(match.scorers.away);

            // Determine if the venue is "Etihad Stadium"
            const isEtihadStadium = match.venue === "Etihad Stadium";

            return (
              <div
                key={match.id}
                className="bg-white text-sky-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-4"
              >
                <div className="relative">
                  {/* Match Info */}
                  <div className="w-full h-32 sm:h-40 bg-gradient-to-r from-sky-300 to-sky-500 flex items-center justify-between p-4">
                    {/* Conditionally render away team on left if not at Etihad Stadium */}
                    {isEtihadStadium ? (
                      <>
                        <div className="flex flex-col items-center">
                          <img
                            src={teamLogos[match.homeTeam]}
                            alt={`${match.homeTeam} Logo`}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white"
                          />
                          <p className="mt-2 text-sm sm:text-lg font-bold text-white">
                            {match.homeTeam}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl sm:text-3xl font-bold mx-auto text-black">
                            {homeScore} - {awayScore}
                          </p>
                          {match.pen && (
                            <p className="text-lg sm:text-xl font-bold text-sky-800 mt-2">
                              {match.pen}
                            </p>
                          )}
                          <p className="text-md sm:text-xl font-bold mt-1 sm:mt-3 text-gray-100">
                            {match.time}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <img
                            src={teamLogos[match.awayTeam]}
                            alt={`${match.awayTeam} Logo`}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white"
                          />
                          <p className="mt-2 text-sm sm:text-lg font-bold text-white">
                            {match.awayTeam}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col items-center">
                          <img
                            src={teamLogos[match.awayTeam]}
                            alt={`${match.awayTeam} Logo`}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white"
                          />
                          <p className="mt-2 text-sm sm:text-lg font-bold text-white">
                            {match.awayTeam}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl sm:text-3xl font-bold mx-auto text-black">
                            {awayScore} - {homeScore}
                          </p>
                          {match.pen && (
                            <p className="text-lg sm:text-xl font-bold text-sky-800 mt-2">
                              {match.pen}
                            </p>
                          )}
                          <p className="text-md sm:text-xl font-bold mt-1 sm:mt-3 text-gray-100">
                            {match.time}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <img
                            src={teamLogos[match.homeTeam]}
                            alt={`${match.homeTeam} Logo`}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white"
                          />
                          <p className="mt-2 text-sm sm:text-lg font-bold text-white">
                            {match.homeTeam}
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Scorers and Player of the Match */}
                  <div className="p-4 bg-sky-50 rounded-md mt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
                      {isEtihadStadium ? (
                        <>
                          {/* Home Scorers */}
                          <div className="flex-1">
                            <h4
                              className="text-md sm:text-lg font-bold mb-2"
                              style={{ color: teamColors[match.homeTeam] }}
                            >
                              <img
                                src={teamLogos[match.homeTeam]}
                                className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                                alt={`${match.homeTeam} Logo`}
                              />
                            </h4>
                            {match.scorers.home.length > 0 ? (
                              <ul className="list-disc pl-4 space-y-1">
                                {match.scorers.home.map((scorer, index) => (
                                  <li
                                    key={index}
                                    className="text-sm sm:text-base font-semibold text-gray-800"
                                  >
                                    {scorer}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm sm:text-base text-gray-500">
                                No goals scored.
                              </p>
                            )}
                          </div>

                          {/* Player of the Match */}
                          <div className="flex flex-col items-center bg-sky-200 p-3 sm:p-4 rounded-lg shadow-md">
                            <p className="text-sm sm:text-base font-medium text-sky-700 mb-2">
                              Player of the Match
                            </p>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                              <img
                                src={match.manOfTheMatch}
                                alt="Player of the Match"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="mt-2 text-sm sm:text-lg font-bold text-sky-700">
                              {match.motm}
                            </p>
                          </div>

                          {/* Away Scorers */}
                          <div className="flex-1">
                            <h4
                              className="text-md sm:text-lg font-bold mb-2"
                              style={{ color: teamColors[match.awayTeam] }}
                            >
                              <img
                                src={teamLogos[match.awayTeam]}
                                className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                                alt={`${match.awayTeam} Logo`}
                              />
                            </h4>
                            {match.scorers.away.length > 0 ? (
                              <ul className="list-disc pl-4 space-y-1">
                                {match.scorers.away.map((scorer, index) => (
                                  <li
                                    key={index}
                                    className="text-sm sm:text-base font-semibold text-gray-800"
                                  >
                                    {scorer}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm sm:text-base text-gray-500">
                                No goals scored.
                              </p>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Away Scorers */}
                          <div className="flex-1">
                            <h4
                              className="text-md sm:text-lg font-bold mb-2"
                              style={{ color: teamColors[match.awayTeam] }}
                            >
                              <img
                                src={teamLogos[match.awayTeam]}
                                className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                                alt={`${match.awayTeam} Logo`}
                              />
                            </h4>
                            {match.scorers.away.length > 0 ? (
                              <ul className="list-disc pl-4 space-y-1">
                                {match.scorers.away.map((scorer, index) => (
                                  <li
                                    key={index}
                                    className="text-sm sm:text-base font-semibold text-gray-800"
                                  >
                                    {scorer}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm sm:text-base text-gray-500">
                                No goals scored.
                              </p>
                            )}
                          </div>

                          {/* Player of the Match */}
                          <div className="flex flex-col items-center bg-sky-200 p-3 sm:p-4 rounded-lg shadow-md">
                            <p className="text-sm sm:text-base font-medium text-sky-700 mb-2">
                              Player of the Match
                            </p>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                              <img
                                src={match.manOfTheMatch}
                                alt="Player of the Match"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="mt-2 text-sm sm:text-lg font-bold text-sky-700">
                              {match.motm}
                            </p>
                          </div>

                          {/* Home Scorers */}
                          <div className="flex-1">
                            <h4
                              className="text-md sm:text-lg font-bold mb-2"
                              style={{ color: teamColors[match.homeTeam] }}
                            >
                              <img
                                src={teamLogos[match.homeTeam]}
                                className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                                alt={`${match.homeTeam} Logo`}
                              />
                            </h4>
                            {match.scorers.home.length > 0 ? (
                              <ul className="list-disc pl-4 space-y-1">
                                {match.scorers.home.map((scorer, index) => (
                                  <li
                                    key={index}
                                    className="text-sm sm:text-base font-semibold text-gray-800"
                                  >
                                    {scorer}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm sm:text-base text-gray-500">
                                No goals scored.
                              </p>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="p-4 text-center">
                    <FaCalendarAlt className="text-sky-500 text-2xl mb-1 mx-auto" />
                    <p className="text-md sm:text-xl font-semibold text-sky-700">
                      {formatDateTime(match.timestamp)}
                    </p>
                    <img
                      src={match.competitionLogo}
                      className="w-10 sm:w-14 h-10 sm:h-14 mx-auto mt-3 mb-2 rounded-xl"
                      alt={`${match.competition} Logo`}
                    />
                    <p className="text-lg sm:text-xl font-bold text-sky-600">
                      {match.competition}
                    </p>
                    <MdOutlineStadium className="text-sky-500 text-2xl mb-2 mt-4 mx-auto" />
                    <p className="text-sm sm:text-md font-semibold text-gray-600 mt-2">
                      {match.venue}
                    </p>
                    <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full mt-4 text-sm sm:text-base">
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
