import Opponent from "../assets/images/gb.jpg";
import Dor from "../assets/images/rodriedit.png";
import Pep from "../assets/images/pepsign.jpg";

function Happening() {
  // Define your items in reverse order (newest first)
  const items = [
    {
      title: "Pep Signs Till 2027, The Journey Continues...",
      image: Pep,
      addedTime: new Date("2024-11-21T10:24:00"),
    },
    {
      title: "Haaland Leading the PL Golden Boot",
      image: Opponent,
      addedTime: new Date("2024-11-19T21:00:00"),
    },
    {
      title: "Congratulation's Rodri for Ballon d'Or",
      image: Dor,
      addedTime: new Date("2024-10-29T04:00:00"),
    },
  ];

  // Map over items to assign id based on the order
  const itemsWithId = items.map((item, index) => ({
    id: items.length - index,
    ...item,
  }));

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-50 p-8 sm:p-12 rounded-3xl shadow-2xl mx-0 max-w-full">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10 text-center uppercase tracking-widest">
        What&apos;s Happening?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsWithId.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:shadow-2xl h-full"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1b3c42] mb-6 text-center uppercase tracking-wide flex items-center">
              {item.title}
            </h2>
            <div className="flex items-center justify-center w-full h-64 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="mt-6 bg-sky-600 text-white text-lg font-semibold px-4 py-2 rounded-md shadow-md text-center">
              {item.addedTime.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}{" "}
              {item.addedTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Happening;
