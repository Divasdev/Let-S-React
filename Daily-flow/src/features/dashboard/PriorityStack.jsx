import "./PriorityStack.css";

const mockTasks = {
   high: [
      { id: 1, title: "Record a quick walkthrough", done: false },
      { id: 2, title: "Review today's main focus", done: true },
   ],
   medium: [
      { id: 3, title: "Polish the empty state copy", done: false },
   ],
   low: [
      { id: 4, title: "Share the tool update", done: false },
   ],
};

export function PriorityStack() {
   const totalOpen =
      mockTasks.high.filter((t) => !t.done).length +
      mockTasks.medium.filter((t) => !t.done).length +
      mockTasks.low.filter((t) => !t.done).length;

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
            <span className="stack-open-count">{totalOpen} still open</span>
         </div>

         <PrioritySection label="High priority" variant="high" count={mockTasks.high.length}>
            {mockTasks.high.map((task) => (
               <TaskItem key={task.id} title={task.title} priority="High priority" done={task.done} />
            ))}
         </PrioritySection>

         <PrioritySection label="Medium priority" variant="medium" count={mockTasks.medium.length}>
            {mockTasks.medium.map((task) => (
               <TaskItem key={task.id} title={task.title} priority="Medium priority" done={task.done} />
            ))}
         </PrioritySection>

         <PrioritySection label="Low priority" variant="low" count={mockTasks.low.length}>
            {mockTasks.low.map((task) => (
               <TaskItem key={task.id} title={task.title} priority="Low priority" done={task.done} />
            ))}
         </PrioritySection>
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

function TaskItem({ title, priority, done = false }) {
   return (
      <div className={`task-item ${done ? "task-done" : ""}`}>
         <div className="task-item-left">
            <div className={`task-checkbox ${done ? "checked" : ""}`}>
               {done && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                     <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
               )}
            </div>
            <div className="task-info">
               <span className={`task-title ${done ? "strikethrough" : ""}`}>{title}</span>
               <span className="task-priority-label">{priority}</span>
            </div>
         </div>
         <div className="task-actions">
            <button className="action-btn" aria-label="Edit task">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
               </svg>
            </button>
            <button className="action-btn" aria-label="Delete task">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
               </svg>
            </button>
         </div>
      </div>
   );
}
