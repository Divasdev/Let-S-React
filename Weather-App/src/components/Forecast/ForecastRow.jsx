import "./ForecastRow.css";

export function ForecastRow(){
   return(
        <div className="forecast-card">
          <div className="forecast-row">

            <div className="forecast-left">
              <div className="forecast-weather-icon">⛈️</div>

              <div>
                <p className="forecast-time">1AM</p>
                <h3 className="forecast-condition">Mostly Cloudy</h3>
              </div>
            </div>

            <div className="forecast-divider"></div>

            <div className="forecast-temp">
              12<span>°C</span>
            </div>

            <div className="forecast-extra">
              <p>Wind: 120km</p>
              <p>Humidity: 59%</p>
            </div>

          </div>
        </div>
         

   )
}

