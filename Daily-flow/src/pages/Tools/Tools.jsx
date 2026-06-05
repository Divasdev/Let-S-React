import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { PageHeader } from "../../features/dashboard/PageHeader";
import { TodayFocusCard } from "../../features/dashboard/TodayFocusCard";
import { TaskCreator } from "../../features/dashboard/TaskCreator";

import { PriorityStack } from "../../features/dashboard/PriorityStack";

export function ToolsRoute(){
   return(
      <>
      <Navbar />
      <PageHeader />
      <TodayFocusCard />
      <TaskCreator />
      <PriorityStack />
      <Footer />
      
      </>

   )
}

