 import StatCard from "./StatCard";
 import "./StatsGrid.css";
 
 export function StatsGrid() {

  return (
    <div className="stats-grid">
      <StatCard 

        title="Air Quality"
        value="156"
        icon="🌪️"
      
      />
      <StatCard
         title="Wind"
        value="1 mph"
        icon="💨"
      />
      <StatCard 
         title="Humidity"
        value="54%"
        icon="💧"
      />
      <StatCard
       title="Visibility"
        value="3 mi"
        icon="👀"
      />
      <StatCard 
         title="Pressure"
        value="27.65 in"
        icon="䷮"
      />
      <StatCard 
         title="pressure"
        value="66℃"
        icon="䷮"
      />
     
    </div>
  );
  
}

