import "./CurrentWeatherHero.css";
import { weatherData } from "../../../data.js"; 
import { useState } from "react";
  export function CurrentWeatherCard() {

    const [unit,setUnit]=useState("C");
    const currentTime= new Date().toLocaleTimeString([],{

      hour:"numeric",
      minute:"2-digit",
      hour12:true
    });

    const tempinC = (((weatherData.currentWeather.temperature ?? 32) - 32) * 5 / 9).toFixed(1);
    const tempF= weatherData.currentWeather.temperature ?? 32;
    const feelsLikeC=(((weatherData.currentWeather.feelsLike ?? 32) - 32) * 5 / 9).toFixed(1);
    const feelsLikeF=weatherData.currentWeather.feelsLike ?? 32;

  return (
    <div className="current-weather-card">

      {/* Top Section */}
      <div className="weather-card-header">

        <div>
          <span className="weather-label">Current Weather</span>
          <h3 className="current-time">{currentTime}</h3>
        </div>

        <div className="temperature-unit">
         <select
          value={unit}

          onChange={(e)=>setUnit(e.target.value)}
         >
          <option value="F">Fahrenheit</option>
          <option value="C">Celsius</option>
         </select>
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
          <h1>{unit==="C"? tempinC:tempF}</h1>
          <span>°{unit}</span>
        </div>

        {/* Weather Details */}
        <div className="weather-details">
          <h3>{weatherData.currentWeather.condition}</h3>
          <p>Feels Like {unit==="C" ? feelsLikeC:feelsLikeF}°{unit}</p>
        </div>
      </div>

      {/* Bottom Description */}
      <p className="weather-description">
        There will be mostly sunny skies. The high will be 35°
      </p>

    </div>
  );
}



      