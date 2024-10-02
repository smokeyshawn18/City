import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Schedule from "./components/Schedule.jsx";
import Results from "./components/Result.jsx";
import TrophyCabinet from "./components/Trophy.jsx";
import PlayerSection from "./components/PlayerSection.jsx";
import Footer from "./components/Footer.jsx";
import History from "./components/History.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/results" element={<Results />} />
        <Route path="/trophy-cabinet" element={<TrophyCabinet />} />
        <Route path="/Player-Card" element={<PlayerSection />} />
        <Route path="/History" element={<History />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
