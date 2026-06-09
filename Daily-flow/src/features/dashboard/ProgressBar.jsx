import "./ProgressBar.css";

export function ProgressBar({ progress,completedCount,totalTasks }) {


   return (
      <div className="progress-card">
         <div className="progress-header">
            <div className="progress-header-left">
               <span className="progress-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4edea3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                     <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
               </span>
               <div className="progress-title-group">
                  <h4 className="progress-title">Daily Progress</h4>
                  <p className="progress-subtitle">Steady progress beats busy noise.</p>
               </div>
            </div>
            <span className="progress-value">{progress}%</span>
         </div>

         <div className="progress-bar-track">
            <div
               className="progress-bar-fill"
               style={{ width: `${progress}%` }}
            ></div>
         </div>

         <div className="progress-stats">
            <div className="progress-stat-box">
               <span className="stat-number">{completedCount}</span>
               <span className="stat-label">Done</span>
            </div>
            <div className="progress-stat-box">
               <span className="stat-number">{totalTasks-completedCount}</span>
               <span className="stat-label">Planned</span>
            </div>
         </div>
      </div>
   );
}

