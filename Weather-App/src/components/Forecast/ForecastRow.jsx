import "./ForecastRow.css";

export function ForecastRow({ time,  condition, temp, wind, humidity }) {

  return (
    <div className="forecast-card">
      <div className="forecast-row">

        <div className="forecast-left">
          <div className="forecast-weather-icon">⛈️</div>
          <div>
            <p className="forecast-time">{time}</p>
            <h3 className="forecast-condition">{condition}</h3>
          </div>
        </div>

        <div className="forecast-divider"></div>

        <div className="forecast-temp">
          {temp}<span>°C</span>
        </div>

        <div className="forecast-extra">
          <p>{wind ?? "Wind: N/A"}</p>
          <p>{humidity ?? "Humidity: N/A"}</p>
        </div>

      </div>
    </div>
  );
}