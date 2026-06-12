import "./SunMoonCard.css";

export function SunMoonCard({ weatherData }) {

  if (!weatherData || !weatherData.forecast) {
    return <p>Loading sun & moon...</p>;
  }

  const astro = weatherData.forecast.forecastday[0].astro;
  const current = weatherData.current;

  return (
    <div className="sun-moon-card">
      
      <h2 className="card-title">Sun & Moon Summary</h2>

      <div className="sun-moon-content">

        {/* LEFT SIDE */}
        <div className="summary-left">

          <div className="summary-item">
            <div className="summary-icon">💨</div>

            <div className="summary-info">
              <p>Wind</p>
              <h3>{current.wind_kph} km/h</h3>
            </div>
          </div>

          <div className="summary-item">
            <div className="summary-icon">💧</div>

            <div className="summary-info">
              <p>Humidity</p>
              <h3>{current.humidity}%</h3>
            </div>
          </div>

        </div>

        {/* CENTER */}
        <div className="summary-center">

          <div className="time-block">
            <div className="time-icon">☀️</div>

            <div>
              <p>Sunrise</p>
              <h3>{astro.sunrise}</h3>
            </div>
          </div>

          <div className="time-block">
            <div className="time-icon">🌙</div>

            <div>
              <p>Moonrise</p>
              <h3>{astro.moonrise}</h3>
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
            <div className="time-icon">🌅</div>

            <div>
              <p>Sunset</p>
              <h3>{astro.sunset}</h3>
            </div>
          </div>

          <div className="time-block">
            <div className="time-icon">🌑</div>

            <div>
              <p>Moonset</p>
              <h3>{astro.moonset}</h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}