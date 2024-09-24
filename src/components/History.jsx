import foundationImg from "../assets/images/found.jpg";
import renameImg from "../assets/images/logo.svg";
import firstTitleImg from "../assets/images/ftit.avif";
import trebleImg from "../assets/images/foundation.webp";
import stadiumImg from "../assets/images/etihad.jpg";
import leagueCupImg from "../assets/images/league.png";
import Goat from "../assets/images/pep.jpg"; // Example new image

function History() {
  return (
    <div className="w-full min-h-screen bg-sky-100  py-16 px-5 flex flex-col items-center">
      <h1 className="uppercase text-sky-900 text-4xl sm:text-4xl font-extrabold tracking-widest mb-8 text-center">
        Manchester City History
      </h1>
      <h2 className="text-xl sm:text-2xl text-sky-800 font-bold tracking-wide mb-4 text-center">
        Number one Club in the World (According to{" "}
        <strong className="text-blue-800 font-extrabold">UEFA Rankings</strong>
        ).
      </h2>

      <div className="w-full max-w-7xl py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Timeline Cards */}
          <div className="bg-white text-blue-800 border border-blue-800 rounded-xl shadow-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <img
              src={foundationImg}
              alt="Foundation"
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h3 className="text-3xl font-extrabold mb-2 text-[#1C2C5B]">
              1880
            </h3>
            <p className="text-lg font-semibold">
              <strong className="uppercase">Foundation:</strong> Manchester
              City&apos;s roots began in East Manchester, starting as St
              Mark&apos;s West Gorton.
            </p>
          </div>

          <div className="bg-white text-[#1C2C5B] border border-blue-800 rounded-xl shadow-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <img
              src={renameImg}
              alt="Renamed to Manchester City"
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h3 className="text-3xl font-extrabold mb-2">1894</h3>
            <p className="text-lg font-semibold">
              <strong className="uppercase">Renamed:</strong> The club renamed
              to Manchester City.
            </p>
          </div>

          <div className="bg-white text-[#1C2C5B] border border-blue-800 rounded-xl shadow-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <img
              src={firstTitleImg}
              alt="First League Title"
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h3 className="text-3xl font-extrabold mb-2">1968</h3>
            <p className="text-lg font-semibold">
              <strong className="uppercase">First League Title:</strong> City
              wins their first league title.
            </p>
          </div>

          <div className="bg-white text-[#1C2C5B] border border-blue-800 rounded-xl shadow-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <img
              src={Goat}
              alt="THE GOAT"
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h3 className="text-3xl font-extrabold mb-2">2016-Present</h3>
            <p className="text-lg font-semibold">
              <p className="text-lg font-semibold">
                <strong className="uppercase">Pep Guardiola:</strong> Manchester
                City has won <strong className="font-extrabold">18</strong>{" "}
                trophies during Pep Guardiola&apos;s era.
              </p>
            </p>
          </div>

          <div className="bg-white text-[#1C2C5B] border border-blue-800 rounded-xl shadow-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <img
              src={trebleImg}
              alt="Treble Winners"
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h3 className="text-3xl font-extrabold mb-2">2023</h3>
            <p className="text-lg font-semibold">
              <strong className="uppercase">Treble Winners:</strong> Manchester
              City wins the Premier League, FA Cup, and Champions League.
            </p>
          </div>

          <div className="bg-white text-[#1C2C5B] border border-blue-800 rounded-xl shadow-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <img
              src={stadiumImg}
              alt="New Stadium"
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h3 className="text-3xl font-extrabold mb-2">2002</h3>
            <p className="text-lg font-semibold">
              <strong className="uppercase">Etihad Stadium:</strong> Manchester
              City opens its new state-of-the-art stadium.
            </p>
          </div>

          <div className="bg-white text-[#1C2C5B] border border-blue-800 rounded-xl shadow-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <img
              src={leagueCupImg}
              alt="League Cup Dominance"
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-extrabold mb-2 text-center">
              2020-2024
            </h3>
            <p className="text-lg font-semibold">
              <strong className="uppercase">Four in a row:</strong> Manchester
              City dominated the League Cup, winning it{" "}
              <strong className="font-extrabold">FOUR TIMES IN A ROW.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
