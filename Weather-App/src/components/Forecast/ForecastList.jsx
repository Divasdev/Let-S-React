import { ForecastRow } from "./ForecastRow";
import { TabGroup } from "./Forecast-Header/TabGroup";
import "./ForecastList.css";

export function ForecastList({ weatherData }){
   if (!weatherData || !weatherData.forecast || !weatherData.forecast.forecastday[0]) {
      return <p>Loading forecast...</p>;
   }

   const hourlyData = weatherData.forecast.forecastday[0].hour;

   return(
      <div className="forecast-container">
        <TabGroup />
        <div className="forecast-rows">
          {hourlyData.map((item) => {
            const date = new Date(item.time);
            const timeString = date.toLocaleTimeString([], { hour: 'numeric', hour12: true });

            return (
              <ForecastRow
                key={item.time_epoch}
                time={timeString}
                icon={item.condition.icon}
                condition={item.condition.text}
                temp={item.temp_c}
                wind={null}
                humidity={null}
              />
            );
          })}
        </div>
      </div>
   )
}