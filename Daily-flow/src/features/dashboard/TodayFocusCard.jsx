import "./TodayFocusCard.css";
import { useState } from "react";
export function TodayFocusCard() {
       
   const[focusText,setFocusText]=useState("");
      
   return (
      <div className="focus-card">
         <div className="focus-header">
            <span className="focus-icon">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5de6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
               </svg>
            </span>
            <div className="focus-title-group">
               <h4 className="focus-title">Today's Focus</h4>
               <p className="focus-subtitle">One sentence to anchor the day.</p>
            </div>
         </div>

         <div className="focus-body">
            <textarea
               className="focus-textarea"
               placeholder="Ship one small improvement to the digital tools hub."
               rows="3"
               value={focusText}

               onChange={(e)=>{
                  setFocusText(e.target.value)
               }}


            
            ></textarea>
         </div>
      </div>
   );
}