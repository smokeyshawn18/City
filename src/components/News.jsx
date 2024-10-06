import { FaCalendarAlt } from "react-icons/fa";
import { BsTagFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

// Import images
import Win50 from "../assets/images/50.jpg";
import ACL from "../assets/images/acl.jpg";
import Win30 from "../assets/images/30.jpg";

const newsData = [
  {
    id: uuidv4(), // Generate a unique ID
    title: "Man City Wins & Extends Unbeaten Streak to 50 Games",
    date: "2024-10-06", // Reflecting "yesterday"
    image: Win50,
    description:
      "Manchester City achieved a historic milestone by winning yesterday's game and extending their unbeaten streak to 50 games in all competitions.",
    category: "Match Report",
  },
  {
    id: uuidv4(), // Generate a unique ID
    title: "City Goes 30 Games Unbeaten in Premier League",
    date: "2024-10-06", // Reflecting yesterday's match
    image: Win30,
    description:
      "After a hard-fought match yesterday against Fulham, Manchester City extended their unbeaten run in the Premier League to 30 games, showcasing their dominance in the league this season.",
    category: "Premier League",
  },
  {
    id: uuidv4(), // Generate a unique ID
    title: "Rodri Out for the Season Due to ACL Injury",
    date: "2024-09-22",
    image: ACL,
    description:
      "Manchester City will be without their key midfielder Rodri for the rest of the season after he suffered an ACL injury in training. His absence will be a major blow to the team’s midfield strength.",
    category: "Injury Update",
  },
];

const News = () => {
  const cityBlue = "#6CABDD"; // Man City blue color
  const darkBlue = "#004687"; // Darker accent color

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1
          className="text-4xl font-extrabold text-center mb-10 uppercase tracking-wider"
          style={{ color: darkBlue }}
        >
          Latest CityPulse News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {newsData.map((newsItem) => (
            <div
              key={newsItem.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
                <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">
                  {newsItem.title}
                </h2>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-800 mb-2 font-bold">
                  <FaCalendarAlt className="mr-2" />
                  <span>{newsItem.date}</span>
                </div>
                <p className="text-gray-700 mb-4">{newsItem.description}</p>
                <div className="flex items-center space-x-2 text-gray-600">
                  <BsTagFill style={{ color: cityBlue }} />
                  <span className="text-sm">{newsItem.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
