import "./CurrentWeatherHero.css";
  
  export function CurrentWeatherCard() {
  return (
    <div className="current-weather-card">

      {/* Top Section */}
      <div className="weather-card-header">

        <div>
          <span className="weather-label">Current Weather</span>
          <h3 className="current-time">2:59PM</h3>
        </div>

        <div className="temperature-unit">
          <span>Forenheight</span>
          <span>⌄</span>
        </div>

      </div>

      {/* Middle Section */}
      <div className="weather-main-info">

        {/* Weather Icon */}
        <div className="weather-icon">
          🌤️
        </div>

        {/* Temperature */}
        <div className="temperature">
          <h1>12</h1>
          <span>°F</span>
        </div>

        {/* Weather Details */}
        <div className="weather-details">
          <h3>Rainy</h3>
          <p>Feels Like 35°</p>
        </div>

      </div>

      {/* Bottom Description */}
      <p className="weather-description">
        There will be mostly sunny skies. The high will be 35°
      </p>

    </div>
  );
}



      