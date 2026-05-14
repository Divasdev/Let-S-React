import "./TabGroup.css";

export function TabGroup() {
  return (
    <div className="forecast-header">
      <div className="tab-group">
        <button className="tab active-tab">Today</button>
        <button className="tab">Tomorrow</button>
        <button className="tab">10 Days</button>
      </div>

      <button className="monthly-btn">
         See Monthly Cast
         </button>
    </div>
  );
}