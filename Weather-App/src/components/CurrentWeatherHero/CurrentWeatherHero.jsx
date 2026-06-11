import "./CurrentWeatherHero.css";
import { weatherData } from "../../../data.js"; 
  export function CurrentWeatherCard() {
    const currentTime= new Date().toLocaleTimeString([],{

      hour:"numeric",
      minute:"2-digit",
      hour12:true
    });

    const tempinC = (((weatherData.currentWeather.temperature ?? 32) - 32) * 5 / 9).toFixed(1);

    const feelsLike=(((weatherData.currentWeather.temperature ?? 32) - 32) * 5 / 9).toFixed(1);

  return (
    <div className="current-weather-card">

      {/* Top Section */}
      <div className="weather-card-header">

        <div>
          <span className="weather-label">Current Weather</span>
          <h3 className="current-time">{currentTime}</h3>
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
          <h1>{tempinC}</h1>
          <span>°C</span>
        </div>

        {/* Weather Details */}
        <div className="weather-details">
          <h3>{weatherData.currentWeather.condition}</h3>
          <p>Feels Like {weatherData.currentWeather.feelsLike}</p>
        </div>

      </div>

      {/* Bottom Description */}
      <p className="weather-description">
        There will be mostly sunny skies. The high will be 35°
      </p>

    </div>
  );
}



      