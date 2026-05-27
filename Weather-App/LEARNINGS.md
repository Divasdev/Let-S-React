# 🌤️ SkyCast Weather App — Phase 1 Learnings
## Building UI Components with React + CSS

> **Phase:** 1 — UI Only (No State, No Props, No API)
> **Stack:** React (JSX) + Vanilla CSS
> **Goal:** Build a pixel-close replica of a reference weather dashboard UI

---

## 📁 1. Component Architecture — How to Break a UI into Pieces

The first real skill in React is looking at a design and asking:
> *"What is a component here?"*

### The Rule of Thumb
A component is anything that:
- **Repeats** (e.g. `ForecastRow`, `StatCard`)
- **Can be isolated** as a self-contained visual block
- **Has a clear single responsibility**

### What We Built

```
App
├── NavBar
│   ├── BrandLogo
│   ├── LocationDisplay
│   ├── SearchBar
│   ├── ThemeToggle
│   └── UserProfile
│
└── MainLayout
    ├── LEFT PANEL
    │   ├── CurrentWeatherCard
    │   ├── StatsGrid
    │   │   └── StatCard (×6)
    │   └── SunMoonCard
    │
    └── RIGHT PANEL
        └── ForecastList
            ├── TabGroup
            └── ForecastRow (×8)
```

### Key Insight
> **Start from the outside in.** Build the shell layout first (`MainLayout`),
> then fill it with sections, then fill sections with leaf components.
> Never start with the smallest pieces first — you'll lose context.

---

## 🏗️ 2. Folder Structure — Feature-Based Organization

We organized files by **feature/component**, not by type:

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── BrandLogo.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SearchBar.css
│   │   ├── ThemeToggle.jsx
│   │   ├── LocationDisplay.jsx
│   │   └── UserProfile.jsx
│   │
│   ├── Layout/
│   │   ├── MainLayout.jsx
│   │   └── MainLayout.css
│   │
│   ├── CurrentWeatherHero/
│   │   ├── CurrentWeatherHero.jsx
│   │   └── CurrentWeatherHero.css
│   │
│   ├── StatsGrid/
│   │   ├── StatsGrid.jsx
│   │   ├── StatsGrid.css
│   │   ├── StatCard.jsx
│   │
│   ├── Forecast/
│   │   ├── ForecastList.jsx
│   │   ├── ForecastList.css
│   │   ├── ForecastRow.jsx
│   │   ├── ForecastRow.css
│   │   └── Forecast-Header/
│   │       ├── TabGroup.jsx
│   │       └── TabGroup.css
│   │
│   └── SunMoonCard/
│       ├── SunMoonCard.jsx
│       └── SunMoonCard.css
│
├── App.jsx
├── App.css
└── index.css       ← Global CSS variables live here
```

### Key Insight
> Each component **owns its own CSS file**. This keeps styles scoped and
> prevents one component's styles from bleeding into another.
> The only exception is **global tokens** (colors, radius, shadows) which
> live in `index.css` as CSS custom properties.

---

## 🎨 3. CSS Custom Properties (Variables) — The Design Token System

Instead of hardcoding colors and sizes everywhere, we defined them once in `:root {}`:

```css
/* index.css */
:root {
  --bg-app: linear-gradient(160deg, #c9cce6, #bdc4e0, #d0c8e4);
  --panel-bg: rgba(255, 255, 255, 0.5);
  --card-bg: rgba(255, 255, 255, 0.5);
  --card-border: rgba(255, 255, 255, 0.7);

  --text-primary: #111827;
  --text-secondary: #6b7280;
  --accent-blue: #3b82f6;
  --accent-dark: #0f172a;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-2xl: 28px;

  --shadow-card: inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 32px rgba(0,0,0,0.04);
  --transition-fast: 0.2s ease;
}
```

Then used everywhere as:
```css
.stat-card {
  background: var(--card-bg);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-card);
}
```

### Why This Matters
| Without Variables | With Variables |
|---|---|
| Change a color → edit 20 files | Change once in `:root` → updates everywhere |
| Inconsistent spacing | Uniform spacing across all cards |
| Hard to theme (dark/light mode) | Just swap variable values |

---

## 📐 4. CSS Grid — The Layout Engine

We used CSS Grid for two main patterns:

### Pattern 1 — Two-Column Page Layout
```css
.main-layout {
  display: grid;
  grid-template-columns: 3fr 2fr; /* Left gets 60%, Right gets 40% */
  gap: 20px;
}
```

### Pattern 2 — 3×2 Stats Grid
```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 14px;
}
```

### Pattern 3 — SunMoonCard 4-Column Layout
```css
.sun-moon-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.4fr 1fr;
}
```

### Key Insight
> Grid is for **2D layout** (rows AND columns at the same time).
> Flexbox is for **1D layout** (either a row OR a column).
> Use Grid for the page shell, use Flexbox inside components.

---

## 💪 5. CSS Flexbox — Inside Components

Almost every component's internal layout uses Flexbox:

```css
/* Navbar — horizontal row */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Left panel — vertical stack */
.left-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* pushes SunMoonCard to bottom */
  gap: 20px;
}

