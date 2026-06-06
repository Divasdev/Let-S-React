import "./MissionCard.css";
import Focused from "../../assets/focused.png"
export function MissionCard(){
   return(
      <>
         <div className="mission-card">
            <div className="card-content">
               <div className="card-text-content">
                  <h2 className="card-header">
                     Help people stay organized.
                  </h2>
                  <p className="card-text">
                     In a world obsessed with doing more, we are obsessed with doing what matters. Our mission is to provide a serene digital environment where your ideas can breathe and your tasks align with your actual goals.
                  </p>
               </div>

               <img src={Focused} alt="Focused" />
            </div>
         </div>
      
      </>
   )
}