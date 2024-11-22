import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Results from "./components/Result";
import TrophyCabinet from "./components/Trophy";
import PlayerSection from "./components/PlayerSection";
import Footer from "./components/Footer";
import History from "./components/History";
import News from "./components/News";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/results" element={<Results />} />
        <Route path="/trophy-cabinet" element={<TrophyCabinet />} />
        <Route path="/Player-Card" element={<PlayerSection />} />
        <Route path="/History" element={<History />} />
        {/* Add additional routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