/* Forecast row — horizontal with auto margin trick */
.forecast-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.forecast-extra {
  margin-left: auto; /* pushes wind/humidity to far right */
}
```

### The `margin-left: auto` Trick
This is one of the most useful Flexbox tricks:
```css
/* Pushes the last element to the far right */
.last-item { margin-left: auto; }
```

---

## 🪟 6. Glassmorphism — The Visual Effect

The frosted glass look requires these 4 CSS properties together:

```css
.card {
  background: rgba(255, 255, 255, 0.5);         /* Semi-transparent white */
  border: 1px solid rgba(255, 255, 255, 0.7);   /* Faint white border */
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 32px rgba(0,0,0,0.04);
  backdrop-filter: blur(20px);                   /* The actual blur effect */
  -webkit-backdrop-filter: blur(20px);           /* Safari prefix */
}
```

**Why it works:** The `backdrop-filter: blur()` blurs whatever is behind the element (the gradient background). The semi-transparent `background` lets the blurred background show through.

> ⚠️ `backdrop-filter` doesn't work if the parent has `overflow: hidden`
> without proper stacking context.

---

## 📱 7. Responsive Design — Mobile First Breakpoints

We used 3 breakpoints consistently across all files:

```
Desktop (default) →  > 1024px   — Full two-column layout
Tablet            →  ≤ 1024px   — Adjusted columns, hidden labels
Mobile            →  ≤ 768px    — Single column, stacked layout
Small Mobile      →  ≤ 480px    — Maximum compression, minimal UI
```

### Pattern Used
```css
/* Default = Desktop */
.main-layout {
  grid-template-columns: 3fr 2fr;
}

/* Tablet */
@media (max-width: 1024px) {
  .main-layout { grid-template-columns: 1fr 1fr; }
}

/* Mobile */
@media (max-width: 768px) {
  .main-layout { grid-template-columns: 1fr; } /* Stack vertically */
}
```

### What Gets Hidden on Mobile (Progressive Disclosure)
| Element | When Hidden |
|---|---|
| `LocationDisplay` | ≤ 1024px — less critical on tablet |
| `.forecast-divider` | ≤ 768px — saves row space |
| `.settings-btn` | ≤ 768px — not needed on mobile |
| `.notification-btn` | ≤ 480px — minimal chrome on tiny screens |
| SunMoon Arcs | ≤ 768px — complex SVG-like element too wide |
| Profile username text | ≤ 768px — just show emoji + arrow |

---

## 🔁 8. Repeating Components — The Power of Reuse

One of the most important React lessons from Phase 1:

```jsx
// Instead of writing this 8 times...
<div class="forecast-row">...</div>
<div class="forecast-row">...</div>

// We write a component once and reuse it
<ForecastRow />
<ForecastRow />
<ForecastRow />
```

And for `StatCard`:
```jsx
// StatsGrid.jsx — 6 cards, one component definition
<div className="stats-grid">
  <StatCard />
  <StatCard />
  <StatCard />
  <StatCard />
  <StatCard />
  <StatCard />
</div>
```

### Key Insight
> In Phase 1, all `<ForecastRow />` and `<StatCard />` show the **same** dummy data.
> In **Phase 2**, we will pass **different** data to each via **Props**.
> The component structure is already set up correctly — we just need to add the data.

---

## 🧠 9. Semantic HTML Inside JSX

Good JSX uses proper HTML elements for meaning:

```jsx
// ✅ Correct
<nav className="navbar">...</nav>        // Navigation landmark
<h1>12°F</h1>                            // Main temperature heading
<h3>Rainy</h3>                           // Sub-heading
<p>Feels Like 35°</p>                    // Body text
<button className="tab">Today</button>   // Interactive element
<span className="weather-label">...</span> // Inline text

