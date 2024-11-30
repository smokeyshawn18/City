import heroImage from "../assets/images/home.jpeg";
import Tot from "../assets/images/lfc.webp";

import City from "../assets/images/logo.svg";
import { FaMapMarkerAlt, FaClock, FaTicketAlt } from "react-icons/fa";
import { useState, useMemo, useEffect, useCallback } from "react";
import Kit from "./Kit";
import CoachProfile from "./Coach";
import KeyPerformers from "./KeyPerformers";
import Happening from "./Happening";
import PremierLeagueLogo from "../assets/images/prem.webp";

const Home = () => {
  const matchDay = useMemo(
    () => [
      {
        date: "2024-12-01",
        opponent: "Liverpool",
        team: "Man City",
        time: "21:45", // Match time in local format
        venue: "Anfield",
        opponentLogo: Tot,
        competition: PremierLeagueLogo,
      },
    ],
    []
  );

  const getLocalDateTime = (date, time) => {
    return new Date(`${date}T${time}:00`);
  };

  const calculateCountdown = (matchDateTime) => {
    const now = new Date();
    const timeDifference = matchDateTime - now;

    if (timeDifference <= 0) {
      return {
        hours: "00",
        minutes: "00",
        seconds: "00",
        hasEnded: true,
        hasStarted: false,
      };
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
      hasEnded: false,
      hasStarted: true,
    };
  };

  const [todayMatches, setTodayMatches] = useState([]);
  const [countdowns, setCountdowns] = useState({});

  const getTodayMatches = useCallback(() => {
    const today = new Date();
    return matchDay.filter((match) => {
      const matchDateTime = getLocalDateTime(match.date, match.time);
      return (
        today.toDateString() === matchDateTime.toDateString() // Matches only today
      );
    });
  }, [matchDay]);

  useEffect(() => {
    setTodayMatches(getTodayMatches());
  }, [getTodayMatches]);

  useEffect(() => {
    if (todayMatches.length === 0) return;

    const timer = setInterval(() => {
      const updatedCountdowns = todayMatches.reduce((acc, match) => {
        const matchDateTime = getLocalDateTime(match.date, match.time);
        acc[match.opponent] = calculateCountdown(matchDateTime);
        return acc;
      }, {});

      setCountdowns(updatedCountdowns);

      const allMatchesEnded = todayMatches.every(
        (match) => updatedCountdowns[match.opponent]?.hasEnded
      );

      if (allMatchesEnded) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [todayMatches]);

  return (
    <section className="bg-[#f0f8ff] text-gray-800 py-12 lg:py-24">
      <div className="relative container mx-auto px-4 lg:px-8">
        {todayMatches.length > 0 && (
          <div className="mb-10 rounded-xl py-1 px-6 sm:px-8 lg:px-12 text-white">
            <h2 className="text-3xl text-gray-800 sm:text-5xl font-bold text-center uppercase mb-12 tracking-wider">
              Match Day
            </h2>

            <div className="flex flex-col items-center gap-12">
              {todayMatches.map((match, index) => (
                <div
                  key={index}
                  className="bg-white text-[#1b3c42] p-6 rounded-lg shadow-xl flex flex-col items-center max-w-md w-full relative"
                >
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

                  <div className="mt-4 text-center space-y-2 sm:space-y-3">
                    <p className="text-xl sm:text-xl text-sky-700 font-bold">
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

                  {countdowns[match.opponent] && (
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

                  <div className="mt-6">
                    <img
                      src={match.competition}
                      alt="Competition Logo"
                      className="w-10 h-10 sm:w-12 sm:h-12 mx-auto"
                    />
                  </div>

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
