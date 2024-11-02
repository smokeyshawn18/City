import heroImage from "../assets/images/home.jpeg";
// import Tot from "../assets/images/tottenham.webp";
import Bournemouth from "../assets/images/bour.jpg";
import City from "../assets/images/logo.svg";
import { FaMapMarkerAlt, FaClock, FaTicketAlt } from "react-icons/fa";
import { useState, useMemo, useEffect, useCallback } from "react";
import Kit from "./Kit";
import CoachProfile from "./Coach";
import KeyPerformers from "./KeyPerformers";
import Happening from "./Happening";
// import Carabao from "../assets/images/carabao.png";
import PremierLeagueLogo from "../assets/images/prem.webp";

const Home = () => {
  const matchDay = useMemo(
    () => [
      {
        date: "2024-11-02",
        opponent: "Bournemouth",
        time: "20:45", // Match time in user's local time format
        venue: "Vitality Stadium",
        opponentLogo: Bournemouth,
        kick: "Starts in:",
        competition: PremierLeagueLogo,
      },
    ],
    []
  );

  // Function to create a valid local DateTime string
  const getLocalDateTimeString = (date, time) => {
    const localTimeString = `${date}T${time}:00`;
    return new Date(localTimeString);
  };

  // Modified countdown function to start only within 10 hours before the match
  const calculateCountdown = (matchDateTime) => {
    const now = new Date();
    const timeDifference = matchDateTime - now;
    const tenHoursInMs = 10 * 60 * 60 * 1000;

    if (timeDifference > tenHoursInMs) {
      return { hours: "00", minutes: "00", seconds: "00", hasStarted: false };
    }

    if (timeDifference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        hasEnded: true,
        hasStarted: true,
      };
    }

    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return { hours, minutes, seconds, hasEnded: false, hasStarted: true };
  };

  const [todayMatches, setTodayMatches] = useState([]);
  const [countdowns, setCountdowns] = useState({});

  const getTodayMatches = useCallback(() => {
    const today = new Date();
    return matchDay.filter((match) => {
      const matchDateTime = getLocalDateTimeString(match.date, match.time);
      return (
        today.getFullYear() === matchDateTime.getFullYear() &&
        today.getMonth() === matchDateTime.getMonth() &&
        today.getDate() === matchDateTime.getDate()
      );
    });
  }, [matchDay]);

  useEffect(() => {
    setTodayMatches(getTodayMatches());
  }, [getTodayMatches]);

  useEffect(() => {
    const timer = setInterval(() => {
      const newCountdowns = matchDay.reduce((acc, match) => {
        const matchDateTime = getLocalDateTimeString(match.date, match.time);
        const countdown = calculateCountdown(matchDateTime);
        acc[match.opponent] = countdown;
        return acc;
      }, {});

      setCountdowns(newCountdowns);

      // Stop the countdown if all matches have ended or not yet started
      const ongoingMatches = matchDay.filter(
        (match) =>
          newCountdowns[match.opponent]?.hasStarted &&
          !newCountdowns[match.opponent]?.hasEnded
      );

      if (ongoingMatches.length === 0) {
        clearInterval(timer); // Clear the interval if no matches are ongoing
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [matchDay]);

  return (
    <section className="bg-[#f0f8ff] text-gray-800 py-12 lg:py-24">
      <div className="relative container mx-auto px-4 lg:px-8">
        {todayMatches.length > 0 && (
          <div className="mb- rounded-xl py-1 px-6 sm:px-8 lg:px-12 text-white mb-10">
            <h2 className="text-3xl text-gray-800 sm:text-5xl font-bold text-center uppercase mb-12 tracking-wider">
              Match Day
            </h2>

            <div className="flex flex-col items-center gap-12">
              {todayMatches.map((match, index) => (
                <div
                  key={index}
                  className="bg-white text-[#1b3c42] p-6 rounded-lg shadow-xl flex flex-col items-center max-w-md w-full relative"
                >
                  {/* Manchester City vs Opponent Logos */}
                  <div className="flex items-center justify-between gap-4 w-full">
                    <img
                      src={City}
                      alt="Manchester City"
                      className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                    />
                    <div className="text-2xl sm:text-3xl font-extrabold text-gray-700">
                      VS
                    </div>
                    <img
                      src={match.opponentLogo}
                      alt={match.opponent}
                      className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                    />
                  </div>

                  {/* Match Information */}
                  <div className="mt-4 text-center space-y-2 sm:space-y-3">
                    <p className="text-md sm:text-lg text-blue-900 font-bold">
                      {match.date}
                    </p>
                    <div className="flex justify-center items-center gap-1 text-gray-600">
                      <FaClock className="text-sky-500" />
                      <span className="font-bold text-sky-500 text-xl">
                        {match.time}
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-1 text-gray-600">
                      <FaMapMarkerAlt className="text-blue-500" />
                      <span className="font-bold text-xl text-blue-500">
                        {match.venue}
                      </span>
                    </div>
                  </div>
                  <h2 className="mt-4 font-bold text-xl">Kick off in:</h2>
                  {/* Countdown Timer */}
                  {countdowns[match.opponent]?.hasStarted && (
                    <div className="flex items-center justify-center mt-4">
                      <div className="bg-gradient-to-r from-sky-600 to-blue-600 p-6 rounded-lg shadow-lg">
                        {countdowns[match.opponent]?.hasEnded ? (
                          <div className="text-center text-red-700 font-bold text-lg">
                            Match has ended
                          </div>
                        ) : (
                          <div className="grid grid-cols-3 gap-10 text-center">
                            {["hours", "minutes", "seconds"].map((unit, i) => (
                              <div
                                key={i}
                                className="flex flex-col items-center"
                              >
                                <div className="text-4xl font-extrabold text-white">
                                  {countdowns[match.opponent]?.[unit] || "00"}
                                </div>
                                <div className="text-sm text-gray-200 capitalize">
                                  {unit}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Competition Info */}
                  <div className="mt-6">
                    <img
                      src={match.competition}
                      alt="Competition Logo"
                      className="w-10 h-10 sm:w-12 sm:h-12 mx-auto"
                    />
                  </div>

                  {/* Buy Tickets Button */}
                  <div className="mt-6">
                    <a
                      href="https://www.mancity.com/tickets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                    >
                      <FaTicketAlt className="text-xl" />
                      <span>Buy Tickets</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hero Image */}
        <div className="relative h-80 sm:h-96 mb-4">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover rounded-3xl shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60 rounded-3xl"></div>
          <div className="absolute bottom-0 left-0 p-4 sm:p-8 text-white">
            <h1 className="text-4xl sm:text-6xl font-bold">CityPulse</h1>
            <p className="text-md sm:text-lg font-medium mt-2 sm:mt-3">
              Your Home for Manchester City.
            </p>
          </div>
        </div>
        <Happening />
      </div>

      <KeyPerformers />
      <CoachProfile className="mt-4" />
      <Kit />
    </section>
  );
};

export default Home;
