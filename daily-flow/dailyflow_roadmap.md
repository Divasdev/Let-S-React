# 🚀 DailyFlow: The Complete Senior React Mentor Roadmap

> **From Zero to Portfolio-Ready — No Code, Pure Architecture & Learning Strategy**

This document is your complete blueprint. Follow it phase by phase. Do not skip ahead. Each phase builds mental models that the next phase depends on.

---

## Table of Contents

1. [Project Setup & Folder Structure](#1-project-setup--folder-structure)
2. [Complete Component Architecture](#2-complete-component-architecture)
3. [Phase 1 — Static UI Shell](#3-phase-1--static-ui-shell-days-1-5)
4. [Phase 2 — Basic Interactivity](#4-phase-2--basic-interactivity-days-6-9)
5. [Phase 3 — Component Communication](#5-phase-3--component-communication-days-10-12)
6. [Phase 4 — State Design Deep-Dive](#6-phase-4--state-design-deep-dive-days-13-14)
7. [Phase 5 — Routing](#7-phase-5--routing-with-react-router-days-15-17)
8. [Phase 6 — Advanced Features](#8-phase-6--advanced-features-days-18-25)
9. [Phase 7 — Backend Preparation](#9-phase-7--backend-integration-preparation-days-26-28)
10. [Common Beginner Mistakes (Per Phase)](#10-common-beginner-mistakes-per-phase)
11. [Final Checklist](#11-final-portfolio-checklist)

---

## 1. Project Setup & Folder Structure

### Technology Choices & Why

| Choice | Why |
|---|---|
| **Vite** | Instant dev server startup, fast HMR (Hot Module Replacement). Create React App is deprecated — Vite is the modern standard. |
| **JavaScript (not TypeScript)** | You're learning React concepts. Adding TypeScript simultaneously doubles the cognitive load. Master React first, add TypeScript to a *second* project. |
| **React Router v6** | Industry standard for client-side routing. v6 uses modern patterns (nested routes, outlets). |
| **CSS Modules or Vanilla CSS** | Keeps styling concerns close to components. Avoids framework lock-in while you're learning. |
| **Framer Motion** (Phase 6) | The most React-friendly animation library. Integrates naturally with component lifecycle. |

### Complete Folder Structure

```text
dailyflow/
├── public/
│   ├── favicon.svg
│   └── og-image.png                  # Social sharing preview image
│
├── src/
│   ├── assets/
│   │   ├── images/                   # Static images, illustrations, icons
│   │   ├── fonts/                    # Custom font files (if self-hosting)
│   │   └── styles/
│   │       ├── index.css             # Global resets, CSS variables, font imports
│   │       ├── variables.css         # Color tokens, spacing scale, typography scale
│   │       └── animations.css        # Reusable keyframe animations
│   │
│   ├── components/
│   │   ├── common/                   # Reusable UI primitives (your component library)
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Button.css
│   │   │   ├── Card/
│   │   │   │   ├── Card.jsx
│   │   │   │   └── Card.css
│   │   │   ├── Input/
│   │   │   │   ├── Input.jsx
│   │   │   │   └── Input.css
│   │   │   ├── Badge/
│   │   │   │   ├── Badge.jsx
│   │   │   │   └── Badge.css
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.jsx
│   │   │   │   └── Modal.css
│   │   │   ├── ProgressRing/
│   │   │   │   ├── ProgressRing.jsx
│   │   │   │   └── ProgressRing.css
│   │   │   └── SearchBar/
│   │   │       ├── SearchBar.jsx
│   │   │       └── SearchBar.css
│   │   │
│   │   └── layout/                   # Structural frame components
│   │       ├── AppLayout/
│   │       │   ├── AppLayout.jsx
│   │       │   └── AppLayout.css
│   │       ├── Navbar/
│   │       │   ├── Navbar.jsx
│   │       │   └── Navbar.css
│   │       └── Footer/
│   │           ├── Footer.jsx
│   │           └── Footer.css
│   │
│   ├── pages/                        # Route-level page containers
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   ├── HeroSection.jsx
│   │   │   ├── HeroSection.css
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── FeaturesSection.css
│   │   │   ├── StatsSection.jsx
│   │   │   ├── StatsSection.css
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── TestimonialsSection.css
│   │   │   ├── CTASection.jsx
│   │   │   └── CTASection.css
│   │   │
│   │   ├── Tools/
│   │   │   ├── Tools.jsx             # Dashboard orchestrator (state owner)
│   │   │   ├── Tools.css
│   │   │   ├── TodayFocus.jsx
│   │   │   ├── TodayFocus.css
│   │   │   ├── TaskCreator.jsx
│   │   │   ├── TaskCreator.css
│   │   │   ├── PriorityList.jsx
│   │   │   ├── PriorityList.css
│   │   │   ├── TaskItem.jsx
│   │   │   ├── TaskItem.css
│   │   │   ├── NotePad.jsx
│   │   │   ├── NotePad.css
│   │   │   ├── FilterBar.jsx
│   │   │   ├── FilterBar.css
│   │   │   ├── ResetDay.jsx
│   │   │   └── ResetDay.css
│   │   │
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   ├── About.css
│   │   │   ├── MissionSection.jsx
│   │   │   ├── MissionSection.css
│   │   │   ├── TimelineSection.jsx
│   │   │   ├── TimelineSection.css
│   │   │   ├── ValuesGrid.jsx
│   │   │   ├── ValuesGrid.css
│   │   │   ├── FAQSection.jsx
│   │   │   └── FAQSection.css
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   ├── Contact.css
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ContactForm.css
│   │   │   ├── ContactInfo.jsx
│   │   │   └── ContactInfo.css
│   │   │
│   │   └── Profile/
│   │       ├── Profile.jsx
│   │       ├── Profile.css
│   │       ├── UserCard.jsx
│   │       ├── UserCard.css
│   │       ├── StatsOverview.jsx
│   │       ├── StatsOverview.css
│   │       ├── AchievementGrid.jsx
│   │       ├── AchievementGrid.css
│   │       ├── ActivityFeed.jsx
│   │       ├── ActivityFeed.css
│   │       ├── SettingsPanel.jsx
│   │       └── SettingsPanel.css
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useLocalStorage.js
│   │   ├── useTheme.js
│   │   └── useDebounce.js
│   │
│   ├── context/                      # React Context providers
│   │   ├── ThemeContext.jsx
│   │   └── UserContext.jsx
│   │
│   ├── utils/                        # Pure utility functions (no React)
│   │   ├── generateId.js             # UUID generation
│   │   ├── formatDate.js             # Date formatting helpers
│   │   ├── sortTasks.js              # Sorting algorithms
│   │   └── filterTasks.js            # Filter logic
│   │
│   ├── data/                         # Static mock data (hardcoded content)
│   │   ├── features.js               # Home page feature cards data
│   │   ├── testimonials.js           # Testimonial content
│   │   ├── values.js                 # About page values data
│   │   ├── achievements.js           # Achievement definitions
│   │   └── navLinks.js               # Navigation link definitions
│   │
│   ├── router/
│   │   └── AppRouter.jsx             # All route definitions in one place
│   │
│   ├── App.jsx                       # Root orchestrator (wraps providers + router)
│   └── main.jsx                      # Vite entry point (renders App into DOM)
│
├── index.html                        # Vite's HTML template
├── package.json
├── vite.config.js
└── .gitignore
```

### Folder Purpose Breakdown

| Folder | What Goes Here | What Does NOT Go Here |
|---|---|---|
| `components/common/` | Reusable UI primitives that appear on 2+ pages (Button, Card, Input, Badge, Modal, ProgressRing, SearchBar) | Page-specific sections like HeroSection or TaskCreator |
| `components/layout/` | Structural shells that frame every page (AppLayout, Navbar, Footer) | Any component with business logic or state |
| `pages/` | Route-level containers and their page-specific child sections | Reusable components — if you need it on 2+ pages, move it to `common/` |
| `hooks/` | Custom hooks that encapsulate reusable stateful logic | Regular utility functions (those go in `utils/`) |
| `context/` | React Context providers and their associated creation logic | Component files — contexts only provide/consume values |
| `utils/` | Pure JavaScript functions with zero React imports | Anything that uses `useState`, `useEffect`, or JSX |
| `data/` | Static arrays/objects used to populate UI (mock data) | API calls or dynamic data fetching |

> [!IMPORTANT]
> **The Co-location Principle**: Each component gets its own folder with its `.jsx` and `.css` file side by side. When you delete a component, you delete its entire folder — no orphan stylesheets scattered across the project.

---

## 2. Complete Component Architecture

### Full Component Hierarchy

```text
App (Root Orchestrator)
│
├── ThemeContext.Provider          ← Wraps everything, provides dark/light mode
│   └── UserContext.Provider      ← Wraps everything, provides user data + stats
│       └── AppRouter             ← Defines all routes
│           └── AppLayout         ← Structural frame (Navbar + Outlet + Footer)
│               │
│               ├── Navbar        ← Persistent top bar (logo, nav links, theme toggle)
│               │
│               ├── <Outlet />    ← React Router injects the active page here
│               │   │
│               │   ├── Home Page
│               │   │   ├── HeroSection          (CTA buttons, headline, illustration)
│               │   │   ├── FeaturesSection       (3-4 feature cards in a grid)
│               │   │   │   └── Card *            (reusable from common/)
│               │   │   ├── StatsSection          (animated counters)
│               │   │   ├── TestimonialsSection   (user quotes carousel/grid)
│               │   │   │   └── Card *
│               │   │   └── CTASection            (final conversion banner)
│               │   │       └── Button *
│               │   │
│               │   ├── Tools Page (STATE OWNER for tasks, notes, filters)
│               │   │   ├── SearchBar *                   (query input)
│               │   │   ├── FilterBar                     (priority chip toggles)
│               │   │   │   └── Badge *
│               │   │   ├── TodayFocus                    (displays top priority task)
│               │   │   │   └── Card *
│               │   │   ├── TaskCreator                   (form to add new tasks)
│               │   │   │   ├── Input *
│               │   │   │   ├── Button *
│               │   │   │   └── (priority dropdown)
│               │   │   ├── PriorityList                  (renders grouped task items)
│               │   │   │   └── TaskItem (× many)         (checkbox, label, actions)
│               │   │   │       ├── Badge *
│               │   │   │       └── Button *
│               │   │   ├── ProgressRing *                (SVG circular gauge)
│               │   │   ├── NotePad                       (auto-saving textarea)
│               │   │   └── ResetDay                      (destructive clear button)
│               │   │       ├── Button *
│               │   │       └── Modal *
│               │   │
│               │   ├── About Page
│               │   │   ├── MissionSection                (hero-style mission statement)
│               │   │   ├── TimelineSection               (vertical timeline of milestones)
│               │   │   │   └── Card *
│               │   │   ├── ValuesGrid                    (icon cards for core values)
│               │   │   │   └── Card *
│               │   │   └── FAQSection                    (accordion-style Q&A)
│               │   │
│               │   ├── Contact Page
│               │   │   ├── ContactInfo                   (address, phone, social links)
│               │   │   │   └── Card *
│               │   │   └── ContactForm                   (validated form with inputs)
│               │   │       ├── Input *
│               │   │       └── Button *
│               │   │
│               │   └── Profile Page
│               │       ├── UserCard                      (avatar, name, streak info)
│               │       │   └── Card *
│               │       ├── StatsOverview                 (productivity metrics grid)
│               │       │   ├── Card *
│               │       │   └── ProgressRing *
│               │       ├── AchievementGrid               (unlocked badges)
│               │       │   ├── Card *
│               │       │   └── Badge *
│               │       ├── ActivityFeed                  (timeline of completed tasks)
│               │       │   └── Card *
│               │       └── SettingsPanel                 (theme preference, name edit)
│               │           ├── Input *
│               │           └── Button *
│               │
│               └── Footer        ← Persistent bottom bar
```

> Components marked with `*` are **reusable** — they come from `components/common/`.

### Component Classification Table

| Category | Components | Owns State? | Receives Props? | Purpose |
|---|---|---|---|---|
| **Reusable Primitives** | Button, Card, Input, Badge, Modal, ProgressRing, SearchBar | Never (except internal UI state like "is modal open") | Always | Visual building blocks. Zero business logic. |
| **Layout Shells** | AppLayout, Navbar, Footer | Minimal (mobile menu toggle) | Navigation data | Structural framing that persists across all routes |
| **Page Orchestrators** | Home, Tools, About, Contact, Profile | **Yes** — Tools owns task state; Contact owns form state | Route params (if any) | Top-level route containers. They own page-level state and distribute it downward. |
| **Feature Sections** | HeroSection, FeaturesSection, TaskCreator, PriorityList, etc. | Local UI state only (dropdown open, input text) | Data + callbacks from parent page | Domain-specific UI that belongs to exactly one page |

### Which Components Should NEVER Manage State

These components are **pure presentational** — they receive everything via props and render it:

- `Card` — receives `title`, `children`, `variant`, renders a styled container
- `Badge` — receives `label`, `color`, renders a small tag
- `Button` — receives `label`, `onClick`, `variant`, renders a styled button
- `ProgressRing` — receives `percentage`, renders an SVG arc
- `TaskItem` — receives a task object + callback functions, renders a single row
- `StatsSection` — receives numbers, renders animated counters
- `TestimonialsSection` — receives an array of testimonials, maps through them
- `ActivityFeed` — receives an array of completed tasks, maps through them
- `AchievementGrid` — receives an array of achievements, maps through them

### Which Components Should OWN State

| Component | What State It Owns | Why It Owns It |
|---|---|---|
| `Tools.jsx` (page) | `tasks[]`, `notes`, `searchQuery`, `activeFilter`, `sortOrder` | It's the **nearest common ancestor** of TaskCreator, PriorityList, ProgressRing, NotePad, FilterBar, and SearchBar — all of which need to read from or write to the same data |
| `ContactForm.jsx` | `formData { name, email, message }`, `errors {}`, `isSubmitting` | Form state is 100% local — no other component needs to know what the user is typing mid-form |
| `TaskCreator.jsx` | `inputValue`, `selectedPriority`, `isDropdownOpen` | These are draft states — the task doesn't exist in the system until the user clicks "Add." Keeping draft state local prevents unnecessary re-renders of the entire dashboard |
| `SearchBar.jsx` | `localQuery` (the live keystroke value) | The actual search filter in Tools should only update when the user pauses typing (debounced) or presses Enter — not on every keystroke. Keeping a local copy prevents 60+ re-renders per second |
| `Navbar.jsx` | `isMobileMenuOpen` | Pure UI toggle — no other component cares if the hamburger menu is open |
| `ThemeContext` | `theme` ('light' or 'dark') | Every component across every route needs to read this. Context is the only sane solution |
| `UserContext` | `user { name, avatar, completedTotal, streak }` | Profile page and Navbar both need user data. Routes are siblings — they can't share props. Context bridges them |

---

## 3. Phase 1 — Static UI Shell (Days 1-5)

### Goal
Build every page's visual layout using **hardcoded, static content**. Zero state. Zero interactivity. Zero dynamic data. Your ONLY focus is pixel-perfect layouts, spacing, color systems, and responsive grids.

> [!TIP]
> **Why static first?** When you mix layout work with state logic, you can't tell if a bug is a CSS problem or a JavaScript problem. Building static UI first means every visual issue is guaranteed to be a styling issue — much easier to debug.

### Pages Worked On
All five pages, but built in a specific order (see below).

### CSS Variables System (Build This FIRST)

Before touching any component, define your design tokens in `variables.css`:

**What to define:**
- **Color palette**: Background shades (3-4 levels of dark), accent colors (primary, secondary, success, warning, danger), text colors (primary, muted, inverse)
- **Spacing scale**: A consistent scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)
- **Typography scale**: Font sizes (xs through 3xl), font weights (regular, medium, semibold, bold), line heights
- **Border radius scale**: Small (6px), medium (12px), large (16px), full (9999px)
- **Shadows**: Subtle elevation levels (sm, md, lg)
- **Transitions**: Standard duration and easing function

> [!IMPORTANT]
> **Why variables first?** Every component you build will reference these tokens. If you hardcode `#1a1a2e` in 47 places and later want to change it, you'll hunt through every file. With CSS variables, you change ONE line.

### Exact UI Build Order

---

#### Step 1: `main.jsx` + `App.jsx` + `index.css`

**What**: The absolute minimum entry point. `main.jsx` renders `App` into the DOM. `App.jsx` returns a single `<div>` with the text "DailyFlow". `index.css` applies your global reset (box-sizing, margin removal, font import).

**Why first**: You need to confirm Vite is running, React is rendering, and your CSS is loading before building anything else. If this doesn't work, nothing else will.

---

#### Step 2: `AppLayout`

**What**: A wrapper component that accepts `children` and renders them inside a flex column container. Sets `min-height: 100vh`, applies the dark background color from your CSS variables, and establishes the maximum content width with auto margins.

**Why second**: This is the **visual frame** of your entire application. Every page lives inside this frame. You need the frame before you can put anything in it.

**Layout structure**:
```text
┌─────────────────────────────────────────┐
│              Navbar (slot)              │
├─────────────────────────────────────────┤
│                                         │
│           Main Content Area             │
│         (children / flex-grow)          │
│                                         │
├─────────────────────────────────────────┤
│              Footer (slot)              │
└─────────────────────────────────────────┘
```

**React concept introduced**: `children` prop — the foundational composition pattern. AppLayout doesn't know or care what's inside it. It just provides structure.

---

#### Step 3: `Navbar`

**What**: A horizontal bar pinned to the top. Contains: logo/brand name on the left, navigation links in the center, and a theme toggle button placeholder on the right.

**Why third**: The navbar is the user's primary orientation tool. It appears on every page. Building it early means every subsequent page you build will feel "real" — you'll see it inside a proper app frame, not floating in a void.

**Layout structure**:
```text
┌──────────────────────────────────────────────────┐
│  🔷 DailyFlow    Home  Tools  About  Contact  Profile    🌙  │
└──────────────────────────────────────────────────┘
```

**Visual details**:
- Use `backdrop-filter: blur()` for a frosted glass effect against the dark background
- Use `position: sticky; top: 0` so it stays visible during scroll
- Set a high `z-index` so it floats above page content

**React concept introduced**: Mapping an array of link objects to JSX elements (your first taste of `.map()`). Define your links in `data/navLinks.js` and iterate over them.

---

#### Step 4: `Footer`

**What**: A simple bottom section with copyright text, social media icon links, and a "Back to top" anchor.

**Why fourth**: Completes the structural shell. With Navbar + AppLayout + Footer, you now have a complete app skeleton that wraps everything.

---

#### Step 5: `Home` Page — HeroSection

**What**: A full-viewport-height section with a large headline ("Master Your Day, One Task at a Time"), a subtitle paragraph, a CTA button ("Get Started"), and a decorative illustration or abstract shape on the right side.

**Why fifth**: This is the user's first impression. It requires no data, no state — pure visual storytelling. It's the easiest page to make look impressive.

**Layout structure**:
```text
┌──────────────────────────────────────────┐
│                                          │
│   Master Your Day,          ┌─────────┐ │
│   One Task at a Time        │  Visual  │ │
│                             │  Asset   │ │
│   Subtitle text here...     │         │ │
│                             └─────────┘ │
│   [ Get Started ]                        │
│                                          │
└──────────────────────────────────────────┘
```

**React concept introduced**: Building your first **reusable `Button` component** in `components/common/`. The Button accepts props like `label`, `variant` (primary, secondary, ghost), and `size` (sm, md, lg). You use it here and will reuse it across the entire app.

---

#### Step 6: `Home` Page — FeaturesSection

**What**: A 3-column (or 2-column on tablet, 1-column on mobile) grid of feature cards. Each card has an icon/emoji, a title ("Daily Focus", "Priority Tasks", "Track Progress"), and a short description.

**Why sixth**: This is your first time building a **reusable `Card` component** and your first time using `.map()` to render a list of cards from data.

**Data source**: Create `data/features.js` — an array of objects with `id`, `icon`, `title`, `description`. Map over this array inside `FeaturesSection`.

**React concepts introduced**:
- Building the reusable `Card` component (composition with `children` or explicit props)
- Rendering lists with `.map()` and the `key` prop
- Separating data from presentation (data lives in `data/`, component just renders it)

---

#### Step 7: `Home` Page — StatsSection, TestimonialsSection, CTASection

**What**:
- **StatsSection**: Three large numbers ("10K+ Tasks Completed", "5K+ Users", "99% Uptime") in a horizontal row. Hardcoded for now — animation comes in Phase 6.
- **TestimonialsSection**: 2-3 quote cards with user name, role, and testimonial text. Uses `Card` component.
- **CTASection**: A final banner with a gradient background, a compelling headline, and a `Button`.

**Why seventh**: These complete the Home page. They're simple, repetitive sections that reinforce your `.map()` and `Card` reuse skills.

---

#### Step 8: `Tools` Page — Layout Grid Only

**What**: The dashboard page layout structure. NO task data. NO inputs. Just the grid skeleton with labeled placeholder boxes ("Today Focus Here", "Task Creator Here", "Priority List Here", "Progress Ring Here", "NotePad Here").

**Why eighth**: The Tools page has the most complex layout in the entire app — a responsive bento grid. Getting this right before adding interactivity is critical.

**Layout structure**:
```text
┌──────────────────────────────────────────────┐
│  [Search Bar]                    [Filter Bar]│
├──────────────────────┬───────────────────────┤
│                      │                       │
│   Today Focus        │   Progress Ring       │
│   (large card)       │   (stats card)        │
│                      │                       │
├──────────────────────┤                       │
│                      ├───────────────────────┤
│   Task Creator       │                       │
│   (input area)       │   NotePad             │
│                      │   (textarea)          │
├──────────────────────┤                       │
│                      │                       │
│   Priority List      │                       │
│   (scrollable)       │                       │
│                      ├───────────────────────┤
│                      │   Reset Day           │
│                      │   (action button)     │
└──────────────────────┴───────────────────────┘
```

Use CSS Grid with named areas or a column-based approach. The left column is roughly 60-65% width, the right column 35-40%.

**React concept reinforced**: Component composition — `Tools.jsx` imports and arranges all sub-components like building blocks.

---

#### Step 9: `About` Page

**What**: 
- **MissionSection**: Hero-style banner with mission statement text
- **TimelineSection**: A vertical timeline showing company milestones (hardcoded data). Each milestone is a card with a date, title, and description, connected by a vertical line.
- **ValuesGrid**: A 2×2 or 3-column grid of value cards (Simplicity, Focus, Growth, Community), each with an icon and description.
- **FAQSection**: An accordion of Q&A items. Each item shows a question — clicking it reveals the answer below.

**Why ninth**: The FAQ accordion is your first encounter with **toggling visibility** — a preview of interactivity that uses simple boolean logic. In Phase 1, hardcode one item open and the rest closed. In Phase 2, you'll make it interactive.

---

#### Step 10: `Contact` Page

**What**:
- **ContactInfo**: A card showing company address, phone, email, and social media links (icons with external link references).
- **ContactForm**: A form with Name, Email, Subject, and Message fields plus a Submit button. All fields are static — they don't track input yet.

**Why tenth**: Forms are deceptive — they look simple but involve controlled inputs (Phase 2). For now, just build the visual structure.

**Layout structure**:
```text
┌─────────────────────────────────────────┐
│                                         │
│   ┌──────────────┐  ┌────────────────┐  │
│   │  Contact     │  │  Name: ____    │  │
│   │  Info Card   │  │  Email: ____   │  │
│   │              │  │  Subject: ____ │  │
│   │  📍 Address  │  │  Message:      │  │
│   │  📞 Phone   │  │  ___________   │  │
│   │  ✉️ Email   │  │  ___________   │  │
│   │  🔗 Social  │  │               │  │
│   │              │  │  [Submit]      │  │
│   └──────────────┘  └────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

---

#### Step 11: `Profile` Page

**What**:
- **UserCard**: Avatar placeholder, display name, join date, current streak
- **StatsOverview**: Grid of metric cards (Tasks Completed, Current Streak, Best Day, Completion Rate) — all hardcoded numbers
- **AchievementGrid**: Badges/icons representing milestones ("First Task", "7-Day Streak", "100 Tasks")
- **ActivityFeed**: A vertical list of recent completed tasks with timestamps
- **SettingsPanel**: Name input field, theme preference toggle — static layout only

**Why last in Phase 1**: The Profile page depends on data that will come from the Tools page (completed tasks, streaks). You need to understand the full data picture before designing this layout, even though it's static right now.

### Phase 1 React Concepts Summary

| Concept | Where It Appears | What You Learn |
|---|---|---|
| `children` prop | AppLayout wrapping page content | Composition over inheritance |
| `.map()` + `key` | FeaturesSection, ValuesGrid, TestimonialsSection, navLinks | Rendering lists from data arrays |
| Reusable components | Button, Card, Input, Badge | Designing flexible APIs with props |
| Props | Every component receives display data | One-way data flow (parent → child) |
| CSS Modules / scoped CSS | Every `.css` file paired with its `.jsx` | Preventing style collisions |
| Semantic HTML | `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` | Accessibility and SEO foundations |

### ⚠️ Phase 1 Beginner Mistakes

| Mistake | Why It's Wrong | What to Do Instead |
|---|---|---|
| Putting all CSS in one giant file | Creates specificity nightmares and makes components impossible to reuse in other projects | Co-locate CSS with each component (one `.css` per `.jsx`) |
| Hardcoding colors as hex values everywhere | When you want to change your color scheme, you'll have to find-replace across 50+ files | Define all colors as CSS variables in `variables.css` |
| Skipping mobile layouts | The app looks "done" on desktop but broken on phones | Build mobile-first, then add `min-width` media queries for larger screens |
| Building components that are too specific | A "FeatureCard" that only works for the features section | Build a generic `Card` that works everywhere, then compose specific sections on top |
| Using `<div>` for everything | Screen readers and SEO bots can't navigate your page | Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |
| Not committing to Git | If Phase 2 breaks your layout, you lose everything | `git init` on Day 1. Commit after completing each step. |

---

## 4. Phase 2 — Basic Interactivity (Days 6-9)

### Goal
Add client-side interactivity to the static shells built in Phase 1. Introduce `useState`, event handlers, controlled inputs, and conditional rendering. **All state is local** — no lifting, no context, no sharing between components.

### Pages Worked On
Tools page (primary), Contact page, About page (FAQ), Navbar

### Component Interactivity Build Order

---

#### Step 1: FAQ Accordion in `FAQSection`

**What state**: A `activeIndex` (number or null) tracking which FAQ item is currently expanded.

**Interactivity**: Clicking a question toggles its answer panel open. Clicking a different question closes the previous one and opens the new one. Clicking the same question closes it.

**Why first**: This is the simplest possible use of `useState` + click handlers + conditional rendering. One piece of state, one click handler, one ternary in JSX.

**React concepts introduced**:
- `useState` — declaring state, reading it, updating it
- Click event handlers — `onClick={() => setActiveIndex(i)}`
- Conditional rendering — `{activeIndex === i && <div>{answer}</div>}`

---

#### Step 2: Mobile Menu Toggle in `Navbar`

**What state**: A boolean `isMobileMenuOpen` controlling whether the hamburger menu is visible.

**Interactivity**: On small screens, nav links collapse behind a hamburger icon. Clicking the icon toggles the menu. Clicking a link closes the menu.

**Why second**: Another simple boolean toggle, but this one involves **responsive behavior** — the toggle only matters at small viewport widths. Reinforces `useState` + conditional rendering in a new context.

---

#### Step 3: Priority Dropdown in `TaskCreator`

**What state**: 
- `isDropdownOpen` (boolean) — controls whether the dropdown options are visible
- `selectedPriority` (string: 'high', 'medium', 'low') — tracks the selected option

**Interactivity**: Clicking the priority selector opens a dropdown. Selecting an option closes the dropdown and updates the displayed priority. The selector visually changes color based on the selected priority (red for high, yellow for medium, green for low).

**Why third**: Introduces **multiple related state variables** in one component and **dynamic styling based on state** (changing CSS classes based on the selected priority value).

**React concepts introduced**:
- Multiple `useState` calls in one component
- Dynamic className assignment based on state values
- Closing dropdowns on selection (state coordination)

---

#### Step 4: Controlled Inputs in `TaskCreator`

**What state**: `taskInput` (string) tracking the text in the task name input field.

**Interactivity**: As the user types, the input value updates in real-time. A character counter shows remaining characters (e.g., "42/100"). The "Add" button is disabled when the input is empty. Pressing Enter triggers the same action as clicking "Add."

**Why fourth**: This is your first **controlled component** — where React owns the input's value via `useState`, and the `onChange` handler updates state on every keystroke. This is fundamentally different from how vanilla HTML forms work and is one of React's most important patterns.

**React concepts introduced**:
- Controlled inputs (`value={state}` + `onChange={handler}`)
- Derived values (character count = max - current length, computed during render)
- Disabling elements based on state (`disabled={taskInput.trim() === ''}`)
- Keyboard events (`onKeyDown` for Enter key detection)

---

#### Step 5: Controlled Inputs in `ContactForm`

**What state**: An object `formData` with keys `name`, `email`, `subject`, `message`. An object `errors` with the same keys for validation messages. A boolean `isSubmitted` for showing a success message.

**Interactivity**: 
- All fields are controlled inputs
- On blur (leaving a field), validate that field and show an error message if invalid
- Email validation checks for `@` and `.` presence
- Message field has a minimum length requirement
- Submit button validates all fields, shows errors or a success message
- Success message resets after 3 seconds

**Why fifth**: Reinforces controlled inputs but adds **form validation** — a real-world skill. Also introduces `onBlur` events, error state management, and the pattern of validating an entire form on submit.

**React concepts introduced**:
- Managing object state (using spread operator to update one key at a time)
- `onBlur` event for field-level validation
- Form `onSubmit` with `e.preventDefault()`
- Conditional rendering of error messages
- `setTimeout` for auto-dismissing success messages

---

#### Step 6: Task CRUD Operations in `Tools.jsx`

**What state**: `tasks` — an array of task objects, each with `{ id, title, priority, done, createdAt }`.

**Interactivity**:
- **Add**: When TaskCreator submits, create a new task object and append it to the array
- **Complete**: Clicking a checkbox in TaskItem flips the `done` boolean for that specific task
- **Delete**: Clicking a trash icon in TaskItem removes that task from the array
- **Edit** (inline): Double-clicking a task title makes it editable. Pressing Enter or blurring saves the edit.

**Why sixth**: This is the **core feature** of the entire app. It requires working with arrays of objects in state — the most common and most error-prone pattern in React. You need the input handling skills from Steps 4-5 before tackling this.

**React concepts introduced**:
- Array state management with immutable operations:
  - **Add**: `setTasks(prev => [...prev, newTask])`
  - **Toggle**: `setTasks(prev => prev.map(t => t.id === id ? {...t, done: !t.done} : t))`
  - **Delete**: `setTasks(prev => prev.filter(t => t.id !== id))`
  - **Edit**: `setTasks(prev => prev.map(t => t.id === id ? {...t, title: newTitle} : t))`
- Generating unique IDs (use `crypto.randomUUID()` or a simple counter)
- The critical importance of the `key` prop in mapped lists

> [!CAUTION]
> **NEVER mutate state directly.** `tasks.push(newTask)` will NOT trigger a re-render. React only re-renders when you call the setter function with a NEW array reference. Always use spread (`[...prev, item]`), `.map()`, or `.filter()` to create new arrays.

---

#### Step 7: NotePad Auto-Behavior in `NotePad`

**What state**: `noteContent` (string) tracking the textarea value.

**Interactivity**: A large textarea that tracks every keystroke. Displays a word count and character count below it. (In Phase 6, this will auto-save to localStorage.)

**Why seventh**: Simple controlled textarea. After the complexity of task CRUD, this feels easy — that's intentional. It builds confidence.

---

#### Step 8: Progress Ring Dynamic Calculation

**What it receives**: `totalTasks` and `completedTasks` as props from `Tools.jsx`.

**Interactivity**: The SVG circular progress indicator visually fills based on the completion percentage. The percentage number in the center updates. When completion reaches 100%, the ring color changes to a "success" color.

**Why eighth**: This is your first **derived state component** — it never calls `useState`. It computes everything from the props it receives. This is a critical lesson: not everything needs to be state.

**React concepts introduced**:
- Derived/computed values (percentage = completed/total × 100)
- SVG manipulation (stroke-dashoffset calculation from percentage)
- The principle that **if a value can be calculated from existing props or state, it should NOT be stored as separate state**

### Phase 2 React Concepts Summary

| Concept | Where It Appears |
|---|---|
| `useState` (boolean) | FAQ accordion, mobile menu, dropdown |
| `useState` (string) | Task input, note content, search query |
| `useState` (object) | Contact form data, form errors |
| `useState` (array of objects) | Tasks collection |
| Controlled inputs | TaskCreator, ContactForm, NotePad, SearchBar |
| Event handlers (onClick, onChange, onSubmit, onBlur, onKeyDown) | Every interactive component |
| Conditional rendering (`&&`, ternary) | FAQ answers, error messages, empty states, mobile menu |
| Immutable array operations | Task add, complete, delete, edit |
| Derived state | ProgressRing percentage, character counts, disabled button states |

### ⚠️ Phase 2 Beginner Mistakes

| Mistake | Why It's Dangerous | What to Do Instead |
|---|---|---|
| Mutating arrays directly (`tasks.push()`) | React won't re-render because the reference didn't change | Always create new arrays: `[...tasks, newItem]` |
| Storing derived values as state | Two sources of truth. They WILL desync. | Calculate derived values in the component body during render |
| Using array index as the `key` prop | When items are added/removed/reordered, React maps state to the wrong DOM element | Use unique IDs (`crypto.randomUUID()`) |
| Putting `setState` calls directly in the component body | Infinite render loop: render → setState → render → setState → crash | State updates belong inside event handlers or `useEffect` |
| Not using `e.preventDefault()` on form submit | The browser reloads the page, destroying all React state | Always prevent default in form `onSubmit` handlers |
| Declaring event handlers inline inside `.map()` as complex functions | Creates new function references on every render, harder to debug | Define handler functions outside the JSX, pass ID as argument |

---

## 5. Phase 3 — Component Communication (Days 10-12)

### Goal
You have state, and it works locally. Now you must learn the **rules of structured communication** — how data flows between parent and child components, and WHY certain components own state while others don't.

### The Data Flow Architecture of Tools Page

```text
    Tools.jsx (State Owner)
    ┌─────────────────────────────────────────────────────────┐
    │ State: tasks[], notes, searchQuery, activeFilter        │
    │                                                         │
    │ ┌─── Passes down ─────────────────────────────────────┐ │
    │ │                                                     │ │
    │ │  TaskCreator          PriorityList    ProgressRing   │ │
    │ │  receives:            receives:      receives:      │ │
    │ │  • onAddTask(task)    • tasks[]      • totalTasks   │ │
    │ │    (callback)         • onToggle(id) • completed    │ │
    │ │                       • onDelete(id)  (read-only)   │ │
    │ │  calls callback       • onEdit(id)                  │ │
    │ │  when user submits    │                             │ │
    │ │                       └── TaskItem                  │ │
    │ │                           receives:                 │ │
    │ │                           • task object             │ │
    │ │                           • onToggle                │ │
    │ │                           • onDelete                │ │
    │ │                           • onEdit                  │ │
    │ └─────────────────────────────────────────────────────┘ │
    └─────────────────────────────────────────────────────────┘
```

### Step 1: Define the Callback Contract

**What you do**: In `Tools.jsx`, define the handler functions:
- `handleAddTask(newTask)` — appends to tasks array
- `handleToggleTask(id)` — flips `done` boolean for matching task
- `handleDeleteTask(id)` — filters out the matching task
- `handleEditTask(id, newTitle)` — updates the title for matching task

**Why**: These are the **only four ways** the tasks array can change. By defining them in one place (the state owner), you create a single source of truth for all mutations. Bugs become easy to trace: if a task isn't deleting correctly, you know exactly which function to inspect.

### Step 2: Pass Callbacks Down as Props

**What you do**: Pass these handler functions as props to the child components that need to trigger them.

- `TaskCreator` receives `onAddTask`
- `PriorityList` receives `tasks`, `onToggleTask`, `onDeleteTask`, `onEditTask`
- `PriorityList` passes individual task data + handlers to each `TaskItem`

### Step 3: Understand the "Prop Drilling" Depth

```text
Tools.jsx                          (defines onDeleteTask)
  └── PriorityList                 (receives onDeleteTask as prop, passes it through)
        └── TaskItem               (receives onDeleteTask, attaches it to trash icon onClick)
```

This is **2 levels of prop drilling** — manageable and clean. The general rule:

- **1-2 levels**: Prop drilling is fine. Simple, explicit, easy to trace.
- **3+ levels**: Consider Context API (Phase 6).

### Step 4: Wire Up Search and Filter

**SearchBar → Tools.jsx → PriorityList flow**:

1. `SearchBar` has its own local state for the live input value
2. When the user presses Enter (or after a debounce), it calls `onSearch(query)` — a callback from `Tools.jsx`
3. `Tools.jsx` updates its `searchQuery` state
4. When rendering `PriorityList`, `Tools.jsx` filters the `tasks` array based on `searchQuery` before passing it down

**FilterBar → Tools.jsx → PriorityList flow**:

1. `FilterBar` renders priority chips (All, High, Medium, Low)
2. Clicking a chip calls `onFilterChange(priority)` — a callback from `Tools.jsx`
3. `Tools.jsx` updates its `activeFilter` state
4. `Tools.jsx` applies both `searchQuery` AND `activeFilter` to the tasks array before passing the filtered result to `PriorityList`

> [!IMPORTANT]
> **The filtering happens in the state owner (Tools.jsx), NOT in PriorityList.** PriorityList should receive an already-filtered array. It doesn't know about filters — it just renders whatever it receives. This separation of concerns is critical.

### Phase 3 Communication Rules

| Rule | Explanation |
|---|---|
| **Data flows down** | Parents pass data to children via props. Never the reverse. |
| **Events flow up** | Children notify parents of user actions via callback functions received as props. |
| **State lives at the nearest common ancestor** | If two siblings need the same data, their parent owns it. |
| **Single responsibility** | Each component does ONE thing. TaskCreator creates tasks. PriorityList renders them. ProgressRing visualizes stats. None of them know about each other. |
| **Children don't know where their data comes from** | TaskItem receives a task object. It doesn't know if it came from localStorage, an API, or hardcoded data. This makes components reusable. |

### ⚠️ Phase 3 Beginner Mistakes

| Mistake | Why It Breaks Everything | Do This Instead |
|---|---|---|
| Having PriorityList call setTasks directly | PriorityList would need direct access to Tools' state, coupling them tightly | PriorityList receives an `onToggle` callback and calls it with the task ID |
| Filtering inside PriorityList instead of in Tools.jsx | PriorityList becomes responsible for filter logic + rendering + state reading. Too many jobs. | Filter in Tools.jsx, pass the result to PriorityList |
| Creating a "global state object" that every component imports | Spaghetti dependencies. Any change breaks everything. Untestable. | Let state flow through the tree via props. Use Context only for truly global concerns (theme, user). |
| Not passing callbacks — instead having children import parent functions | This creates circular dependencies and is a React anti-pattern | Always pass functions as props from parent to child |

---

## 6. Phase 4 — State Design Deep-Dive (Days 13-14)

### Goal
Step back from coding. Audit every piece of state in your application. Apply a rigorous decision framework to determine where each piece of state should live, why, and what its data shape should be.

### The State Decision Framework

For every piece of data in your app, ask these questions in order:

```text
Question 1: Can this value be CALCULATED from existing state or props?
├── YES → It is NOT state. Compute it during render.
│         Examples: completion percentage, filtered task list, task count
│
└── NO → Continue to Question 2

Question 2: Does this value change over time due to user action or time?
├── NO → It is NOT state. It's a constant. Put it in data/ or define it as a const.
│         Examples: feature descriptions, nav links, achievement definitions
│
└── YES → Continue to Question 3

Question 3: Is this value needed by MORE THAN ONE sibling component?
├── YES → Hoist it to the nearest shared parent. If siblings are in different
│         route trees, use Context.
│
└── NO → Keep it local inside the single component that uses it.
```

### Complete State Audit for DailyFlow

| State Item | Data Shape | Owner | Consumed By | Why There? |
|---|---|---|---|---|
| **Tasks array** | `[{ id, title, priority, done, createdAt }]` | `Tools.jsx` | TaskCreator, PriorityList, TaskItem, ProgressRing, TodayFocus, FilterBar, SearchBar (indirectly) | All dashboard children need to read or modify this data. Tools.jsx is their nearest common ancestor. |
| **Notes content** | `string` | `Tools.jsx` | NotePad | Could be local to NotePad, but keeping it in Tools allows the Reset Day feature to clear it. Also needed for localStorage sync at the Tools level. |
| **Search query** | `string` | `Tools.jsx` | SearchBar (writes to it via callback), PriorityList (reads filtered result) | Two siblings need coordination: SearchBar produces the query, PriorityList consumes the filtered output. |
| **Active filter** | `string` ('all', 'high', 'medium', 'low') | `Tools.jsx` | FilterBar (writes to it via callback), PriorityList (reads filtered result) | Same pattern as search query — two siblings coordinating. |
| **Sort order** | `string` ('newest', 'oldest', 'priority') | `Tools.jsx` | Sorting controls, PriorityList | Affects how tasks render — must be applied before passing to PriorityList. |
| **Task input draft** | `string` | `TaskCreator` (local) | Only TaskCreator | No other component cares what the user is typing before they press Add. |
| **Selected priority (in creator)** | `string` | `TaskCreator` (local) | Only TaskCreator | Draft state — doesn't affect the system until submitted. |
| **Dropdown open state** | `boolean` | `TaskCreator` (local) | Only TaskCreator | Pure UI toggle — no business meaning. |
| **Form data** | `{ name, email, subject, message }` | `ContactForm` (local) | Only ContactForm | No other component needs form input data. |
| **Form errors** | `{ name, email, subject, message }` | `ContactForm` (local) | Only ContactForm | Validation state is internal to the form. |
| **FAQ active index** | `number or null` | `FAQSection` (local) | Only FAQSection | Which FAQ is expanded is a local UI concern. |
| **Mobile menu open** | `boolean` | `Navbar` (local) | Only Navbar | Pure UI toggle. |
| **Theme mode** | `string` ('light' or 'dark') | `ThemeContext` | Every component that applies conditional CSS classes | Affects styling of components across ALL routes. Cannot be hoisted to a single parent without Context. |
| **User data** | `{ name, avatar, completedTotal, streak, joinDate }` | `UserContext` | Navbar (shows name), Profile page (shows all stats), Tools page (updates completedTotal) | Needed across different route trees. Routes are siblings — they can't share props. |
| **Modal open state** | `boolean` | Component triggering the modal (local) | Only that component + Modal | Modals are local UI concerns. The trigger component owns the open/close state. |

### What is NOT State (Computed/Derived Values)

These values might feel like state, but they should be **calculated during render**:

| Value | How to Calculate | Why It's Not State |
|---|---|---|
| Completion percentage | `(tasks.filter(t => t.done).length / tasks.length) * 100` | Changes automatically when `tasks` changes. Storing it separately creates a sync risk. |
| Filtered task list | `tasks.filter(t => matchesSearch && matchesPriority)` | Derived from `tasks` + `searchQuery` + `activeFilter`. |
| Task counts (total, completed, remaining) | `tasks.length`, `tasks.filter(t => t.done).length` | Derived from `tasks`. |
| Today's focus task | `tasks.filter(t => !t.done && t.priority === 'high')[0]` | Derived from `tasks`. The "top priority incomplete task" is a read-only lens into the existing array. |
| Whether the Add button is disabled | `taskInput.trim() === ''` | Derived from `taskInput`. |
| Whether all tasks are complete | `tasks.length > 0 && tasks.every(t => t.done)` | Derived from `tasks`. |

> [!WARNING]
> **The #1 state design mistake beginners make**: Storing `completedCount` as separate state and trying to keep it in sync with the `tasks` array. They eventually go out of sync because you forget to decrement when deleting a completed task, or increment when adding an already-completed task. Calculate it. Every time. From the source array.

---

## 7. Phase 5 — Routing with React Router (Days 15-17)

### Goal
Stitch your standalone pages into a cohesive single-page application using React Router v6. Users navigate between pages without browser reloads. The URL bar updates to reflect the current page.

### Route Architecture

```text
/                    → Home page
/tools               → Dashboard (Tools page)
/about               → About page
/contact             → Contact page
/profile             → Profile page
```

### Step-by-Step Routing Setup

#### Step 1: Install React Router

Install `react-router-dom` as a project dependency.

#### Step 2: Create `AppRouter.jsx`

Define all routes in one file. Use the **layout route pattern**:

```text
Route Structure:
└── "/" (Layout Route → AppLayout)
    ├── index → Home
    ├── "tools" → Tools
    ├── "about" → About
    ├── "contact" → Contact
    └── "profile" → Profile
```

**What is a Layout Route?** A route that renders `AppLayout` — which contains `Navbar`, `<Outlet />`, and `Footer`. The `<Outlet />` is a special React Router component that renders whichever child route matches the current URL. This means Navbar and Footer appear on EVERY page without duplicating them.

#### Step 3: Update `App.jsx`

`App.jsx` wraps everything in `BrowserRouter`, then renders `AppRouter`. It also wraps the router in the `ThemeProvider` and `UserProvider` context wrappers (which you'll build in Phase 6).

#### Step 4: Replace `<a>` Tags with `<Link>` Components

In `Navbar`, replace all `<a href="/about">` with `<Link to="/about">`. This is critical — `<a>` tags cause full page reloads, destroying React state. `<Link>` intercepts clicks and updates the URL without reloading.

#### Step 5: Add Active Link Styling

Use `<NavLink>` instead of `<Link>` in the Navbar. `NavLink` automatically adds an `active` className when the current URL matches its `to` prop. Style the active link differently (brighter color, underline, etc.) so users know which page they're on.

#### Step 6: Handle 404 / Not Found

Add a catch-all route (`path="*"`) that renders a "Page Not Found" component. This prevents users from seeing a blank screen when they type a wrong URL.

### Routing Concepts Explained

| Concept | What It Does | Where Used |
|---|---|---|
| `BrowserRouter` | Enables URL-based routing in your React app. Wraps the entire app. | `App.jsx` |
| `Routes` + `Route` | Declares the mapping between URL paths and components | `AppRouter.jsx` |
| `<Outlet />` | A placeholder in a layout component where child route content renders | `AppLayout.jsx` |
| `<Link to="...">` | Navigates without page reload | `Navbar`, `HeroSection` CTA button |
| `<NavLink>` | Like Link but adds `active` class for styling | `Navbar` |
| `useNavigate()` | Programmatic navigation (e.g., redirect after form submit) | `ContactForm` (redirect to success), `HeroSection` (Go to Tools button) |
| `useLocation()` | Read the current URL path | Scroll-to-top behavior on route change |
| Nested/Layout routes | A parent route that renders shared UI (Navbar/Footer) around child routes | `AppLayout` as the layout route |

### Navigation Flow

```text
User lands on "/"
  → BrowserRouter matches "/" 
  → Renders AppLayout (Navbar + Footer)
  → Outlet renders Home page

User clicks "Tools" in Navbar
  → NavLink fires, URL changes to "/tools"
  → NO page reload
  → Outlet swaps Home for Tools page
  → Navbar "Tools" link gets "active" class

User clicks "Get Started" button on Home hero
  → onClick calls navigate("/tools")
  → Same swap behavior as above
```

### ⚠️ Phase 5 Beginner Mistakes

| Mistake | Impact | Fix |
|---|---|---|
| Using `<a href>` instead of `<Link>` | Full page reload destroys all React state (tasks, notes, everything) | Always use `Link` or `NavLink` from react-router-dom |
| Putting `BrowserRouter` inside a component that re-renders | Router resets on every re-render | Put `BrowserRouter` at the very top level (`App.jsx` or `main.jsx`) |
| Not using layout routes | Duplicating Navbar and Footer in every page component | Use a layout route with `<Outlet />` |
| Not handling the scroll position on route change | Navigating from a scrolled-down page to a new page starts mid-scroll | Add a `ScrollToTop` component that calls `window.scrollTo(0, 0)` on route change |
| Hardcoding links in multiple places | Changing a route path requires updating every Link | Define routes as constants in a config file and reference them |

---

## 8. Phase 6 — Advanced Features (Days 18-25)

### Goal
Add production-grade polish features, one at a time, in a carefully ordered sequence. Each feature builds on the skills from previous features.

### Feature Build Order (and Why)

---

#### Feature 1: localStorage Persistence (Day 18)

**Why first**: Without persistence, every page refresh destroys the user's tasks and notes. This is the single most impactful improvement to user experience.

**What you build**: A custom hook called `useLocalStorage` in `hooks/useLocalStorage.js`.

**How it works conceptually**:
1. On mount, check if a value exists in localStorage for the given key
2. If yes, parse it from JSON and use it as the initial state value
3. If no, use the provided default value
4. Whenever the state value changes, serialize it to JSON and save it to localStorage

**Where it's used**: Replace `useState` with `useLocalStorage` for `tasks` and `notes` in `Tools.jsx`.

**React concepts practiced**:
- Custom hooks — extracting reusable stateful logic into a function that starts with "use"
- `useEffect` — running side effects (localStorage writes) after renders
- Lazy initialization of `useState` — passing a function to `useState(() => readFromStorage())` so it only reads from localStorage once on mount, not on every render

**Decisions to think about**:
- What happens if localStorage has corrupt/invalid JSON? Your hook needs a try-catch.
- Should you debounce writes to localStorage? If the user types rapidly in NotePad, you'd be writing on every keystroke. A debounce of 500ms is sensible.

---

#### Feature 2: Theme Engine — Dark/Light Mode (Day 19)

**Why second**: It's a perfect introduction to the Context API, which is the most important concept you haven't used yet. And it produces a highly visible result.

**What you build**:
1. `ThemeContext.jsx` in `context/` — creates the context and the provider component
2. `useTheme.js` in `hooks/` — a custom hook that consumes the context

**How it works conceptually**:
1. `ThemeContext.Provider` wraps the entire app (inside `App.jsx`)
2. It manages `theme` state ('light' or 'dark')
3. It provides `{ theme, toggleTheme }` to all descendants
4. When `theme` changes, set a `data-theme` attribute on the `<html>` element
5. All CSS uses variables that change based on `[data-theme="light"]` vs `[data-theme="dark"]` selectors
6. The Navbar's theme toggle button consumes `useTheme()` and calls `toggleTheme`
7. Persist the theme preference using `useLocalStorage` (from Feature 1)

**React concepts practiced**:
- `createContext` — creating a context object
- Context Provider — wrapping components to broadcast values
- `useContext` — consuming context values in any descendant
- Custom hook wrapping context — `useTheme()` is cleaner than `useContext(ThemeContext)` everywhere

**CSS architecture**:
```text
variables.css defines:
  :root { --bg-primary: #0a0a0f; ... }                /* dark theme (default) */
  [data-theme="light"] { --bg-primary: #f8f9fa; ... }  /* light overrides */

All components reference var(--bg-primary), var(--text-primary), etc.
Toggle changes [data-theme] on <html> → all variables update → all styles cascade.
```

---

#### Feature 3: User Context — Cross-Route Data Sharing (Day 20)

**Why third**: You've just learned Context. Now apply it to a business problem: the Profile page needs to display data (completed tasks count, streak) that originates from the Tools page. Since these pages are in different route subtrees, they can't share data via props.

**What you build**:
1. `UserContext.jsx` — provides `{ user, updateCompletedCount, updateStreak }`
2. `Tools.jsx` calls `updateCompletedCount` whenever a task is completed
3. `Profile.jsx` reads `user` to display stats

**Data flow**:
```text
App.jsx
└── UserContext.Provider (state: user object)
    └── AppRouter
        ├── /tools → Tools.jsx calls updateCompletedCount(+1)
        └── /profile → Profile.jsx reads user.completedTotal
```

---

#### Feature 4: Search with Debouncing (Day 20-21)

**Why fourth**: You've built search in Phase 2, but it fires on every keystroke — causing 5-10 re-renders per second of typing. Now you'll optimize it with a `useDebounce` custom hook.

**What you build**: `useDebounce.js` — a hook that delays updating a value until the user stops typing for a specified duration (e.g., 300ms).

**How it works conceptually**:
1. `SearchBar` manages its own `localQuery` state (updates on every keystroke — fast, no impact)
2. `localQuery` is passed through `useDebounce(localQuery, 300)` to produce `debouncedQuery`
3. A `useEffect` watches `debouncedQuery` and calls the parent's `onSearch` callback only when the debounced value changes
4. This means the dashboard only re-filters when the user pauses typing — not on every character

**React concepts practiced**:
- `useEffect` with cleanup (clearing the timeout on re-render)
- Understanding render performance — why reducing unnecessary renders matters
- Encapsulating optimization logic in a reusable custom hook

---

#### Feature 5: Animations with Framer Motion (Days 21-22)

**Why fifth**: Your app is fully functional. Now make it *feel* polished. Animations should be added AFTER functionality is complete — they make debugging harder if added too early.

**What to animate (in this order)**:
1. **Page transitions** — fade + slide when navigating between routes
2. **Task list items** — animate in when added, animate out when deleted (using `AnimatePresence`)
3. **Progress Ring** — smooth transition of the arc when percentage changes
4. **Cards on scroll** — fade up from below as they enter the viewport
5. **Hero section** — staggered entrance of headline, subtitle, and button

**Key principle**: Animations should be **subtle and fast** (200-400ms). If users notice the animation before the content, it's too slow. The goal is to make the interface feel alive, not to show off.

**React concepts practiced**:
- Wrapping components with motion wrappers
- `AnimatePresence` for exit animations (critical for list items being removed)
- Understanding that animations interact with React's render cycle — a component must unmount for exit animations to play

---

#### Feature 6: Sorting & Advanced Filtering (Day 22-23)

**Why sixth**: With a polished UI and persistence, users will accumulate many tasks. They need tools to organize them.

**What to build**:
- Sort selector (dropdown or button group) in the Tools page: sort by newest first, oldest first, or priority (high → medium → low)
- Combined filter + search: the filtered list is `tasks` → filtered by priority → filtered by search query → sorted by selected order

**Architecture decision**: ALL filtering and sorting logic lives in `utils/filterTasks.js` and `utils/sortTasks.js` as **pure functions**. `Tools.jsx` calls these functions during render to compute the display list. This keeps business logic testable and separate from React.

```text
Display Pipeline:
tasks (raw array)
  → filterByPriority(tasks, activeFilter)
  → filterBySearch(filtered, searchQuery)
  → sortTasks(searched, sortOrder)
  → result passed to PriorityList
```

---

#### Feature 7: Charts/Visualizations for Profile Page (Day 23-24)

**Why seventh**: The Profile page has been showing hardcoded stats. Now wire it to real data from UserContext and build visual representations.

**What to build**:
- **StatsOverview**: Use the `ProgressRing` component for completion rate. Use large number displays for total completed, streak, etc.
- **Productivity bar chart**: A simple SVG or CSS-based bar chart showing tasks completed per day over the last 7 days. You do NOT need a charting library — build it with styled `<div>` elements or SVG `<rect>` elements.
- **ActivityFeed**: A timeline component that reads from a "completed tasks history" stored in localStorage.

**Why no charting library?** Building a simple chart by hand teaches you SVG fundamentals and CSS layout skills. Libraries like Chart.js are powerful but hide the learning. Build one chart by hand first. If you want more chart types later, then consider a library.

---

#### Feature 8: Drag-and-Drop Task Reordering (Day 24-25)

**Why eighth (late)**: DnD requires understanding of:
- Refs (to access DOM elements directly)
- Pointer/mouse events (onDragStart, onDragOver, onDrop)
- Complex state updates (splicing arrays by index)
- Event propagation and prevention

Attempting this before mastering state management and component communication would lead to frustrating bugs.

**What to build**: Allow users to grab a task item and drag it to a new position in the list. The tasks array reorders accordingly.

**Two approaches**:
1. **HTML5 Drag and Drop API** — native, no library needed. Uses `draggable`, `onDragStart`, `onDragOver`, `onDrop` attributes. More verbose but zero dependencies.
2. **@dnd-kit library** — a React-focused DnD library that handles edge cases (mobile touch, accessibility, smooth animations). More polished result with less code.

**Recommendation**: Start with the native API to understand the fundamentals. If it's too frustrating after 2 hours, switch to @dnd-kit.

---

#### Feature 9: Mock Authentication (Day 25)

**Why last**: Auth gates access to the app. Implementing it early blocks you from testing features during development. Always add auth AFTER the core app works.

**What to build**:
- A simple login form (username + password fields)
- A mock validation function (check against a hardcoded user object — no real server)
- An `isAuthenticated` boolean in `UserContext`
- A `ProtectedRoute` component that checks `isAuthenticated` and redirects to login if false
- Wrap `/tools` and `/profile` routes with `ProtectedRoute`

**How ProtectedRoute works conceptually**:
```text
ProtectedRoute receives: children (the page component)
  → Reads isAuthenticated from UserContext
  → If true: render children
  → If false: redirect to /login using navigate
```

---

## 9. Phase 7 — Backend Integration Preparation (Days 26-28)

### Goal
Your frontend is complete and portfolio-ready. Before writing any backend code, prepare your data layer to interface with APIs seamlessly.

### Step 1: Define Your Data Contracts

Standardize the shape of objects your frontend sends and receives:

**Task Object:**
```text
{
  id:         string (UUID)
  userId:     string (UUID)
  title:      string (1-200 characters)
  priority:   "high" | "medium" | "low"
  done:       boolean
  createdAt:  ISO 8601 timestamp string
  updatedAt:  ISO 8601 timestamp string
}
```

**User Object:**
```text
{
  id:           string (UUID)
  name:         string
  email:        string
  avatar:       string (URL)
  joinedAt:     ISO 8601 timestamp string
  totalCompleted: number
  currentStreak:  number
}
```

### Step 2: Create an API Service Layer

Create a `services/` folder with an `api.js` file that contains functions for every API call your app will eventually make:

| Function | Corresponding Endpoint | What It Does Now (Mock) |
|---|---|---|
| `fetchTasks()` | `GET /api/tasks` | Returns tasks from localStorage |
| `createTask(task)` | `POST /api/tasks` | Adds to localStorage, returns the task |
| `updateTask(id, updates)` | `PATCH /api/tasks/:id` | Updates in localStorage, returns updated task |
| `deleteTask(id)` | `DELETE /api/tasks/:id` | Removes from localStorage |
| `fetchUser()` | `GET /api/user` | Returns user from localStorage |

**Why do this before building a backend?** When you eventually build a real backend, you ONLY change the internals of these functions (swap localStorage reads for `fetch()` calls). Every component that calls `fetchTasks()` keeps working unchanged. This is called the **adapter pattern** — your components depend on an interface, not an implementation.

### Step 3: Prepare for Async Data Flow

When you switch to a real API, data fetching becomes **asynchronous**. Prepare by adding loading and error states to your pages:

- **Loading state**: Show a skeleton/spinner while data is being fetched
- **Error state**: Show a retry button if the API call fails
- **Empty state**: Show a friendly message ("No tasks yet. Create your first one!") when the data is empty

Build these three states into your Tools page now, even though they're not triggered by actual API calls yet. When you add a real backend, they'll activate automatically.

### Backend Technology Recommendations (for future work)

| Option | When to Use | Learning Curve |
|---|---|---|
| **Firebase (Firestore + Auth)** | You want the fastest path to a working backend. No server management. Real-time sync. | Low |
| **Supabase** | You want SQL (PostgreSQL) with a Firebase-like developer experience. Built-in auth, real-time, storage. | Low-Medium |
| **Express + MongoDB** | You want to learn backend architecture from scratch. Full control. | Medium-High |
| **Next.js API Routes** | You want frontend + backend in one project. Server components. Full-stack React. | Medium |

---

## 10. Common Beginner Mistakes (Per Phase)

### Phase 1 — Static UI

| # | Mistake | Consequence | Prevention |
|---|---|---|---|
| 1 | Starting with the most complex page (Tools) | You get overwhelmed and lose motivation | Start with Home page — it's mostly marketing text and images |
| 2 | Not establishing CSS variables before building components | Inconsistent colors, sizes, and spacing across the app | Create `variables.css` first. Reference variables everywhere. |
| 3 | Using pixel values everywhere | Doesn't scale with user font-size preferences | Use `rem` for typography and spacing, `px` only for borders and shadows |
| 4 | Ignoring component extraction | 500-line page files that are impossible to maintain | If a section has its own visual boundary (card, header, grid), extract it into its own component |
| 5 | Not using semantic HTML | Fails accessibility audits, poor SEO, screen readers can't navigate | Use `<section>`, `<article>`, `<nav>`, `<header>`, `<main>`, `<footer>` |

### Phase 2 — Basic Interactivity

| # | Mistake | Consequence | Prevention |
|---|---|---|---|
| 1 | Mutating state directly (`state.push()`, `state[i].done = true`) | UI doesn't update because React doesn't detect changes | Always create new arrays/objects with spread, map, filter |
| 2 | Calling setState in the component body (outside events/effects) | Infinite render loop → browser freeze | State updates go inside event handlers or `useEffect` |
| 3 | Using array index as `key` in `.map()` | Items get mixed up when list changes (wrong checkbox checked, wrong item deleted) | Use unique IDs for every list item |
| 4 | Storing computed values as separate state | Two sources of truth that drift apart | Calculate during render from source state |
| 5 | Uncontrolled inputs with `defaultValue` | React loses track of the input. Can't clear or validate programmatically | Use controlled inputs: `value={state}` + `onChange` |

### Phase 3 — Component Communication

| # | Mistake | Consequence | Prevention |
|---|---|---|---|
| 1 | Prop drilling 5+ levels deep | Code becomes unreadable and unmaintainable | If passing through 3+ intermediary components, use Context |
| 2 | Passing the setState function directly to children | Children can set ANY value, breaking parent's assumptions | Pass specific handler functions (addTask, deleteTask) |
| 3 | Having children import and call parent functions directly | Circular dependencies, tight coupling, untestable components | Always pass callbacks as props. Components should be independent. |
| 4 | Not defining PropTypes or documenting expected props | Other developers (or future you) don't know what props a component expects | Add comments or JSDoc annotations above each component describing expected props |

### Phase 4 — State Design

| # | Mistake | Consequence | Prevention |
|---|---|---|---|
| 1 | "Everything is global state" | Every state change re-renders the entire app | State should be as local as possible. Global only for truly cross-cutting concerns. |
| 2 | Storing UI state (modal open, dropdown visible) in context | Unnecessary re-renders across the entire app when a dropdown opens | UI toggles are always local state |
| 3 | Normalizing data too early | Over-engineering for a client-side app with 50-100 items | For this scale, a flat array is fine. Normalize when you hit performance issues or API integration. |

### Phase 5 — Routing

| # | Mistake | Consequence | Prevention |
|---|---|---|---|
| 1 | Using `<a href>` instead of `<Link>` | Full page reload. All state destroyed. | Always `Link` or `NavLink`. |
| 2 | Not using layout routes | Navbar and Footer duplicated in every page component | One `AppLayout` with `<Outlet />` |
| 3 | Not scrolling to top on route change | User lands mid-page when navigating | Add `ScrollToTop` component using `useEffect` + `useLocation` |

### Phase 6 — Advanced Features

| # | Mistake | Consequence | Prevention |
|---|---|---|---|
| 1 | Adding animations before the feature works | You can't tell if a bug is logic or animation | Get the feature working with zero animation first. Add motion last. |
| 2 | Over-animating | App feels sluggish and gimmicky | Keep animations under 300ms. Animate only meaningful state changes. |
| 3 | Not debouncing localStorage writes | Performance issues, blocking the main thread on rapid updates | Debounce writes with 300-500ms delay |
| 4 | Building Context without understanding re-render implications | Every context consumer re-renders on ANY context value change | Split contexts by update frequency (theme changes rarely, task counts change often) |

---

## 11. Final Portfolio Checklist

Before you call this project "done," verify each item:

### Functionality
- [ ] All 5 pages render correctly and are navigable via the Navbar
- [ ] Tasks can be created, completed, edited, and deleted
- [ ] Tasks persist across page refreshes (localStorage)
- [ ] Notes persist across page refreshes
- [ ] Search filters tasks by title text
- [ ] Priority filters work (All, High, Medium, Low)
- [ ] Sort order works (Newest, Oldest, Priority)
- [ ] Progress ring accurately reflects completion percentage
- [ ] Today Focus shows the highest-priority incomplete task
- [ ] Reset Day clears all tasks and notes (with confirmation modal)
- [ ] Dark/Light theme toggle works and persists
- [ ] Profile page shows accurate stats from UserContext
- [ ] Contact form validates inputs and shows error messages
- [ ] 404 page displays for unknown routes

### Visual Quality
- [ ] Consistent color palette via CSS variables
- [ ] Smooth transitions on interactive elements (buttons, cards, navigation)
- [ ] Responsive at all breakpoints (mobile, tablet, desktop)
- [ ] No overflowing text, broken layouts, or misaligned elements
- [ ] Loading, empty, and error states are designed (not just blank)

### Code Quality
- [ ] Every component in its own folder with co-located CSS
- [ ] No state duplication (nothing that can be computed is stored)
- [ ] State ownership follows nearest-common-ancestor rule
- [ ] Utility functions are pure (no React imports in `utils/`)
- [ ] Mock data is separated from components (in `data/`)
- [ ] No `eslint` warnings or console errors

### Git & Deployment
- [ ] Git history has meaningful commits per phase
- [ ] README.md with project description, screenshots, and setup instructions
- [ ] Deployed on Vercel or Netlify with a live URL

---

> [!TIP]
> **The single most important piece of advice**: Build one component at a time. Get it working. Commit. Then move to the next one. The enemy of completing this project is trying to build everything simultaneously. Sequential, disciplined progress beats scattered multitasking every time.

---

*This roadmap was designed to teach you React the way senior engineers think about it: architecture first, code second. Follow each phase sequentially, and by the end, you won't just have a project — you'll have the mental models that make you a professional React developer.*
