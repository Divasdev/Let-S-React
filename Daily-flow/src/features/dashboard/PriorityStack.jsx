import "./PriorityStack.css";



export function PriorityStack({ tasks }) {

   const highTasks = tasks.filter(
      (task) => task.priority === "high"
   );
   const mediumTasks = tasks.filter(
      (task) => task.priority === "medium"
   );

   const lowTasks = tasks.filter(
      (task) => task.priority === "low"
   );

   const openCount = tasks.filter(
      (task) => !task.done
   ).length

   const isEmpty =
      highTasks.length === 0 &&
      mediumTasks.length === 0 &&
      lowTasks.length === 0;


   return (
      <section className="priority-stack">
         <div className="stack-top-row">
            <div className="stack-title-group">
               <span className="stack-icon">📚</span>
               <div>
                  <h4 className="stack-header">Priority Stack</h4>
                  <p className="stack-subtitle">High-impact tasks stay at the top.</p>
               </div>
            </div>
            <span className="stack-open-count">{openCount} still open</span>
         </div>


         {isEmpty && (

            <p className="empty-state">
               No tasks yet.Add your first task
            </p>
         )}
         {highTasks.length > 0 && (

            <PrioritySection 
            label="High priority" 
            variant="high"
            count={highTasks.length}>

               {highTasks.map((task) => (
                  <TaskItem
                     key={task.id}
                     task={task} />
               ))}
            </PrioritySection>

         )}


             {mediumTasks.length > 0 && (

            <PrioritySection 
            label="medium priority" 
            variant="medium"
            count={mediumTasks.length}>

               {mediumTasks.map((task) => (
                  <TaskItem
                     key={task.id}
                     task={task} />
               ))}
            </PrioritySection>

         )}

            {lowTasks.length > 0 && (

            <PrioritySection 
            label="Low priority" 
            variant="low"
            count={lowTasks.length}>

               {lowTasks.map((task) => (
                  <TaskItem
                     key={task.id}
                     task={task} />
               ))}
            </PrioritySection>

         )}
      </section>
   );
}

function PrioritySection({ label, variant, count, children }) {
   return (
      <div className="priority-section">
         <div className="priority-section-header">
            <span className={`priority-badge ${variant}`}>{label}</span>
            <span className="priority-count">{count} tasks</span>
         </div>
         {children}
      </div>
   );
}

function TaskItem({ task }) {

   return (

      <div className={`task-item ${task.done ? "task-done" : ""}`}>

         <div className="task-item-left">

            <div className={`task-checkbox ${task.done ? "checked" : ""}`}>

               {task.done && (

                  <svg

                     width="14"

                     height="14"

                     viewBox="0 0 24 24"

                     fill="none"

                     stroke="#fff"

                     strokeWidth="3"

                     strokeLinecap="round"

                     strokeLinejoin="round"

                  >

                     <polyline points="20 6 9 17 4 12"></polyline>

                  </svg>

               )}

            </div>

            <div className="task-info">

               <span

                  className={`task-title ${

                     task.done ? "strikethrough" : ""

                  }`}

               >

                  {task.title}

               </span>

               <span className="task-priority-label">

                  {task.priority}

               </span>

            </div>

         </div>

         <div className="task-actions">

            <button className="action-btn">✏️</button>

            <button className="action-btn">🗑️</button>

         </div>

      </div>

   );

}