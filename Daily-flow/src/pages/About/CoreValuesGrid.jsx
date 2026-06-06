import { CoreValuesCard } from "./CoreValueCard";
import "./CoreValuesGrid.css";

export function CoreValueGrid(){
   return (
      <>
       <section className="values-section">
         <h2 className="values-heading">Core Values</h2>
         <p className="values-subtitle">
            The principles that guide every pixel we place and every feature we build.
         </p>

         <div className="values-grid">
            <CoreValuesCard 
             icon="❃"
             title="Simplicity"
             text="We strip away the unnecessary so the essential can speak. Complex problems don't require complex interfaces."
            />

            <CoreValuesCard 
             icon="♻️"
             title="Consistency"
             text="Trust is built through dependable design. We ensure every interaction feels familiar and structurally sound."
            />

            <CoreValuesCard 
             icon="📈"
             title="Growth"
             text="A tool should adapt as you evolve. We design systems that support personal momentum without forcing workflows."
            />
         </div>
       </section>
      </>
   )
}