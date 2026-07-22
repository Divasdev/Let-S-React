// import {Footer} from "../components/Footer/Footer";
import {NavBar} from "../components/NavBar/NavBar";
import { AirportSearch } from "../components/AirportPage/AirportSearch";
import { AirportInfoCard } from "../components/AirportPage/AirportInfoCard";
import { AirlinesOperating } from "../components/AirportPage/AirlinesOperating";
import { PopularRoutes } from "../components/AirportPage/PopularRoutes";
import { DelayTrendChart } from "../components/AirportPage/DelayTrendChart";
export function AirportPage() {
  return (
    <>
      <NavBar />
      <AirportSearch />
      <AirportInfoCard />
      <AirlinesOperating />
      <PopularRoutes />
      <DelayTrendChart />

      {/* <Footer /> */}
    </>
    
  );
}

