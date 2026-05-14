const data=[

{
  city: "Khulna, Bangladesh",
  current: {
    time: "2:59PM",
    temperature: 12,
    unit: "F",
    condition: "Rainy",
    feelsLike: 35,
    icon: "partly-cloudy",
    description: "There will be mostly sunny skies. The high will be 35°."
  },
  stats: {
    airQuality: 156,
    wind: "1 mph",
    humidity: "54%",
    visibility: "3 mi",
    pressure: "27.65 in",
    temperature: "66°"
  },
  astronomy: {
    sun: { rise: "5:43AM", set: "5:43AM" },
    moon: { rise: "5:43AM", set: "5:43AM" }
  },
  forecast: {
    today: [
      { time: "1AM", condition: "Mostly Cloudy", temp: 12, wind: "120km", humidity: "59%", icon: "cloudy" },
      { time: "2AM", condition: "Mostly Cloudy", temp: 12, wind: "120km", humidity: "59%", icon: "cloudy" },
      
    ],
    tomorrow: [ ],
    tenDays: [ ]
  }
}
]

import { MainLayout } from "./components/Layout/MainLayout";

import { NavBar } from "./components/Navbar/Navbar";
function App(){
  return(

      <>
          <NavBar />
          <MainLayout />
          
          
      </>

  )
  
}


export default App;