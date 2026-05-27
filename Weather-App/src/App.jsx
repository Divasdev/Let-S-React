import { MainLayout } from "./components/Layout/MainLayout";
import { NavBar } from "./components/Navbar/Navbar";
import "./App.css";



function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <MainLayout />
    </div>
  );
}

export default App;