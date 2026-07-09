import lotus from "../assets/images/lotus.png";
import "../styles/lotus.css";

function LotusPetals() {
  const petals = Array.from({ length: 15 });

  return (
    <div className="lotus-container">
      {petals.map((_, index) => (
        <img
          key={index}
          src={lotus}
          alt="Lotus"
          className="lotus"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

export default LotusPetals;