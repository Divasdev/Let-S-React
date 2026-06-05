import "./TaskCreator.css";

export function TaskCreator() {
   return (
      <div className="task-card">
         <div className="task-header">
            <span className="task-icon">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5de6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
               </svg>
            </span>
            <div className="task-title-group">
               <h4 className="task-title">Add a Task</h4>
               <p className="task-subtitle">Capture the next useful move.</p>
            </div>
         </div>

         <div className="task-input-row">
            <input
               className="task-input"
               placeholder="Design the task card states"
               type="text"
            />
            <select className="task-priority-select" defaultValue="medium">
               <option value="low">Low</option>
               <option value="medium">Medium</option>
               <option value="high">High</option>
            </select>
            <button className="task-add-btn">
               + Add Task
            </button>
         </div>
      </div>
   );
}