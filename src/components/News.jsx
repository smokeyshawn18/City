import { FaCalendarAlt } from "react-icons/fa";
import { BsTagFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

// Import images
import Win50 from "../assets/images/50.jpg";
import ACL from "../assets/images/acl.jpg";
import Win30 from "../assets/images/30.jpg";
import Plnews from "../assets/images/plnews.jpg";

// News data with static time
const newsData = [
  {
    id: uuidv4(),
    title: "Man City Wins & Extends Unbeaten Streak to 50 Games",
    date: "2024-10-06",
    time: "18:30", // Static time
    image: Win50,
    description:
      "Manchester City achieved a historic milestone by winning yesterday's game and extending their unbeaten streak to 50 games in Home.",
    category: "Match Report",
  },
  {
    id: uuidv4(),
    title: "City Goes 30 Games Unbeaten in Premier League",
    date: "2024-10-06",
    time: "18:45", // Static time
    image: Win30,
    description:
      "After a hard-fought match yesterday against Fulham, Manchester City extended their unbeaten run in the Premier League to 30 games, showcasing their dominance in the league this season.",
    category: "Premier League",
  },
  {
    id: uuidv4(),
    title: "Rodri Out for the Season Due to ACL Injury",
    date: "2024-09-22",
    time: "16:00", // Static time
    image: ACL,
    description:
      "Manchester City will be without their key midfielder Rodri for the rest of the season after he suffered an ACL injury in training. His absence will be a major blow to the team’s midfield strength.",
    category: "Injury Update",
  },
  {
    id: uuidv4(),
    title: "Unbeaten in League since 2023, just Pep things!",
    date: "2024-10-07",
    time: "19:00", // Static time
    image: Plnews,
    description: "How far will City go? Already 30 games unbeaten.",
    category: "Premier League",
  },
];

const News = () => {
  const cityBlue = "#6CABDD"; // Man City blue color
  const darkBlue = "#004687"; // Darker accent color

  // Sort newsData by date and time
  const sortedNewsData = newsData.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateB - dateA; // Sort in descending order
  });

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
          {sortedNewsData.map((newsItem) => (
            <div
              key={newsItem.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="object-contain w-full h-full"
                  style={{ objectFit: "contain" }} // Ensure the image is fully displayed
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
                <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">
                  {newsItem.title}
                </h2>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-800 mb-2 font-bold">
                  <FaCalendarAlt className="mr-2" />
                  <span>
                    {newsItem.date} at {newsItem.time}
                  </span>
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
