import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { PageHeader } from "../../features/dashboard/PageHeader";
import { TodayFocusCard } from "../../features/dashboard/TodayFocusCard";

export function ToolsRoute(){
   return(
      <>
      <Navbar />
      <PageHeader />
      <TodayFocusCard />
      <Footer />
      
      </>
   )
}

