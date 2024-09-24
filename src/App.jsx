import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Schedule from "./components/Schedule.jsx";
import Results from "./components/Result.jsx";
import TrophyCabinet from "./components/Trophy.jsx";
import PlayerSection from "./components/PlayerSection.jsx";
import Footer from "./components/Footer.jsx";
import History from "./components/History.jsx";
import { useEffect, useRef } from "react";

const App = () => {
  const deferredPrompt = useRef(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      deferredPrompt.current = e;
      const installButton = document.getElementById("install-button");
      if (installButton) installButton.style.display = "block"; // Show the install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt.current) {
      deferredPrompt.current.prompt();
      const { outcome } = await deferredPrompt.current.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      }
      deferredPrompt.current = null;
      const installButton = document.getElementById("install-button");
      if (installButton) installButton.style.display = "none"; // Hide the button after installation
    }
  };

  return (
    <Router>
      <Navbar />
      <div className="install-button-container">
        <button
          id="install-button"
          onClick={handleInstall}
          style={{ display: "none" }}
          className="install-button"
        >
          Install App
        </button>
      </div>
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
