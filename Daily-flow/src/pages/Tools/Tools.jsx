import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { PageHeader } from "../../features/dashboard/PageHeader";
import { TodayFocusCard } from "../../features/dashboard/TodayFocusCard";
import { TaskCreator } from "../../features/dashboard/TaskCreator";
import { PriorityStack } from "../../features/dashboard/PriorityStack";
import { ProgressBar } from "../../features/dashboard/ProgressBar";
import { QuickNotes } from "../../features/dashboard/QuickNotes";
import { ResetDayBanner } from "../../features/dashboard/ResetDayBanner";
import "./Tools.css";

export function ToolsRoute() {
   return (
      <div className="tools-page">
         <Navbar />
         <main className="tools-container">
            <PageHeader />
            <div className="tools-grid">
               {/* Left column */}
               <div className="tools-col-left">
                  <TodayFocusCard />
                  <TaskCreator />
                  <PriorityStack />
               </div>
               {/* Right column */}
               <div className="tools-col-right">
                  <ProgressBar progress={25} />
                  <QuickNotes />
                  <ResetDayBanner />
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
}
