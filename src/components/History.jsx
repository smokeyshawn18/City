import foundationImg from "../assets/images/found.jpg";
import renameImg from "../assets/images/logo.svg";
import firstTitleImg from "../assets/images/ftit.avif";
import trebleImg from "../assets/images/foundation.webp";
import stadiumImg from "../assets/images/etihad.jpg";
import leagueCupImg from "../assets/images/league.png";
import Goat from "../assets/images/pep.jpg";
import Evolution from "../assets/images/logoevo.jpg";
import TopScorers from "./TopScorers";

const timelineData = [
  {
    year: "1880",
    title: "Foundation",
    description:
      "Manchester City’s roots began in East Manchester, starting as St Mark’s West Gorton.",
    image: foundationImg,
    textColor: "#004C8C",
  },
  {
    year: "1894",
    title: "Renamed",
    description: "The club was renamed to Manchester City.",
    image: renameImg,
    textColor: "#1C2C5B",
  },
  {
    year: "1968",
    title: "First League Title",
    description: "City wins their first league title.",
    image: firstTitleImg,
    textColor: "#1C2C5B",
  },
  {
    year: "Logo evolution",
    title: "",
    description: "When did you start supporting Man City?",
    image: Evolution,
    textColor: "#1C2C5B",
  },
  {
    year: "2016-Present",
    title: "Pep Guardiola",
    description:
      "Manchester City has won 18 trophies during Pep Guardiola’s era.",
    image: Goat,
    textColor: "#1C2C5B",
  },
  {
    year: "2023",
    title: "Treble Winners",
    description:
      "Manchester City wins the Premier League, FA Cup, and Champions League.",
    image: trebleImg,
    textColor: "#1C2C5B",
  },
  {
    year: "2002",
    title: "Etihad Stadium",
    description: "Manchester City opens its new state-of-the-art stadium.",
    image: stadiumImg,
    textColor: "#1C2C5B",
  },
  {
    year: "2020-2024",
    title: "Four in a row",
    description:
      "Manchester City dominated the League Cup, winning it FOUR TIMES IN A ROW.",
    image: leagueCupImg,
    textColor: "#1C2C5B",
  },
];

function History() {
  return (
    <>
      <div className="w-full min-h-screen bg-sky-100 py-16 px-5 flex flex-col items-center">
        <h1 className="uppercase text-sky-900 text-4xl sm:text-5xl font-extrabold tracking-widest mb-8 text-center">
          Manchester City History
        </h1>
        <h2 className="text-xl sm:text-2xl text-sky-800 font-bold tracking-wide mb-4 text-center">
          Number one Club in the World (According to{" "}
          <strong className="text-[#6CABDD] font-extrabold">
            UEFA Rankings
          </strong>
          ).
        </h2>

        <div className="w-full max-w-7xl py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Timeline Cards */}
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="bg-white text-[#004C8C] border border-[#004C8C] rounded-2xl shadow-lg p-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-extrabold mb-2 text-[#1C2C5B] text-center">
                  {item.year}
                </h3>
                <p className="text-lg font-semibold text-center">
                  <strong className="uppercase">{item.title}-</strong>{" "}
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TopScorers />
    </>
  );
}

export default History;
