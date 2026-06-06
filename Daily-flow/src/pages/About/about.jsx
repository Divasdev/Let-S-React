import { ProductShowcase } from "./ProductShowcase";

import { CoreValueGrid } from "./CoreValuesGrid";

import { MissionCard } from "./MissionCard";
import { MissionHero } from "./MissionHero";
import { Navbar} from "../../components/layout/Navbar";

import { Footer} from "../../components/layout/Footer"
import "./about.css";
export function About(){
   return(
      <>
         <Navbar />
         <MissionHero />
         <MissionCard />
         <CoreValueGrid />
         <ProductShowcase />
         <Footer />
      </>
   );
}