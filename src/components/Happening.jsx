import Opponent from "../assets/images/opponent.jpg";
import Dor from "../assets/images/dor.jpg";

function Happening() {
  // Define your items in reverse order (newest first)
  const items = [
    {
      title:
        "Meet our first Man City Player to win Ballon D'or, Congratulation's Rodri for Ballon d'Or",
      image: Dor,
      // Set a specific date and time for this event
      addedTime: new Date("2024-10-29T04:00:00"), // Example date and time
    },
    {
      title: "UCL Opponents - 2024/25",
      image: Opponent,
      // Set a specific date and time for this event
      addedTime: new Date("2024-10-18T11:00:00"), // Example date and time
    },
  ];

  // Map over items to assign id based on the order
  const itemsWithId = items.map((item, index) => ({
    id: items.length - index, // Newest item gets the highest id
    ...item,
  }));

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-50 p-8 sm:p-12 rounded-3xl shadow-2xl mx-0 max-w-full">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10 text-center uppercase tracking-widest">
        What&apos;s Happening?
      </h1>

      {itemsWithId.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center mb-12 p-6 bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:shadow-2xl w-full sm:max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b3c42] mb-10 text-center uppercase tracking-wide flex items-center">
            {item.title}
          </h2>
          <img
            src={item.image}
            alt={item.title}
            className="w-full max-w-3xl rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="mt-10 bg-sky-600 text-white text-lg font-semibold px-4 py-2 rounded-md shadow-md text-center">
            {item.addedTime.toLocaleDateString()}{" "}
            {item.addedTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Happening;
