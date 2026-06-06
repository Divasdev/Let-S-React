import { CoreValuesCard } from "./CoreValueCard";

export function CoreValueGrid(){
   return (
      <>
       <CoreValuesCard 
        icon="❃"
        title="Simplicity"
        text="We strip away the necessary so the essential can speak.Complex Problems don't require complex interfaces"
       />

        <CoreValuesCard 
        icon="♻️"
        title="Consistency"
        text="Trust is built through dependable design.We ensure every interaction feels familiar and structurally sound "

       />

        <CoreValuesCard 
        icon="📈"
        title="Growth"
        text="A tool should adapt as you evolve .We design systems that support personal momentum without forcing workflows "
        
       />


      </>
   )
}