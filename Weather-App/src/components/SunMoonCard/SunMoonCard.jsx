import "./SunMoonCard.css";
import { weatherData } from "../../../data.js"; 

export function SunMoonCard() {


  return (
    <div className="sun-moon-card">
      
      <h2 className="card-title">Sun & Moon Summary</h2>

      <div className="sun-moon-content">

        {/* LEFT SIDE */}
        <div className="summary-left">

          <div className="summary-item">
            <div className="summary-icon">☀️</div>

            <div className="summary-info">
              <p>Air Quality</p>
              <h3>{weatherData.weatherStats[0].value}</h3>
            </div>
          </div>

          <div className="summary-item">
            <div className="summary-icon">☀️</div>

            <div className="summary-info">
              <p>Air Quality</p>
              <h3>{weatherData.weatherStats[0].value}</h3>
            </div>
          </div>

        </div>

        {/* CENTER */}
        <div className="summary-center">

          <div className="time-block">
            <div className="time-icon">☀️</div>

            <div>
              <p>Sunrise</p>
              <h3>{weatherData.sunMoonData.sunrise}</h3>
            </div>
          </div>

          <div className="time-block">
            <div className="time-icon">☀️</div>

            <div>
              <p>Moonrise</p>
              <h3>{weatherData.sunMoonData.moonrise}</h3>
            </div>
          </div>

        </div>

        {/* ARC SECTION */}
        <div className="arc-section">

          <div className="sun-arc">
            <div className="arc-line yellow"></div>
            <div className="arc-dot yellow-dot"></div>
          </div>

          <div className="sun-arc">
            <div className="arc-line blue"></div>
            <div className="arc-dot blue-dot"></div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="summary-right">

          <div className="time-block">
            <div className="time-icon">☀️</div>

            <div>
              <p>Sunset</p>
              <h3>{weatherData.sunMoonData.sunset}</h3>
            </div>
          </div>

          <div className="time-block">
            <div className="time-icon">☀️</div>

            <div>
              <p>Moonset</p>
              <h3>{weatherData.sunMoonData.moonset}</h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}