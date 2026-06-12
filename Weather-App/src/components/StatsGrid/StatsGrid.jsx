import StatCard from "./StatCard";
import "./StatsGrid.css";


export function StatsGrid({ weatherData }) {

  if (!weatherData || !weatherData.current) {
    return <p>Loading stats...</p>;
  }

  const current = weatherData.current;

  const stats = [
    { id: "wind", title: "Wind", value: current.wind_kph + " km/h", icon: "💨" },
    { id: "humidity", title: "Humidity", value: current.humidity + "%", icon: "💧" },
    { id: "pressure", title: "Pressure", value: current.pressure_mb + " mb", icon: "🌡️" },
    { id: "visibility", title: "Visibility", value: current.vis_km + " km", icon: "👁️" },
    { id: "uv", title: "UV Index", value: current.uv, icon: "☀️" },
    { id: "cloud", title: "Cloud Cover", value: current.cloud + "%", icon: "☁️" },
  ];

  return (
    <div className="stats-grid">

      {
        stats.map((stat) => {
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
