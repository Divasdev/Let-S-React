import "./PriorityStack.css";

const tasks = [
  {
    id: 1,
    title: "Record a quick walkthrough",
    priority: "High"
  },
  {
    id: 2,
    title: "Review today's main focus",
    priority: "High"
  },
  {
    id: 3,
    title: "Polish the empty state copy",
    priority: "Medium"
  }
];
console.log(tasks);
export function PriorityStack(){
   return(
      <section className="priority-stack">
       <div className="stack-title">
         <span className="header-icon">
            📚
         </span>
         <h4 className="stack-header">
            Priority Stack
         </h4>
         <p className="stack-text">
            High-Impact tasks stay at the top 
         </p>
         <span className="stack-no">3 still open</span>
       </div>

       <PrioritySection
  label="High Priority"
  count={2}
>
  <TaskItem
    title="Record a quick walkthrough"
    priority="High Priority"
  />

  <TaskItem
    title="Review today's main focus"
    priority="High Priority"
  />
</PrioritySection>

<PrioritySection
  label="Medium Priority"
  count={1}
>
  <TaskItem
    title="Polish the empty state copy"
    priority="Medium Priority"
  />
</PrioritySection>

<PrioritySection
  label="Low Priority"
  count={1}
>
  <TaskItem
    title="Share the tool update"
    priority="Low Priority"
  />
</PrioritySection>

      </section>

   )
}


export function PrioritySection({
  label,
  count,
  children
}) {
  return (
    <div className="priority-section">

      <div className="priority-section-header">
        <span>{label}</span>
        <span>{count} tasks</span>
      </div>

      {children}

    </div>
  );
}



export function TaskItem({
  title,
  priority
}) {
  return (
    <div className="task-item">

      <input
        type="checkbox"
      />

      <div className="task-content">
         <h4>{title}</h4>
         <p>{priority}</p>
      </div>
      <div className="task-actions">
        <button>✏️</button>
        <button>🗑️</button>
      </div>

    </div>
  );
}
