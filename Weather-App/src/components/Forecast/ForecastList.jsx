import { ForecastRow } from "./ForecastRow";
import { TabGroup } from "./Forecast-Header/TabGroup";

import "./ForecastList.css";

export function ForecastList(){
   return(
      <div className="forecast-container">
        <TabGroup />

        <div className="forecast-rows">
          <ForecastRow />
          <ForecastRow />
          <ForecastRow />
          <ForecastRow />
          <ForecastRow />
          <ForecastRow />
          <ForecastRow />
          <ForecastRow />
        </div>

        <div className="scroll-indicator">▼</div>
      </div>
   )
}