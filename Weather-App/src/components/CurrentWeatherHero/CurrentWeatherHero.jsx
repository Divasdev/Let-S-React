import "./CurrentWeatherHero.css";



import { useState } from "react";
export function CurrentWeatherCard({ weatherData }) {
   const [unit,setUnit]=useState("C");
  if (!weatherData) {
    return <p>Loading...</p>;
  }

   
    const currentTime= new Date().toLocaleTimeString([],{

      hour:"numeric",
      minute:"2-digit",
      hour12:true
    });

    const tempinC = weatherData.current.temp_c;
    const tempF= weatherData.current.temp_f;

    const feelsLikeC = weatherData.current.feelslike_c;
    const feelsLikeF = weatherData.current.feelslike_f;

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
          <h3>{weatherData.current.condition.text}</h3>
          <p>Feels Like {unit==="C" ? feelsLikeC:feelsLikeF}°{unit}</p>
        </div>
      </div>

      {/* Bottom Description */}
      <p className="weather-description">
        {weatherData.current.condition.text}
      </p>

    </div>
  );
}



      