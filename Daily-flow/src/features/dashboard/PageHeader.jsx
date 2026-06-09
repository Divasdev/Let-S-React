import "./PageHeader.css";

export function PageHeader({totalTasks,completedCount}) {
   const statChips = [
      {
         icon: "📅",
         task: totalTasks,
         text: "Tasks today"
      },
      {
         icon: "☑️",
         task: completedCount,
         text: "Completed"
      }
   ];
   return (
      <div className="tools-header">
         <div>
            <h1 className="tools-header-title">DailyFlow</h1>
            <p className="tools-header-text">
               A calm daily planner for one clear focus, priority tasks, and quick end-of-day notes.
            </p>
         </div>

         <div className="header-stat-chips">
            {statChips.map((chip) => (
               <div className="stat-chip" key={chip.text}>
                  <span className="stat-icon">
                     {chip.icon}
                  </span>
                  <div className="stat-content">
                     <span className="stat-task">
                        {chip.task}
                     </span>
                     <span className="stat-text">
                        {chip.text}
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
