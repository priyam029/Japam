import Header from "../components/Header";
import Counter from "../components/Counter";

import shivaBg from "../assets/images/shiva-bg.jpg";

function Home() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${shivaBg})`,
      }}
    >
      <div className="overlay">
        <Header />
        <Counter />
      </div>
    </div>
  );
}

export default Home;