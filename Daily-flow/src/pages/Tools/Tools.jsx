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
import { useState } from "react";

export function ToolsRoute() {
   const [tasks,setTasks]=useState([]);

   function handleAddTask(task) {

      console.log("recieved",task);
      if (task.title.trim() === "") {
         return;
      }

      setTasks([...tasks, task]);
   }
      console.log(tasks);


   function  handleCompleteTask(id){
      const updatedTasks=tasks.map(task=>{
         if(task.id===id){
            return {
               ...task,
               done:!task.done
            };
         }
         return task;
      });
      setTasks(updatedTasks);
      }


   function handleDelete(id){
      const filteredArray=tasks.filter(task=>{
         return task.id!==id;
      });
      setTasks(filteredArray);
   }
   
   return (
      <div className="tools-page">
         <Navbar />
         <main className="tools-container">
            <PageHeader />
            <div className="tools-grid">
               {/* Left column */}
               <div className="tools-col-left">
                  <TodayFocusCard />
                  <TaskCreator  onAddTask={handleAddTask} />
                  <PriorityStack  tasks={tasks} />
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
