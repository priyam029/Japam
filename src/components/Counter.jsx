import { useState, useEffect } from "react";
import {
  playBell,
  playBackground,
  pauseBackground,
} from "../utils/playBell";

import "../styles/celebration.css";
import LotusPetals from "./LotusPetals";
import { Volume2, VolumeX } from "lucide-react";

function Counter() {
  const [count, setCount] = useState(0);
  const [round, setRound] = useState(0);

  const [showPopup, setShowPopup] = useState(false);
  const [goldenGlow, setGoldenGlow] = useState(false);
  const [showPetals, setShowPetals] = useState(false);

  const [musicPlaying, setMusicPlaying] = useState(true);

  // Automatically start background music
useEffect(() => {
  playBackground();

  return () => {
    pauseBackground();
  };
}, []);

  function handleTap() {
    if (count === 107) {

      playBell();

      setRound((prev) => prev + 1);
      setCount(0);

      setShowPopup(true);
      setGoldenGlow(true);
      setShowPetals(true);

      setTimeout(() => {
        setShowPopup(false);
        setGoldenGlow(false);
        setShowPetals(false);
      }, 3000);

      if (navigator.vibrate) {
        navigator.vibrate(300);
      }

    } else {
      setCount((prev) => prev + 1);
    }
  }

  function toggleMusic() {

    if (musicPlaying) {
      pauseBackground();
      setMusicPlaying(false);
    } else {
      playBackground();
      setMusicPlaying(true);
    }

  }

  function restartRound() {

    const confirmReset = window.confirm(
      "Restart the current chanting round?"
    );

    if (confirmReset) {
      setCount(0);
    }

  }

  return (
    <>
      {/* Floating Music Icon */}

      <button
        className="music-toggle"
        onClick={toggleMusic}
      >
        {musicPlaying ? (
          <Volume2 size={26} />
        ) : (
          <VolumeX size={26} />
        )}
      </button>

      <div className="chant-container">

        <div className="om-button" onClick={handleTap}>
          ॐ
        </div>

        <h2>Tap to Chant</h2>

        <h3>{count} / 108</h3>

        <p>Round : {round}</p>

        <button
          className="restart-btn"
          onClick={restartRound}
        >
          🔄 Restart Current Round
        </button>

      </div>

      {goldenGlow && <div className="golden-glow"></div>}

      {showPetals && <LotusPetals />}

      {showPopup && (

        <div className="popup">

          <div className="popup-lamp">
            🪔
          </div>

          <h2>🌸 Round Completed 🌸</h2>

          <h3>Round {round}</h3>

          <p>ॐ नमः शिवाय</p>

        </div>

      )}

    </>
  );
}

export default Counter;