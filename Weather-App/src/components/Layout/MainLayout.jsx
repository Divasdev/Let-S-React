import { StatsGrid } from "../StatsGrid/StatsGrid";

import { CurrentWeatherCard } from "../CurrentWeatherHero/CurrentWeatherHero";

import { ForecastList } from "../Forecast/ForecastList";
import "./MainLayout.css";

export function MainLayout() {
  return (
    <div className="main-layout">

      {/* Left Column */}
      <div className="left-panel">
            <CurrentWeatherCard />  
            <StatsGrid />
      </div>


      {/* Right Column */}
      <div className="right-panel">
       <ForecastList />
      </div>

    </div>
  );
}