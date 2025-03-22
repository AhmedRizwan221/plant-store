import { useNavigate } from "react-router-dom";
import '../styles/landingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-left">
        <h1 className="landing-title">Paradise Nursery</h1>
        <button className="get-started-btn" onClick={() => navigate("/products")}>
          Get Started
        </button>
      </div>

      <div className="landing-right">
        <p>
          Welcome to Paradise Nursery! We offer a wide variety of beautiful,
          air-purifying, and aromatic houseplants to bring nature into your home.
          Browse our collection and find the perfect plant for your space.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
