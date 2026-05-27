import StatCard from "./StatCard";
import "./StatsGrid.css";
import { weatherData } from "../../../data.js";

export function StatsGrid() {

  return (
    <div className="stats-grid">

      {
        weatherData.weatherStats.map((stat) => {
          return (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          )
        })
      }

    </div>
  );

}
