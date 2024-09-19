import { useState } from "react";
import premierLeague from "../assets/images/pl.jpeg";
import faCup from "../assets/images/fa-cup.jpg";
import champ from "../assets/images/cl.jpg";
import shield from "../assets/images/shield.jpg";
import supercup from "../assets/images/super.png";
import fifa from "../assets/images/fifaa.jpg";
import carabao from "../assets/images/carabao.avif";
// Add images for all trophies

const TrophyCabinet = () => {
  const [selectedTrophy, setSelectedTrophy] = useState(null);

  const trophies = [
    {
      name: "Premier League",
      image: premierLeague,
      wins: 10,
      years: [
        "1936/37",
        "1967/68",
        "2011/12",
        "2013/14",
        "2017/18",
        "2018/19",
        "2020/21",
        "2021/22",
        "2022/23",
        "2023/24",
      ],
    },

    {
      name: "FA Cup",
      image: faCup,
      wins: 7,
      years: [
        "1903/04",
        "1933/34",
        "1955/56",
        "1968/69",
        "2010/11",
        "2018/19",
        "2021/22",
      ],
    },

    {
      name: "Champions League",
      image: champ,
      wins: 1,
      years: ["2022/23"],
    },
    {
      name: "Fifa Club World Cup",
      image: fifa,
      wins: 1,
      years: ["2023"],
    },

    {
      name: "Community Shield",
      image: shield,
      wins: 7,
      years: ["1937", "1968", "1972", "2012", "2018", "2019", "2024"],
    },
    {
      name: "UEFA Super Cup",
      image: supercup,
      wins: 1,
      years: ["2022/23"],
    },
    {
      name: "Carabao Cup",
      image: carabao,
      wins: 8,
      years: [
        "1969/70",
        "1975/76",
        "2013/14",
        "2015/16",
        "2017/18",
        "2018/19",
        "2019/20",
        "2020/21",
      ],
    },
    // Add all other trophies with their respective winning years in season format
  ];

  const handleClick = (trophy) => {
    setSelectedTrophy(trophy);
  };

  const closeModal = () => {
    setSelectedTrophy(null);
  };

  return (
    <section className="py-16 bg-sky-200">
      <div className="container mx-auto">
        <h2 className="text-4xl text-sky-700 font-extrabold text-center mb-12 uppercase tracking-wider">
          Trophy Cabinet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trophies.map((trophy, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleClick(trophy)}
            >
              <img
                src={trophy.image}
                alt={trophy.name}
                className="
    w-full h-48 
    object-cover 
    rounded-lg 
    transition-transform 
    duration-500 
    transform 
    hover:scale-105 
    shadow-lg 
    hover:shadow-2xl 
    border-4 
    border-transparent 
    hover:border-blue-500 
    hover:opacity-90 
    bg-gradient-to-b 
    from-transparent 
    to-blue-900 
    hover:from-blue-700 
    hover:to-blue-500
  "
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#004C8C] mb-5 mt-1">
                  {trophy.name}
                </h3>
                <span className="inline-block bg-[#3c9dec] text-white px-7 py-2 rounded-xl font-bold text-lg">
                  {trophy.wins} {trophy.wins > 1 ? "Wins" : "Win"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedTrophy && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#004C8C] mb-4 text-center">
                  {selectedTrophy.name} - Winning Years
                </h3>
                <ul className="text-center">
                  {selectedTrophy.years.map((year, i) => (
                    <li key={i} className="text-lg font-bold  text-[#214e6e]">
                      {year}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={closeModal}
                  className="mt-6 w-full bg-[#3c9dec] text-white py-2 rounded-lg font-bold text-lg hover:bg-[#1e6fb8] transition-colors duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrophyCabinet;
