function Welcome({ onEnter }) {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1>👋 Hello, Welcome to</h1>
        <h2>🏨 Hotel VS</h2>

        <div className="welcome-tagline">
          <p>✨ Book Your Stay Easily & Comfortably ✨</p>
        </div>

        <div className="welcome-features">
          <div className="feature-box">🛏️ Luxury Rooms</div>
          <div className="feature-box">💰 Best Prices</div>
          <div className="feature-box">⭐ Top Rated</div>
        </div>

        <button className="enter-btn" onClick={onEnter}>
          Enter Dashboard 🚀
        </button>
      </div>
    </div>
  );
}

export default Welcome;