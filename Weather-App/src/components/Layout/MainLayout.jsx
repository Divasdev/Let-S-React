import { StatsGrid } from "../StatsGrid/StatsGrid";

import { CurrentWeatherCard } from "../CurrentWeatherHero/CurrentWeatherHero";

import { ForecastList } from "../Forecast/ForecastList";
import { SunMoonCard } from "../SunMoonCard/SunMoonCard";
import "./MainLayout.css";

export function MainLayout({
  weatherData,
  isLoading,
  error
}) {
  return (
    <div className="main-layout">

      {/* Left Column */}
      <div className="left-panel">
            <CurrentWeatherCard 
              weatherData={weatherData}
            />  
            <StatsGrid weatherData={weatherData} />
            <SunMoonCard weatherData={weatherData} />

      </div>


      {/* Right Column */}
      <div className="right-panel">
       <ForecastList weatherData={weatherData} />
      </div>

    </div>
  );
}