import { Footer } from './components/Footer/Footer';
import { NavBar } from './components/NavBar';
import { FAQ } from './components/FAQ/FAQ';
import { SeamlessImports } from './components/Imports/SeamlessImports';
import { Airport } from './components/AirportIntelligenceSection/Airport';
import { RadarSection } from './components/RadarSection/RadarSection';
import { TravelStatsSection } from './components/TravelStatsSection/TravelStatsSection';
function App() {
  return (
    <>
      <NavBar />
      <TravelStatsSection />
      <RadarSection />
      <SeamlessImports />
      <Airport />
      <FAQ />
      <Footer />
    </>
  );
}
export default App; 