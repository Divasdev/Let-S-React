import { MainLayout } from "./components/Layout/MainLayout";
import { NavBar } from "./components/Navbar/Navbar";
import "./App.css";
import { useEffect, useState } from "react";



function App() {
  const [weatherData,setWeatherData]=useState(null);

  const [isLoading,setIsLoading]=useState(true);

  const [error,setError]=useState("");

  useEffect(()=>{

    fetch("https://api.weatherapi.com/v1/forecast.json?key=85bbcbe7b717457882f20535261206&q=London")
    .then(response=>response.json())
    .then(apiData=>{
      setWeatherData(apiData);
    });
  },[]);

  if (!weatherData) return <p>Loading Live Weather...</p>

  return (
    <div className="app-shell">
      <NavBar />
      <MainLayout 
        weatherData={weatherData}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default App;