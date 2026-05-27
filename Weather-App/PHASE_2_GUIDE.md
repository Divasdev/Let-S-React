# 🚀 Phase 2: Making SkyCast Dynamic

Welcome to Phase 2! You've built a beautiful, static UI. It looks great, but right now, it's just a painting of a weather app. In this phase, we are going to wire it up with electricity. We will make it "think," "remember," and "talk" to the outside world.

As a senior engineer mentoring you, my goal isn't just to tell you *what* code to write. I want you to understand **HOW React thinks**. Once you understand the mental model, the syntax is easy.

---

## 🏗️ SECTION 1: PROJECT ARCHITECTURE (How React Thinks)

Before we write a single line of logic, we need to understand the philosophy of React. 

### The Mental Model: React is a Factory
Imagine a car factory. 
- You have **Managers** (Smart Components). Their job is to get the materials (data) from the warehouse (API), keep track of inventory (State), and hand materials down to the workers.
- You have **Workers** (Dumb Components). They don't know where the materials came from. They just receive a steering wheel (Props) and attach it to the car (UI).

### Smart vs. Dumb Components in SkyCast
In our weather dashboard:
- **`App.jsx` (The Manager / Smart Component):** This component will be the "brain." It will fetch the weather data from the API, remember the current city, and pass the data down to the rest of the app.
- **`StatCard.jsx` (The Worker / Dumb Component):** It shouldn't know how to fetch weather data. It just says, "Give me an icon, a title, and a value, and I will draw a pretty box."

### Data Flow: One-Way Street
In React, data flows **DOWN** like a waterfall. 
`App` fetches the weather → passes it to `MainLayout` → passes it to `StatsGrid` → passes it to `StatCard`.
A child (`StatCard`) cannot pass data directly to its sibling (`ForecastRow`). If they both need the same data, the parent (`App`) must hold it and pass it down to both.

---

## 🎁 SECTION 2: PROPS (The Delivery System)

### What are Props?
"Props" is short for properties. Think of them as **arguments to a function** or **settings on a TV**. 
When you buy a TV, the manufacturer provides the screen (the component), but *you* configure the volume, brightness, and channel (the props).

### Why do Props exist?
Without props, every `StatCard` would have to be hardcoded. You would need `HumidityCard.jsx`, `WindCard.jsx`, etc. With props, we write `StatCard.jsx` ONCE, and configure it many times.

### Real Example: Passing Weather Data
Currently, your `StatCard` looks like this:
```jsx
// Phase 1: Hardcoded (Dumb and stubborn)
export function StatCard() {
  return (
    <div className="stat-card">
      <div className="stat-icon">🌪️</div>
      <span className="stat-title">Air Quality</span>
      <h3 className="stat-value">156</h3>
    </div>
  );
}
```

Here is how we make it flexible using Props:
```jsx
// Phase 2: Dynamic (Listens to instructions)
export function StatCard(props) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{props.icon}</div>
      <span className="stat-title">{props.title}</span>
      <h3 className="stat-value">{props.value}</h3>
    </div>
  );
}
```

Now, the parent (`StatsGrid`) can create many *different* cards:
```jsx
<StatCard icon="🌪️" title="Wind" value="12 mph" />
<StatCard icon="💧" title="Humidity" value="45%" />
```

### 🛑 Common Beginner Mistakes with Props
1. **Trying to change a prop:** Props are **read-only**. A child component cannot change its own props. Only the parent can change the prop it passes down.
2. **Prop Drilling:** Passing props through 10 layers of components just to get it to the bottom. For now, passing from `App` -> `MainLayout` -> `StatsGrid` -> `StatCard` is fine.

---

## 🧠 SECTION 3: STATE MANAGEMENT (The App's Memory)

### What is State?
If Props are settings passed from the outside, **State is the component's internal memory.**
State is data that **changes over time**, and when it changes, the UI must update.

### The Golden Rule of React
**When State changes, React re-renders the component.** 
This is why UI becomes dynamic! If you type in a search bar, the state updates, React notices, and redraws the search bar with the new letter.

### Where State Should Live in SkyCast
1. **The Active Tab State:** 
   - *Why:* The user clicks "Tomorrow," and the UI needs to show tomorrow's forecast.
   - *Where:* Inside `ForecastList.jsx`. 
2. **The Search Input State:** 
   - *Why:* We need to remember what the user is typing before they hit enter.
   - *Where:* Inside `SearchBar.jsx`.
3. **The API Weather Data State:**
   - *Why:* We need to store the massive JSON object from the weather API to draw the UI.
   - *Where:* Inside `App.jsx`. Since almost EVERY component needs weather data, it must live at the top so it can be passed down. This is called **"Lifting State Up."**

