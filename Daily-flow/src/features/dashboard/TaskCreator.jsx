import "./TaskCreator.css";

export function TaskCreator() {
   return (
      <>
         <div className="task-card">
            <div className="task-header">
               <span className="task-icon">
                  📝
               </span>
               <h4 className="task-text">
                  Add a Task
               </h4>
               <p className="task-text">
                  Capture the next useful move
               </p>
            </div>

            <div className="task-text-area">
               <input
                  placeholder="Design the task card states" type="text"
               />
               <select className="task-priority">
                  <option value="low">Low</option>

                  <option value="medium">Medium</option>

                  <option value="high">High</option>
               </select>


               <button className="task-add-btn">
                  ➕ Add Task
               </button>
            </div>
         </div>
      </>
   )
}