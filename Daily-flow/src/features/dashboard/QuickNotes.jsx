import "./QuickNotes.css";

export function QuickNotes({notes,onNotesChange}) {
   return (
      <div className="notes-card">
         <div className="notes-header">
            <span className="notes-icon">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4edea3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
               </svg>
            </span>
            <div className="notes-title-group">
               <h4 className="notes-title">Quick Notes</h4>
               <p className="notes-subtitle">Loose thoughts, wins, and reminders.</p>
            </div>
         </div>

         <div className="notes-body">
            <textarea
               className="notes-textarea"
               placeholder="Demo notes: keep the planner simple, show the priority flow, then reset the day at the end."
               rows="6"

               value={notes}
               onChange={(e)=>onNotesChange(e.target.value)}
            ></textarea>
         </div>
      </div>
   );
}