### 🛑 Common State Mistakes
- **Mutating state directly:** NEVER do `city = "Paris"`. React won't know it changed and won't update the UI. ALWAYS use the setter function: `setCity("Paris")`.

---

## 🌐 SECTION 4: API CALLS (Talking to the World)

### What is an API?
An API (Application Programming Interface) is a waiter at a restaurant. 
You (the React app) look at the menu and give the waiter an order ("Give me the weather for Tokyo"). The waiter goes to the kitchen (Server/Database), gets the food (JSON data), and brings it back to you.

### Async Behavior (Why we wait)
Fetching data takes time (maybe 500ms). We use `async/await` to tell JavaScript: "Go fetch this data, and I'll keep drawing the UI (like showing a loading spinner) while I wait."

### Fetching Weather Data (The Code)
We put this in a separate file (e.g., `src/services/weatherApi.js`) to keep components clean!

```javascript
export async function fetchWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=KEY`);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
```

---

## ⏳ SECTION 5: useEffect (The Timing Machine)

### What is useEffect?
`useState` is for the component's **Memory**. `useEffect` is for the component's **Lifecycle & Side Effects** (like fetching data).

### Why Weather Fetching belongs in useEffect
If you put a `fetch()` directly inside the `App` component body, React will run it every time it renders. 
Fetch data -> update state -> React re-renders -> Fetch data -> update state -> React re-renders... **INFINITE LOOP!** Your app crashes.

`useEffect` tells React: "Only run this code at very specific times."

### The Dependency Array (The rulebook)
```jsx
const [cityToSearch, setCityToSearch] = useState("London");

useEffect(() => {
  // This runs when the component is born AND whenever cityToSearch changes!
  fetchWeatherData(cityToSearch);
}, [cityToSearch]); // <--- Dependency Array
```

---

## 🗂️ SECTION 6: TAB SWITCHING LOGIC

Tabs seem complex, but internally, they are just conditional rendering driven by state.

```jsx
// 1. Create a state to remember the active tab
const [activeTab, setActiveTab] = useState("today");

// 2. Add dynamic classes to buttons
<button 
  className={`tab ${activeTab === "today" ? "active-tab" : ""}`}
  onClick={() => setActiveTab("today")}
>
  Today
</button>

// 3. Render different arrays based on the tab
const rowsToRender = activeTab === "today" ? data.forecast.today : data.forecast.tomorrow;

{rowsToRender.map(row => <ForecastRow data={row} />)}
```

---

## 🔄 SECTION 7: PROJECT DATA FLOW

“WHAT HAPPENS AFTER A USER TYPES A CITY?”

1. User types "Paris" in `<SearchBar />`. The local state `inputValue` updates to "Paris".
2. User hits Enter. The form submits.
3. `<SearchBar />` calls a function passed down from `<App />` via props: `onSearchSubmit("Paris")`.
4. In `<App />`, `setCity("Paris")` is called. The state `city` changes!
5. `<App />` re-renders.
6. The `useEffect` inside `<App />` notices that `city` changed from "London" to "Paris". It fires!
7. The `useEffect` calls the weather API.
8. API returns JSON data.
9. `setWeatherData(jsonData)` is called. The state `weatherData` changes!
10. `<App />` re-renders AGAIN.
11. `<App />` passes the new `weatherData` as props down to `<MainLayout />` -> `<StatsGrid />` -> `<StatCard />`.
12. Every component on the screen instantly redraws with Paris data. 

---

## ⏳ SECTION 8: LOADING + ERROR STATES

Professional apps handle the "in-between" times.
When you fetch data, you need three states in `App.jsx`:
```jsx
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
```

While `isLoading` is true, return a Skeleton UI or a `<Spinner />` component instead of `<MainLayout />`.
If `error` has a message (e.g., "City not found"), render an `<ErrorState message={error} />` component.

---

## 📁 SECTION 9: FOLDER STRUCTURE

For this interactive phase, organize your files like this:

```
src/
├── components/          # Pure UI components (StatCard, NavBar)
├── hooks/               # Custom hooks (useWeather.js)
├── services/            # API calls (weatherApi.js)
├── utils/               # Helper functions (formatDate.js)
├── assets/              # Icons and images
├── App.jsx              # The main smart component handling state
└── index.css            # Global variables
```

---

## 🗺️ SECTION 10: BEGINNER ROADMAP

What's next after Phase 2?
1. **Phase 3: Custom Hooks.** Extract all the fetch logic out of `App.jsx` into a custom hook `useWeather(city)`. This keeps components incredibly clean.
2. **Context API:** If passing props down 3 levels gets annoying, learn Context API to teleport data directly to the components that need it.
3. **Routing:** Learn React Router to add a dedicated `/settings` page or `/monthly-forecast` page.

*Your UI is ready. Let's start wiring it up!*
