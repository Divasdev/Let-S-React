import StatCard from "./components/StatsGrid/StatsGrid";
import "./components/StatsGrid/StatsGrid.css";

function StatsGrid() {

  return (
    <div>
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
     
    </div>
  );
  
}

function App(){
  return (
      <StatsGrid />
  );
}


export default App;