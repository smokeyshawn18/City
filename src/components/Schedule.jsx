import Arsenal from "../assets/images/arsenal.png";
import Tottenham from "../assets/images/tottenham.webp";
import Liverpool from "../assets/images/lfc.webp";
import ManUnited from "../assets/images/united.png";
import AstonVilla from "../assets/images/aston-villa.png";

import PremierLeagueLogo from "../assets/images/prem.webp";
import ChampionsLeagueLogo from "../assets/images/champions.png";
import ParisSaintGerman from "../assets/images/psg.png";
import Juventus from "../assets/images/juv.jpg";

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
    opponent: "NewCastle",
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
    <section id="schedule" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-[#0047AB] text-3xl font-bold text-center mb-6 uppercase">
          Upcoming Matches
        </h2>
        <h3 className="text-gray-500 text-lg text-center mb-6">
          All times are in NPT
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingMatches.length > 0 ? (
            upcomingMatches.map((match, index) => (
              <div
                key={index}
                className="bg-[#E6F1FA] rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between p-4 bg-[#B0D1E6] rounded-t-lg">
                  <div className="flex flex-col items-center">
                    <img
                      src={ManCityLogo}
                      alt="Manchester City"
                      className="w-20 h-20 rounded-full border-2 border-white"
                    />
                    <p className="mt-2 text-lg font-semibold text-[#0047AB]">
                      Man City
                    </p>
                  </div>

                  <p className="text-2xl font-bold text-gray-700">VS</p>

                  <div className="flex flex-col items-center">
                    <img
                      src={match.opponentLogo}
                      alt={match.opponent}
                      className="w-20 h-20 rounded-full border-2 border-white"
                    />
                    <p className="mt-2 text-lg font-semibold text-[#0047AB]">
                      {match.opponent}
                    </p>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <p className="text-lg font-semibold text-gray-600">
                    {formatDateTime(match.date, match.time)}
                  </p>
                  <img
                    src={match.competitionLogo}
                    alt={`${match.competition} Logo`}
                    className="w-10 h-10 mx-auto my-4"
                  />
                  <p className="text-xl font-bold text-[#0047AB]">
                    {match.competition}
                  </p>
                  <p className="text-gray-500">{match.venue}</p>

                  <button className="bg-[#0047AB] text-white font-semibold py-2 px-6 rounded-full mt-4 hover:bg-[#003578] transition-colors">
                    Enjoy The Game
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No upcoming matches.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
