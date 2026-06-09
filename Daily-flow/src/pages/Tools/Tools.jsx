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


   function handleDeleteTask(id){
      const filteredArray=tasks.filter(task=>{
         return task.id!==id;
      });
      setTasks(filteredArray);
   }
   
   
    const totalTasks = tasks.length;
    const completedCount = tasks.filter((task) => task.done).length;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);

   const [notes,setNotes]=useState("");
   return (
      <div className="tools-page">
         <Navbar />
         <main className="tools-container">
            <PageHeader
               totalTasks={totalTasks}
               completedCount={completedCount}
            />
            <div className="tools-grid">
               {/* Left column */}
               <div className="tools-col-left">
                  <TodayFocusCard />
                  <TaskCreator  onAddTask={handleAddTask} />
                  <PriorityStack  
                  tasks={tasks} 
                  onComplete={handleCompleteTask}
                  onDelete={handleDeleteTask}
                  />
               </div>
               {/* Right column */}
               <div className="tools-col-right">
                  <ProgressBar
                   progress={percentage}
                   completedCount={completedCount}
                   totalTasks={totalTasks}
                  
                  />
                  <QuickNotes 
                     notes={notes}
                     onNotesChange={setNotes}
                  />
                  <ResetDayBanner />
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
}
