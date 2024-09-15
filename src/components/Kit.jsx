import HomeKit from "../assets/images/homekit.webp";
import AwayKit from "../assets/images/awaykit.webp";
import Third from "../assets/images/thirdkit.webp";
import Fourth from "../assets/images/fourth.webp";
import GK1 from "../assets/images/gk1.png";
import GK2 from "../assets/images/gk2.png";
import GK3 from "../assets/images/gk3.webp";
import PumaLogo from "../assets/images/puma.png"; // Import Puma logo

// Define the Kit component
const Kit = () => {
  // Kit data defined directly in the component
  const kits = [
    {
      name: "Home Kit",
      image: HomeKit,
      sponsor: "Etihad Airways",
      shopLink: "https://shop.mancity.com/en/kits/", // Add official shop link
    },
    {
      name: "Away Kit",
      image: AwayKit,
      sponsor: "Etihad Airways",
      shopLink: "https://shop.mancity.com/en/kits/",
    },
    {
      name: "Third Kit",
      image: Third,
      sponsor: "Etihad Airways",
      shopLink: "https://shop.mancity.com/en/kits/",
    },
    {
      name: "Definitely City - Kit",
      image: Fourth,
      sponsor: "Etihad Airways",
      shopLink: "https://shop.mancity.com/en/kits/",
    },
    {
      name: "GoalKeeper-1",
      image: GK1,
      sponsor: "Etihad Airways",
      shopLink: "https://shop.mancity.com/en/kits/",
    },
    {
      name: "GoalKeeper-2",
      image: GK2,
      sponsor: "Etihad Airways",
      shopLink: "https://shop.mancity.com/en/kits/",
    },
    {
      name: "GoalKeeper-3",
      image: GK3,
      sponsor: "Etihad Airways",
      shopLink: "https://shop.mancity.com/en/kits/",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl text-[#1b3c42] font-bold mb-10 text-center uppercase">
        Manchester City 24/25 Season Kits
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {" "}
        {/* Increase gap */}
        {kits.map((kit, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer p-6 mb-6 bg-white rounded-lg shadow-md"
            onClick={() => window.open(kit.shopLink, "_blank")} // Navigate to shop link
          >
            <div className="w-64 h-64 overflow-hidden rounded-full border-2 border-gray-300 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              <img
                src={kit.image}
                alt={`Manchester City Kit ${kit.name}`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold">{kit.name}</h3>
              <p className="text-lg text-gray-800 font-semibold">
                {kit.sponsor}
              </p>
              <h3 className="text-xl font-bold text-blue-500">
                Click to visit
              </h3>{" "}
              {/* Text styling */}
            </div>
            <img src={PumaLogo} alt="Puma Logo" className="h-10 w-auto mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kit;
