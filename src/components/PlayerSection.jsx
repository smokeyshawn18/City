import PlayerCard from "./PlayerCard.jsx";
import PhilFoden from "../assets/images/foden.jpg";
import ErlingHaaland from "../assets/images/haaland.jpg";
import KevinDeBruyne from "../assets/images/kdb.jpg";
import Rodrigo from "../assets/images/rodrigo.jpg";
import BernardoSilva from "../assets/images/silva.jpg";
import Savinho from "../assets/images/savio.png";
import JackGrealish from "../assets/images/jack.jpg";
import IlkayGundogan from "../assets/images/gundo.webp";
import JeremyDoku from "../assets/images/doku.jpg";
import JoskoGvardiol from "../assets/images/gv.jpg";
import KyleWalker from "../assets/images/walker.jpg";
import MateoKovacic from "../assets/images/kovacic.webp";
import Rico from "../assets/images/rico.jpg";
import Ruben from "../assets/images/ruben.jpg";
import Norway from "../assets/images/norway.webp";
import Belgium from "../assets/images/belgium.png";
import Portugal from "../assets/images/portugal.webp";
import Germany from "../assets/images/germany.png";
import England from "../assets/images/eng.png";
import Croatia from "../assets/images/cro.png";
import Spain from "../assets/images/spain.png";
import Brazil from "../assets/images/brazil.png";
// Sample player data
const players = [
  {
    name: "Erling Haaland",
    position: "ST",
    number: 9,
    country: Norway,
    age: 24,
    image: ErlingHaaland,
    careerStats: {
      goals: 256,
      assists: 53,
      appearances: 312,
    },
    seasonStats: {
      goals: 10,
      assists: 0,
      appearances: 8,
    },
  },
  {
    name: "Kevin De Bruyne",
    position: "AM",
    age: 33,
    country: Belgium,
    number: 17,
    image: KevinDeBruyne,
    careerStats: {
      goals: 177,
      assists: 304,
      appearances: 716,
    },
    seasonStats: {
      goals: 3,
      assists: 1,
      appearances: 7,
    },
  },
  {
    name: "İlkay Gündoğan",
    number: 19,
    position: "CM",
    age: 33,
    country: Germany,
    image: IlkayGundogan,

    careerStats: {
      goals: 112,
      assists: 86,
      appearances: 647,
    },
    seasonStats: {
      goals: 0,
      assists: 0,
      appearances: 3,
    },
  },
  {
    name: "Bernardo Silva",
    position: "AM",
    number: 20,
    country: Portugal,
    age: 30,
    image: BernardoSilva,
    careerStats: {
      goals: 107,
      assists: 114,
      appearances: 598,
    },
    seasonStats: {
      goals: 1,
      assists: 2,
      appearances: 7,
    },
  },

  {
    name: "Phil Foden",
    position: "LW",
    number: 47,
    age: 24,
    country: England,
    image: PhilFoden,
    careerStats: {
      goals: 91,
      assists: 61,
      appearances: 311,
    },
    seasonStats: {
      goals: 0,
      assists: 0,
      appearances: 1,
    },
  },
  {
    name: "Jack Grealish",
    position: "LW",
    number: 10,
    age: 28,
    country: England,
    image: JackGrealish,
    careerStats: {
      goals: 53,
      assists: 74,
      appearances: 412,
    },
    seasonStats: {
      goals: 1,
      assists: 0,
      appearances: 4,
    },
  },
  {
    name: "Rodri",
    number: 16,
    position: "DM",
    age: 28,
    country: Spain,
    image: Rodrigo,
    careerStats: {
      goals: 35,
      assists: 39,
      appearances: 444,
    },
    seasonStats: {
      goals: 0,
      assists: 0,
      appearances: 1,
    },
  },
  {
    name: "Mateo Kovacic",
    number: 8,
    position: "DM",
    age: 30,
    country: Croatia,
    image: MateoKovacic,
    careerStats: {
      goals: 32,
      assists: 55,
      appearances: 640,
    },
    seasonStats: {
      goals: 1,
      assists: 0,
      appearances: 7,
    },
  },
  {
    name: "Jeremy Doku",
    number: 11,
    position: "LW",
    age: 22,
    country: Belgium,
    image: JeremyDoku,
    careerStats: {
      goals: 26,
      assists: 38,
      appearances: 204,
    },
    seasonStats: {
      goals: 0,
      assists: 1,
      appearances: 6,
    },
  },

  {
    name: "Savinho",
    number: 26,
    position: "RW",
    age: 20,
    country: Brazil,
    image: Savinho,
    careerStats: {
      goals: 16,
      assists: 15,
      appearances: 100,
    },
    seasonStats: {
      goals: 0,
      assists: 1,
      appearances: 4,
    },
  },
  {
    name: "Josko Gvardiol",
    number: 24,
    position: "LB",
    age: 22,
    country: Croatia,
    image: JoskoGvardiol,
    careerStats: {
      goals: 16,
      assists: 9,
      appearances: 214,
    },
    seasonStats: {
      goals: 0,
      assists: 0,
      appearances: 7,
    },
  },
  {
    name: "Kyle Walker",
    position: "RB",
    number: 2,
    country: England,
    age: 34,
    image: KyleWalker,
    careerStats: {
      goals: 13,
      assists: 61,
      appearances: 702,
    },
    seasonStats: {
      goals: 0,
      assists: 0,
      appearances: 2,
    },
  },

  {
    name: "Rico Lewis",
    number: 82,
    position: "RB",
    age: 19,
    country: England,
    image: Rico,
    careerStats: {
      goals: 3,
      assists: 5,
      appearances: 51,
    },
    seasonStats: {
      goals: 0,
      assists: 1,
      appearances: 6,
    },
  },
  {
    name: "Ruben Dias",
    number: 3,
    position: "CB",
    age: 27,
    country: Portugal,
    image: Ruben,
    careerStats: {
      goals: 19,
      assists: 11,
      appearances: 375,
    },
    seasonStats: {
      goals: 0,
      assists: 0,
      appearances: 7,
    },
  },
  // Add more players here
];

const PlayerSection = () => {
  return (
    <div className="p-8 bg-gray-900">
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center uppercase tracking-wider ">
        Manchester City Player Stats
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {players.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
      <p className="font-extrabold text-2xl mt-10 p-5 text-center text-white">
        Note:{" "}
        <span className="text-xl font-semibold text-gray-200">
          This season stats include, all club matches and this season
          International stats.
        </span>
        <br />
        <span className="text-xl font-semibold text-gray-200">
          Stats are according to{" "}
          <a
            className="font-bold text-blue-400"
            href="https://www.transfermarkt.com/"
          >
            transfermarket.com
          </a>
        </span>
      </p>
    </div>
  );
};

export default PlayerSection;
