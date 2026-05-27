# 🛠️ Phase 2: The Step-by-Step Coding Guide

Now that you've read the conceptual guide (`PHASE_2_GUIDE.md`), it's time to actually write the code. 
I am going to use maximum detail here to show you EXACTLY how to wire up your Weather App, file by file. 

We will do this in **4 logical steps**:
1. Props (Making components flexible)
2. State (Adding memory)
3. API (Fetching real data)
4. Wiring it all together (Passing state down)

---

## 🎯 STEP 1: Setting up Props (The Foundation)

Right now, your leaf components (like `StatCard` and `ForecastRow`) have hardcoded text. If we fetch weather data for Tokyo, it will still say "156 Air Quality" because it's hardcoded.

Let's make them flexible using Props.

### 1.1 Updating `StatCard.jsx`
Open `src/components/StatsGrid/StatCard.jsx` and change it to accept props:

```jsx
// src/components/StatsGrid/StatCard.jsx

// 1. Add "props" as a parameter to the function
export function StatCard(props) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        {/* 2. Replace hardcoded text with props */}
        <div className="stat-icon">{props.icon}</div>
        <span className="stat-title">{props.title}</span>
      </div>
      {/* 2. Replace hardcoded text with props */}
      <h3 className="stat-value">{props.value}</h3>
    </div>
  );
}
```

### 1.2 Updating `ForecastRow.jsx`
Open `src/components/Forecast/ForecastRow.jsx` and do the exact same thing. A forecast row needs: time, icon, condition, temperature, wind, and humidity.

```jsx
// src/components/Forecast/ForecastRow.jsx

export function ForecastRow(props) {
  return (
    <div className="forecast-card">
      <div className="forecast-row">
        
        {/* Left Section */}
        <div className="forecast-left">
          <div className="forecast-weather-icon">{props.icon}</div>
          <div>
            <div className="forecast-time">{props.time}</div>
            <div className="forecast-condition">{props.condition}</div>
          </div>
        </div>

        <div className="forecast-divider"></div>

        {/* Temp Section */}
        <div className="forecast-temp">
          {props.temp}<span>°</span>
        </div>

        {/* Extra Section */}
        <div className="forecast-extra">
          <span>💨 {props.wind}</span>
          <span>💧 {props.humidity}</span>
        </div>

      </div>
    </div>
  );
}
```

> **Mentor Tip:** See how beautiful this is? The `ForecastRow` is completely dumb. It doesn't know if it's showing today's weather or tomorrow's weather. It just takes the data and renders it. This is perfect React architecture.

---

## 🧠 STEP 2: Setting up State in `App.jsx`

`App.jsx` is our Manager. It needs to hold the entire state of the application.
Open `src/App.jsx`.

### 2.1 The Mental Model for our State
We need to remember 4 things:
1. `city`: What city is the user looking at? (String)
2. `weatherData`: The actual weather data from the API. (Object)
3. `isLoading`: Are we currently waiting for the API? (Boolean)
4. `error`: Did the API fail? (String)

### 2.2 Writing the State Code

```jsx
// src/App.jsx
import { useState, useEffect } from "react";
import { MainLayout } from "./components/Layout/MainLayout";
import { NavBar } from "./components/Navbar/Navbar";
import "./App.css";

export default function App() {
  // 1. Setup State Memory
  const [city, setCity] = useState("Khulna"); 
  const [weatherData, setWeatherData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  // 2. We will add useEffect here in Step 3!

  // 3. Conditional Rendering (Handling Loading & Error states)
  if (isLoading) {
    return <div className="loading-screen">Loading Weather Data...</div>;
  }

  if (error) {
    return <div className="error-screen">Error: {error}</div>;
  }

  // 4. The actual App UI
  return (
    <div className="app-shell">
      {/* We pass the setCity function down so the Navbar can update the App's state! */}
      <NavBar onSearch={setCity} />
      
      {/* We pass the fetched data down to the Layout */}
      <MainLayout data={weatherData} />
    </div>
  );
}
```

---

## 🌐 STEP 3: The API Call & useEffect

Now we need to fetch the data whenever the `city` state changes. We will use the free OpenWeatherMap API (or similar) for this.

We will write a `useEffect` directly inside `App.jsx`.

```jsx
// src/App.jsx (Add this right below your useState declarations)

  useEffect(() => {
    // 1. Define an async function inside the useEffect
    async function fetchWeather() {
      setIsLoading(true); // Start loading!
      setError(null);     // Clear old errors
      
      try {
        // NOTE: You will need a free API key from OpenWeatherMap or WeatherAPI.
        // For this example, let's pretend we are calling a real API.
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${city}&days=10`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch weather data for " + city);
        }
        
        const data = await response.json();
        
        // Success! Save the data to state
        setWeatherData(data); 
        
      } catch (err) {
        // Failure! Save the error message
        setError(err.message);
      } finally {
        // Whether success or failure, we are done loading.
        setIsLoading(false); 
      }
    }

    // 2. Call the function we just defined
    fetchWeather();

  }, [city]); // <--- DEPENDENCY ARRAY
