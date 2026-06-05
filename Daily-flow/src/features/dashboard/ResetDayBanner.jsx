import "./ResetDayBanner.css";

export function ResetDayBanner() {
   return (
      <div className="reset-card">
         <div className="reset-header">
            <div className="reset-text">
               <h4 className="reset-title">Ready for a fresh start?</h4>
               <p className="reset-subtitle">
                  Reset only when the day is truly wrapped.
               </p>
            </div>
            <svg className="reset-heart" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8c4d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
         </div>

         <button className="reset-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <polyline points="1 4 1 10 7 10"></polyline>
               <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
            </svg>
            Reset Day
         </button>
      </div>
   );
}
