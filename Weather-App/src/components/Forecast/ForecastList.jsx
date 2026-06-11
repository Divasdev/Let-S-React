import { ForecastRow } from "./ForecastRow";
import { TabGroup } from "./Forecast-Header/TabGroup";
import { weatherData } from "../../../data.js";
import "./ForecastList.css";

export function ForecastList(){
   return(
      <div className="forecast-container">
        <TabGroup />
        <div className="forecast-rows">
          {weatherData.hourlyForecast.map((item) => (
            <ForecastRow
              key={item.id}
              time={item.time}
              icon={item.icon}
              condition={item.condition}
              temp={item.temperature}
              wind={null}
              humidity={null}
            />
          ))}
        </div>
      </div>
   )
}