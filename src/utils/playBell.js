import bell from "../assets/audio/bell.mp3";
import background from "../assets/audio/background.mp3";

const bellAudio = new Audio(bell);
bellAudio.volume = 0.8;

const bgAudio = new Audio(background);
bgAudio.loop = true;
bgAudio.volume = 0.25;

export function playBell() {
  bellAudio.currentTime = 0;
  bellAudio.play().catch((err) => {
    console.error("Bell:", err);
  });
}

export function playBackground() {
  bgAudio.play().catch((err) => {
    console.error(err);
  });
}

export function pauseBackground() {
  bgAudio.pause();
}