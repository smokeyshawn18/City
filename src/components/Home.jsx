import heroImage from "../assets/images/home.jpeg";
import player1Image from "../assets/images/haaland.jpg";
import player2Image from "../assets/images/kdb.jpg";
import player3Image from "../assets/images/silva.jpg";
import premierLeagueLogo from "../assets/images/prem.webp";
import championsLeagueLogo from "../assets/images/Champ.png";
import Carabao from "../assets/images/carabao.png";
import otherIcon from "../assets/images/sheld.png";
import Opponent from "../assets/images/opponent.jpg";
import Norway from "../assets/images/norway.webp";
import Belgium from "../assets/images/belgium.png";
import Portugal from "../assets/images/portugal.webp";
import { FaMapMarkerAlt, FaClock, FaTicketAlt } from "react-icons/fa";
import Inter from "../assets/images/inter.webp";

import {
  FaHandsHelping,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import { GoGoal } from "react-icons/go";

import { useState, useMemo, useEffect, useCallback } from "react";
import Kit from "./Kit";
import CoachProfile from "./Coach";

const players = [
  {
    name: "Erling Haaland",

    matches: {
      premierLeague: 4,
      championsLeague: 0,
      other: 1,
      Carabao: 0,
      nationalStats: 2,
    },
    goals: {
      premierLeague: 9,
      championsLeague: 0,
      other: 0,
      Carabao: 0,
      nationalStats: 1,
    },
    assists: {
      premierLeague: 0,
      championsLeague: 0,
      other: 0,
      Carabao: 0,
      nationalStats: 0,
    },
    nationalStats: { matches: 2, goals: 1, assists: 0 },
    age: 24,
    position: "ST",
    image: player1Image,
    nimg: Norway,
  },
  {
    name: "Kevin De Bruyne",

    matches: {
      premierLeague: 4,
      championsLeague: 0,
      other: 1,
      Carabao: 0,
      nationalStats: 2,
    },
    goals: {
      premierLeague: 1,
      championsLeague: 0,
      other: 0,
      Carabao: 0,
      nationalStats: 2,
    },
    assists: {
      premierLeague: 1,
      championsLeague: 0,
      other: 0,
      Carabao: 0,
      nationalStats: 0,
    },
    nationalStats: { matches: 2, goals: 2, assists: 0 },
    nimg: Belgium,
    age: 33,
    position: "AM",
    image: player2Image,
  },
  {
    name: "Bernardo Silva",

    matches: {
      premierLeague: 4,
      championsLeague: 0,
      other: 1,
      Carabao: 0,
      nationalStats: 2,
    },
    goals: {
      premierLeague: 0,
      championsLeague: 0,
      other: 1,
      Carabao: 0,
      nationalStats: 0,
    },
    assists: {
      premierLeague: 2,
      championsLeague: 0,
      other: 0,
      Carabao: 0,
      nationalStats: 0,
    },
    nationalStats: { matches: 2, goals: 0, assists: 0 },
    age: 30,
    position: "AM",
    nimg: Portugal,
    image: player3Image,
  },
];

const Home = () => {
  const matchDay = useMemo(
    () => [
      {
        date: "2024-09-18",
        opponent: "Inter Milan",
        time: "23:59",
        venue: "Etihad Stadium",
        opponentLogo: Inter,
        kick: "KickOff in:",
        competition: championsLeagueLogo,
      },
    ],
    []
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const calculateCountdown = (matchDate) => {
    const now = new Date();
    const timeDifference = new Date(matchDate) - now;

    if (timeDifference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const [todayMatches, setTodayMatches] = useState([]);
  const [countdowns, setCountdowns] = useState({});

  const getTodayMatches = useCallback(() => {
    const today = new Date();
    return matchDay.filter((match) => {
      const matchDate = new Date(match.date);
      return (
        today.getFullYear() === matchDate.getFullYear() &&
        today.getMonth() === matchDate.getMonth() &&
        today.getDate() === matchDate.getDate()
      );
    });
  }, [matchDay]);

  useEffect(() => {
    setTodayMatches(getTodayMatches());
  }, [getTodayMatches]);

  useEffect(() => {
    const timer = setInterval(() => {
      const newCountdowns = matchDay.reduce((acc, match) => {
        acc[match.opponent] = calculateCountdown(`${match.date}T${match.time}`);
        return acc;
      }, {});
      setCountdowns(newCountdowns);
    }, 1000);

    return () => clearInterval(timer);
  }, [matchDay]);
  const [expandedPlayerIndex, setExpandedPlayerIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedPlayerIndex(expandedPlayerIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f0f8ff] text-gray-800 py-12 lg:py-24">
      <div className="relative container mx-auto px-4 lg:px-8">
        {todayMatches.length > 0 && (
          <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1b3c42] mb-8">
              Match Day (All time are in Nepal Time.)
            </h2>

            <div className="flex flex-col items-center gap-8">
              {todayMatches.map((match, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center justify-between max-w-4xl w-full"
                >
                  {/* Match Details */}
                  <div className="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-8 w-full">
                    <div className="flex items-center flex-col md:flex-row gap-4">
                      <img
                        src={match.opponentLogo}
                        alt={`${match.opponent} Logo`}
                        className="w-20 h-20 rounded-full border-2 border-gray-300"
                      />
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-blue-800 mb-1">
                          {match.opponent}
                        </h3>
                        <p className="text-gray-600">
                          {formatDate(match.date)}
                        </p>
                        <div className="flex items-center gap-2 text-gray-700 mt-2">
                          <FaClock />
                          <span>{match.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 mt-1">
                          <FaMapMarkerAlt />
                          <span>{match.venue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Square Timer */}
                    <p className="font-bold text-xl mt-2 p-2">{match.kick}</p>
                    <div className="flex items-center justify-center md:mt-0">
                      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white p-3 rounded-md text-center">
                            <div className="text-2xl font-bold text-blue-900">
                              {countdowns[match.opponent]?.hours || "00"}
                            </div>
                            <div className="text-xs text-gray-600">Hours</div>
                          </div>
                          <div className="bg-white p-3 rounded-md text-center">
                            <div className="text-2xl font-bold text-blue-900">
                              {countdowns[match.opponent]?.minutes || "00"}
                            </div>
                            <div className="text-xs text-gray-600">Minutes</div>
                          </div>
                          <div className="bg-white p-3 rounded-md text-center">
                            <div className="text-2xl font-bold text-blue-900">
                              {countdowns[match.opponent]?.seconds || "00"}
                            </div>
                            <div className="text-xs text-gray-600">Seconds</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action and Competition */}
                  <div className="flex flex-col items-center text-[#1b3c42] md:items-end mt-4 md:mt-0">
                    <a
                      href="https://www.mancity.com/tickets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-3"
                    >
                      <FaTicketAlt className="text-2xl" />
                      <span>Buy Tickets</span>
                    </a>

                    <div className="mt-6 flex items-center mx-auto">
                      <img
                        src={match.competition}
                        alt="Competition Logo"
                        className="w-16 h-16"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hero Image */}
        <div className="relative h-96 mb-12">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover rounded-3xl shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60 rounded-3xl"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-6xl font-bold">CityPulse</h1>
            <p className="text-lg font-medium mt-3 ">
              Your Home for Manchester City.
            </p>
          </div>
        </div>
        <CoachProfile />
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-8">
          <h2 className="text-3xl font-extrabold text-[#1b3c42] mb-10 text-center uppercase">
            UCL Opponents - 2024/25
          </h2>

          <div className="flex justify-center">
            <img
              src={Opponent}
              alt="Opponents"
              className="w-full max-w-3xl rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Key Performers Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-[#1b3c42] uppercase tracking-widest">
            Key Performers this Season
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {players.map((player, index) => {
              const totalGoals =
                player.goals.premierLeague +
                player.goals.championsLeague +
                player.goals.Carabao +
                player.goals.other +
                player.goals.nationalStats;

              const totalMatches =
                player.matches.premierLeague +
                player.matches.championsLeague +
                player.matches.Carabao +
                player.matches.other +
                player.matches.nationalStats;

              const totalAssists =
                player.assists.premierLeague +
                player.assists.championsLeague +
                player.assists.Carabao +
                player.assists.other +
                player.assists.nationalStats;

              const isExpanded = expandedPlayerIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="flex flex-col items-center mb-6">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-black mb-4"
                    />
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-[#182d33] uppercase">
                        {player.name}
                      </h3>
                      <img
                        src={player.nimg}
                        alt=""
                        className="w-10 h-8 mx-auto mb-5 mt-3"
                      />
                      <p className="text-lg font-semibold text-[#182d33]">
                        {player.position}
                      </p>

                      <p className="text-[#182d33] font-semibold">
                        Age: {player.age}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {/* Matches */}
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
                      <FaCalendarAlt className="text-black text-2xl mb-2" />
                      <p className="text-xl font-semibold text-black">
                        {totalMatches}
                      </p>
                      <span className="text-sm text-gray-800 font-semibold">
                        Matches
                      </span>
                    </div>
                    {/* Goals */}
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
                      <GoGoal className="text-black text-2xl mb-2" />
                      <p className="text-xl font-semibold text-black">
                        {totalGoals}
                      </p>
                      <span className="text-sm text-gray-800 font-semibold">
                        Goals
                      </span>
                    </div>
                    {/* Assists */}
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl">
                      <FaHandsHelping className="text-black text-2xl mb-2" />
                      <p className="text-xl font-semibold text-black">
                        {totalAssists}
                      </p>
                      <span className="text-sm text-gray-800 font-semibold">
                        Assists
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center justify-center mt-6 text-black"
                  >
                    {isExpanded ? (
                      <>
                        <span className="font-bold text-[#1e2c50] text-lg">
                          Show Less
                        </span>
                        <FaChevronUp className="ml-2 text-[#1e2c50]" />
                      </>
                    ) : (
                      <>
                        <span className="font-bold text-lg text-[#1e2c50]">
                          Show More
                        </span>
                        <FaChevronDown className="ml-2 text-[#1e2c50]" />
                      </>
                    )}
                  </button>

                  {isExpanded && (
                    <div className="mt-6">
                      <div className="bg-gray-50 p-4 rounded-xl mb-4">
                        <div className="flex items-center mb-2">
                          <img
                            src={premierLeagueLogo}
                            alt="Premier League"
                            className="w-8 h-8 mr-2"
                          />
                          <span className="text-[#3D195B] font-semibold">
                            Premier League
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 font-semibold">
                            Matches:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.matches.premierLeague}
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 font-semibold">
                            Goals:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.goals.premierLeague}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-semibold">
                            Assists:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.assists.premierLeague}
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl mb-4">
                        <div className="flex items-center mb-2">
                          <img
                            src={championsLeagueLogo}
                            alt="Champions League"
                            className="w-8 h-8 mr-2"
                          />
                          <span className="text-[#3D195B] font-semibold">
                            Champions League
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 font-semibold">
                            Matches:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.matches.championsLeague}
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 font-semibold">
                            Goals:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.goals.championsLeague}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-semibold">
                            Assists:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.assists.championsLeague}
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl mb-4">
                        <div className="flex items-center mb-2">
                          <img
                            src={Carabao}
                            alt="Carabao Cup"
                            className="w-8 h-8 mr-2"
                          />
                          <span className="text-[#3D195B] font-semibold">
                            Carabao Cup
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 font-semibold">
                            Matches:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.matches.Carabao}
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 font-semibold">
                            Goals:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.goals.Carabao}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-semibold">
                            Assists:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.assists.Carabao}
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl mb-4">
                        <div className="flex items-center mb-2">
                          <img
                            src={player.nimg}
                            alt={`${player.name} national team`}
                            className="w-8 h-8  mr-2"
                          />
                          <span className="text-[#3D195B] font-semibold">
                            National - 24/25 Season
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 font-semibold">
                            Matches:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.nationalStats.matches}
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 font-semibold">
                            Goals:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.nationalStats.goals}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-semibold">
                            Assists:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.nationalStats.assists}
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl mb-4">
                        <div className="flex items-center mb-2">
                          <img
                            src={otherIcon}
                            alt="Other Competitions"
                            className="w-8 h-8 mr-2"
                          />
                          <span className="text-[#3D195B] font-semibold">
                            Community Sheild
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 font-semibold">
                            Matches:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.matches.other}
                          </span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600 font-semibold">
                            Goals:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.goals.other}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-semibold">
                            Assists:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {player.assists.other}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Kit />
    </section>
  );
};

export default Home;