```

### Why `[city]`?
This tells React: *"Hey, run this entire `useEffect` block when the component first mounts, AND run it again ANY TIME the `city` variable changes."*
If the user types "New York" in the search bar, `city` becomes "New York", and React automatically runs this fetch again!

---

## 🔌 STEP 4: Wiring the Search Bar

Right now, the `<NavBar />` has a search bar, but it doesn't do anything. We need it to update the `city` state in `App.jsx`.

Notice in `App.jsx` we did this: `<NavBar onSearch={setCity} />`
We passed the remote control (`setCity`) down to the Navbar as a prop!

### 4.1 Updating `NavBar.jsx`
```jsx
// src/components/Navbar/Navbar.jsx
// Accept the prop!
export function NavBar(props) {
  return (
    <nav className="navbar">
      {/* Left Group */}
      <div className="navbar-left">...</div>

      {/* Center Group - Pass the prop down one more level to SearchBar! */}
      <div className="navbar-center">
        <SearchBar onSearchSubmit={props.onSearch} />
      </div>

      {/* Right Group */}
      <div className="navbar-right">...</div>
    </nav>
  );
}
```

### 4.2 Updating `SearchBar.jsx`
Here is where we handle the `<form>` submission and the `input` state!

```jsx
// src/components/Navbar/SearchBar.jsx
import { useState } from "react";

export function SearchBar(props) {
  // Local state just to track what the user is currently typing
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // Stop the page from refreshing!
    
    if (inputValue.trim() !== "") {
      // Use the remote control from App.jsx!
      props.onSearchSubmit(inputValue);
      setInputValue(""); // Clear the input field after search
    }
  }

  return (
    // We use a <form> so hitting "Enter" automatically triggers handleSubmit
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input">
        <button type="submit" className="search-btn">🔍</button>
        
        <input 
          type="text" 
          className="location-input" 
          placeholder="Search Location..."
          value={inputValue} // Bind the input to our local state
          onChange={(e) => setInputValue(e.target.value)} // Update local state as user types
        />
        
        <button type="button" className="live-location">📍</button>
      </div>
    </form>
  );
}
```

### The Magic of the Search Flow
1. User types "Paris" → `inputValue` updates to "Paris" inside `SearchBar`.
2. User hits Enter → `handleSubmit` fires.
3. `handleSubmit` calls `props.onSearchSubmit("Paris")`.
4. `props.onSearchSubmit` is actually `setCity` from `App.jsx`!
5. `App.jsx` state updates `city` to "Paris".
6. The `useEffect` inside `App.jsx` sees `city` changed.
7. `useEffect` fetches Paris data from the API.
8. The whole app re-renders with Paris data!

---

## 🎯 STEP 5: Wiring the Tabs in ForecastList

Finally, let's implement the Tab Switching Logic in the right panel.
This requires local state inside `ForecastList.jsx`.

```jsx
// src/components/Forecast/ForecastList.jsx
import { useState } from "react";
import { ForecastRow } from "./ForecastRow";

export function ForecastList(props) {
  // Local state to remember which tab is active
  const [activeTab, setActiveTab] = useState("today");

  // In a real app, props.data would contain arrays for today, tomorrow, etc.
  // We determine which array to render based on the active tab!
  const rowsToRender = activeTab === "today" ? props.data.today : props.data.tomorrow;

  return (
    <div className="forecast-container">
      
      {/* TAB HEADER */}
      <div className="forecast-header">
        <div className="tab-group">
          <button 
            className={`tab ${activeTab === "today" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("today")}
          >
            Today
          </button>
          <button 
            className={`tab ${activeTab === "tomorrow" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("tomorrow")}
          >
            Tomorrow
          </button>
          <button 
            className={`tab ${activeTab === "10days" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("10days")}
          >
            10 Days
          </button>
        </div>
        <button className="monthly-btn">See Monthly Cast</button>
      </div>

      {/* FORECAST ROWS */}
      <div className="forecast-rows">
        {/* We map over the array and create a ForecastRow for each item! */}
        {rowsToRender.map((weatherData, index) => (
          <ForecastRow 
            key={index}
            time={weatherData.time}
            icon={weatherData.icon}
            condition={weatherData.condition}
            temp={weatherData.temp}
            wind={weatherData.wind}
            humidity={weatherData.humidity}
          />
        ))}
      </div>

    </div>
  );
}
```

---

## 🚀 Conclusion of the Code Guide

This is the **exact** architecture and code you need to bring your static UI to life. 
Read through this carefully. It takes the concepts from the first guide and turns them into real React code. 

**Next Action:** 
If you want, I can start applying these changes to your actual project files right now! Just say the word, and we'll start with Step 1 (Adding Props to the Leaf Components).
