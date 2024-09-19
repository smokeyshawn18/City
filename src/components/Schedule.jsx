import Arsenal from "../assets/images/arsenal.png";
import Tottenham from "../assets/images/tottenham.webp";
import Liverpool from "../assets/images/lfc.webp";
import ManUnited from "../assets/images/united.png";
import AstonVilla from "../assets/images/aston-villa.png";

import PremierLeagueLogo from "../assets/images/prem.webp";
import ChampionsLeagueLogo from "../assets/images/champions.png";
import ParisSaintGerman from "../assets/images/psg.png";
import Juventus from "../assets/images/juv.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import ManCityLogo from "../assets/images/logo.svg";
import NewCastle from "../assets/images/newcastle.png"; // Assuming Manchester City logo

const matches = [
  {
    date: "2024-09-22",
    opponent: "Arsenal",
    time: "21:15",
    venue: "Etihad Stadium",
    competition: "Premier League",
    opponentLogo: Arsenal,
    competitionLogo: PremierLeagueLogo,
  },
  {
    date: "2024-09-28",
    opponent: "NewCastle United",
    time: "17:15",
    venue: "St James' Park",
    competition: "Premier League",
    opponentLogo: NewCastle,
    competitionLogo: PremierLeagueLogo,
  },
  {
    date: "2024-10-02",
    opponent: "PSG",
    time: "21:15",
    venue: "Parc des Princes",
    competition: "Champions League",
    opponentLogo: ParisSaintGerman,
    competitionLogo: ChampionsLeagueLogo,
  },
  {
    date: "2024-10-22",
    opponent: "Juventus",
    time: "21:15",
    venue: "Etihad Stadium",
    competition: "Premier League",
    opponentLogo: Juventus,
    competitionLogo: PremierLeagueLogo,
  },
  {
    date: "2024-11-23",
    opponent: "Tottenham",
    time: "20:45",
    venue: "Etihad Stadium",
    competition: "Premier League",
    opponentLogo: Tottenham,
    competitionLogo: PremierLeagueLogo,
  },
  {
    date: "2024-11-30",
    opponent: "Liverpool",
    time: "20:45",
    venue: "Etihad Stadium",
    competition: "Premier League",
    opponentLogo: Liverpool,
    competitionLogo: PremierLeagueLogo,
  },
  {
    date: "2024-12-14",
    opponent: "Man United",
    time: "20:45",
    venue: "Etihad Stadium",
    competition: "Premier League",
    opponentLogo: ManUnited,
    competitionLogo: PremierLeagueLogo,
  },
  {
    date: "2024-12-21",
    opponent: "Aston Villa",
    time: "20:45",
    venue: "Villa Park",
    competition: "Premier League",
    opponentLogo: AstonVilla,
    competitionLogo: PremierLeagueLogo,
  },
];

const formatDateTime = (date, time) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(`${date}T${time}`).toLocaleDateString(
    "en-GB",
    options
  );
  const formattedTime = new Date(`${date}T${time}`).toLocaleTimeString(
    "en-GB",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
  return `${formattedDate} at ${formattedTime}`;
};

const Schedule = () => {
  const currentDateTime = new Date();

  // Filter out matches that have already occurred
  const upcomingMatches = matches.filter((match) => {
    const matchDateTime = new Date(`${match.date}T${match.time}`);
    return matchDateTime > currentDateTime; // Keep matches that are in the future
  });

  return (
    <section id="schedule" className="bg-gray-900 py-15">
      <div className="container mx-auto px-2">
        <h2 className="text-white text-3xl font-extrabold text-center mb-2 mt-8 uppercase tracking-wider">
          Upcoming Matches
        </h2>
        <h2 className="text-white text-xl font-medium text-center mb-2 uppercase tracking-wide">
          All times are in NPT
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 p-8 bg-darkblue min-h-screen">
          {upcomingMatches.length > 0 ? (
            upcomingMatches.map((match, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative">
                  <div className="w-full h-40 bg-gradient-to-r from-[#31607f] to-[#002f6c] flex items-center justify-center text-center text-white">
                    {/* Manchester City as Home Team */}
                    <div className="absolute left-4 flex flex-col items-center">
                      <img
                        src={ManCityLogo} // Manchester City Logo
                        alt="Manchester City"
                        className="w-24 h-24 rounded-full border-2 border-white"
                      />
                      <p className="mt-2 text-lg font-semibold">Man City</p>
                    </div>

                    {/* VS Text */}
                    <p className="text-3xl font-bold mx-8">VS</p>

                    {/* Away Team (Opponent) */}
                    <div className="absolute right-4 flex flex-col items-center">
                      <img
                        src={match.opponentLogo}
                        alt={match.opponent}
                        className="w-24 h-24 rounded-full border-2 border-white"
                      />
                      <p className="mt-2 text-lg font-semibold">
                        {match.opponent}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 text-center">
                    <FaCalendarAlt className="text-blue-500 text-2xl mb-2 mx-auto" />
                    <p className="text-xl font-semibold text-blue-200">
                      {formatDateTime(match.date, match.time)}
                    </p>
                    <img
                      src={match.competitionLogo}
                      className="w-14 h-14 mx-auto mt-3 mb-3"
                      alt={`${match.competition} Logo`}
                    />
                    <p className="text-xl font-bold text-blue-300">
                      {match.competition}
                    </p>

                    <p className="text-md font-semibold text-gray-200 mt-4">
                      {match.venue}
                    </p>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
                      Enjoy The Game
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center">No upcoming matches.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
