import "./CoreValueCard.css";


export function CoreValuesCard({ icon,title,text}){

   return (
      <>
      <div className="value-card">
         <span className="icon-name">
            {icon}
         </span>
         <h4 className="card-title">
            {title}
         </h4>
         <p className="card-text">
            {text}
         </p>
      </div>
      </>
   )

}