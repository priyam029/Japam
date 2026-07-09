import bell from "../assets/audio/bell.ogg";

export function playBell() {
  const audio = new Audio(bell);

  audio.volume = 0.7;

  audio.play().catch((err) => {
    console.error("Bell sound error:", err);
  });
}