// ❌ Wrong — everything as <div>
<div className="navbar">...</div>
<div className="temperature">56</div>
```

### Why It Matters
- Screen readers use `<nav>`, `<h1>`, `<button>` to navigate
- Search engines understand page structure better
- Buttons get keyboard focus for free; divs don't

---

## 🔑 10. Naming Conventions

We followed these naming rules throughout:

| Thing | Convention | Example |
|---|---|---|
| Component files | PascalCase | `ForecastRow.jsx` |
| CSS files | PascalCase (matches component) | `ForecastRow.css` |
| CSS class names | kebab-case | `.forecast-row` |
| Component functions | PascalCase | `function ForecastRow()` |
| CSS variables | kebab-case with `--` prefix | `--card-bg` |
| Folders | PascalCase for components | `StatsGrid/` |

---

## 🪤 11. Common Bugs Faced & Fixed

### Bug 1 — Component not showing
**Cause:** Wrong import path or wrong export name
```jsx
// ❌ Wrong
import StatCard from "./StatCard";     // default import
export function StatCard() {...}       // named export — MISMATCH

// ✅ Fixed
import { StatCard } from "./StatCard"; // named import matches named export
```

### Bug 2 — Layout overflowing the screen
**Cause:** `min-height: 100vh` on the grid AND the app shell → double height
```css
/* ❌ Wrong */
.main-layout { min-height: 100vh; }
.app-shell   { min-height: 100vh; }

/* ✅ Fixed — only app-shell gets min-height */
.app-shell   { min-height: 100vh; }
.main-layout { flex: 1; } /* grows to fill remaining space */
```

### Bug 3 — Card backgrounds hiding gradient
**Cause:** Solid `#e8ebf7` background hiding the gradient behind
```css
/* ❌ Wrong — solid, hides gradient */
--panel-bg: #e8ebf7;

/* ✅ Fixed — transparent, shows gradient */
--panel-bg: rgba(255, 255, 255, 0.5);
```

### Bug 4 — Right panel bottom not aligning with left panel
**Cause:** `max-height` was cutting the right panel short
```css
/* ❌ Wrong */
.right-panel { max-height: calc(100vh - 100px); }

/* ✅ Fixed — CSS Grid auto-stretches both columns to same height */
.right-panel { /* no max-height — grid handles it */ }
.left-panel  { justify-content: space-between; } /* pushes SunMoon to bottom */
```

---

## 🚀 12. What Comes Next — Phase 2 Preview

Now that the UI is built, Phase 2 will wire it up with real data:

### Step 1 — Props (Passing Data Down)
```jsx
// Currently (Phase 1 — static)
<StatCard />

// Phase 2 — dynamic via props
<StatCard icon="🌪️" title="Air Quality" value={156} />
```

### Step 2 — State (Reactive Data)
```jsx
// In App.jsx
const [city, setCity] = useState("Khulna, Bangladesh");
const [weather, setWeather] = useState(null);
```

### Step 3 — API Call
```jsx
// In a service file: src/services/weatherApi.js
export async function fetchWeather(city) {
  const res = await fetch(`https://api.openweathermap.org/...?q=${city}`);
  return res.json();
}
```

### Step 4 — Lifting State Up
```
App.jsx  ← holds all state
  ├── passes weather data DOWN to MainLayout via props
  ├── passes search handler DOWN to NavBar
  └── receives city search UP via callback
```

### Step 5 — Tab Switching Logic
```jsx
// TabGroup needs state to track active tab
const [activeTab, setActiveTab] = useState("today");
```

---

## 📊 Phase 1 — Skills Mastered Checklist

- [x] Breaking a UI design into React components
- [x] Feature-based folder structure
- [x] CSS custom properties (design tokens)
- [x] CSS Grid for page layout
- [x] CSS Flexbox for component internals
- [x] Glassmorphism visual effect
- [x] Responsive design with 3 breakpoints
- [x] Semantic HTML in JSX
- [x] Naming conventions
- [x] Component reuse pattern
- [x] Debugging layout bugs
- [ ] Props — Phase 2
- [ ] State — Phase 2
- [ ] API calls — Phase 2
- [ ] useEffect — Phase 2
- [ ] Tab switching logic — Phase 2

---

*Built with 💙 while learning React — SkyCast Phase 1 complete.*
