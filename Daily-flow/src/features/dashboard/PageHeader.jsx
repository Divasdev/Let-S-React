import "./PageHeader.css";

const StatChip = [
   {
      icon: "📆",
      task: "4",
      text: "Task today"
   },
   {
      icon: "☑️",
      task: '1',
      text: "completed"
   }
]
export function PageHeader() {
   return (
      <>
         <div className="tools-header">
            <p className="tools-header-text">
               A calm daily planner for one clear focus,priotity tasks, and quick end-of-day notes
            </p>

            <div className="header-stat-chips">
               {StatChip.map((chip) => (
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
      </>
   )





}

