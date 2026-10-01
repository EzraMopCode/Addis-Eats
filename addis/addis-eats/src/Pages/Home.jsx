import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-graphic">
        <span role="img" aria-label="Delivery Scooter">🛵</span>
      </div>
      <h2 className="hero-title">Fast, Fresh, Ethiopian.</h2>
      <p className="hero-subtitle">
        Experience the rich, authentic flavors of Addis Ababa, delivered straight to your door in under 30 minutes.
      </p>
      <div className="hero-actions">
        <Link className="add-btn hero-btn" to="/menu">Order Now</Link>
      </div>
    </div>
  );
}

export default Home;
