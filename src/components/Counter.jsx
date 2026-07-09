import { useState } from "react";
import { playBell } from "../utils/playBell";
import "../styles/celebration.css";
import LotusPetals from "./LotusPetals";

function Counter() {
  const [count, setCount] = useState(0);
  const [round, setRound] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [goldenGlow, setGoldenGlow] = useState(false);
  const [showPetals, setShowPetals] = useState(false);

  function handleTap() {
    if (count === 107) {
      // Play bell sound
      playBell();

      // Increase round
      setRound((prev) => prev + 1);

      // Reset count
      setCount(0);

      // Show popup
      setShowPopup(true);
      setGoldenGlow(true);
      setShowPetals(true);

      // Hide popup after 2.5 seconds
      setTimeout(() => {
        setShowPopup(false);
        setGoldenGlow(false);
        setShowPetals(false);
      }, 3000);

      // Vibrate phone (if supported)
      if (navigator.vibrate) {
        navigator.vibrate(300);
      }
    } else {
      setCount((prev) => prev + 1);
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
      <div className="chant-container">

        <div className="om-button" onClick={handleTap}>
          ॐ
        </div>

        <h2>Tap to Chant</h2>

        <h3>{count} / 108</h3>

        <p>Round : {round}</p>

        <button className="restart-btn" onClick={restartRound}>
            🔄 Restart Current Round
        </button>

      </div>
      {goldenGlow && <div className="golden-glow"></div>}

      {showPetals && <LotusPetals />}

      {showPopup && (
        <div className="popup">

          <div className="popup-lamp">🪔</div>

          <h2>🌸 Round Completed 🌸</h2>

          <h3>Round {round}</h3>

          <p>ॐ नमः शिवाय</p>

        </div>
      )}
    </>
  );
}

export default Counter;