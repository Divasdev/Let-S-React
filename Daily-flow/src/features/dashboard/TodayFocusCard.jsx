import "./TodayFocusCard.css";

export function TodayFocusCard(){
   return(
      <>
         <div className="focus-card">
            <div className="focus-header">
               <span className="focus-icon">
                  ❂
               </span>
               <h4 className="header-text">
                  Today's Focus
               </h4>
               <p className="header-text">
                  one sentence to anchor the day 
               </p>
            
            </div>

            <div className="focus-text-area">
               <input 
                placeholder="Write something for the Day" type="text" 
                />
            </div>
         </div>
      </>
   )
}