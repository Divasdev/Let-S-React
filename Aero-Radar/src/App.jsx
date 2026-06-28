import { Footer } from './components/Footer/Footer';
import { NavBar } from './components/NavBar';
import { FAQ } from './components/FAQ/FAQ';
import { SeamlessImports } from './components/Imports/SeamlessImports';
import { Airport } from './components/AirportIntelligenceSection/Airport';
function App() {
  return (
    <>
      <NavBar />
      <SeamlessImports />
      <Airport />
      <FAQ />
      <Footer />
    </>
  );
}
export default App; 