import Arsenal from "../assets/images/arsenal.png";
import Tottenham from "../assets/images/tottenham.webp";
import Liverpool from "../assets/images/lfc.webp";
import ManUnited from "../assets/images/united.png";
import AstonVilla from "../assets/images/aston-villa.png";
import InterMilan from "../assets/images/inter.png";
import PremierLeagueLogo from "../assets/images/prem.webp";
import ChampionsLeagueLogo from "../assets/images/champions.png";
import ParisSaintGerman from "../assets/images/psg.png";
import Juventus from "../assets/images/juv.jpg";

const matches = [
  {
    date: "2024-09-19",
    opponent: "Inter Milan",
    time: "12:45",
    venue: "Etihad Stadium",
    competition: "Champions League",
    opponentLogo: InterMilan,
    competitionLogo: ChampionsLeagueLogo,
  },
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
  return (
    <section id="schedule" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-extrabold text-center mb-6 uppercase tracking-wider">
          Upcoming Matches
        </h2>
        <h2 className="text-white text-xl font-medium text-center mb-12 uppercase tracking-wide">
          All times are in NPT
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {matches.map((match, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-4 text-center">
                <img
                  src={match.opponentLogo}
                  alt={`${match.opponent} Logo`}
                  className="w-24 h-24 mb-4 mx-auto rounded-full border-4 border-white"
                />
                <h3 className="text-xl font-bold mb-2 text-blue-300">
                  {match.opponent}
                </h3>
                <p className="text-blue-200 text-base mb-1 font-bold">
                  <strong>Date & Time:</strong>
                </p>
                <p className="text-blue-200 text-base mb-2 font-semibold">
                  {formatDateTime(match.date, match.time)}
                </p>
                <p className="text-blue-200 text-base mb-1 font-bold">
                  <strong>Venue:</strong>
                </p>
                <p className="text-blue-200 text-base mb-4 font-semibold">
                  {match.venue}
                </p>
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={match.competitionLogo}
                    alt={`${match.competition} Logo`}
                    className="w-16 h-16 mr-2 mb-2 mt-2"
                  />
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                  Enjoy The Game
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
