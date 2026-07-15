import signalImg from "../../assets/signal.png";

export function TowerCard() {
   return (
      <div className=" max-w-sm  shadow-lg bg-amber-50 p-10 mb-15">
         <img src={signalImg}
            className="w-10 h-10 object-contain mb-5"
         />

         <h2 className="font-bold text-2xl tracking-tighter mb-3">Direct from the tower.
         </h2>
         <p className="font-medium text-gray-600">Raw ATC mandates decoded.Know exactly what stops your flight.
         </p>

         <div className="mt-6 bg-gray-900 rounded-xl p-4 font-mono text-sm">
            <p className="text-gray-600">KSFO METAR</p>
         </div>
      </div>
   )
}
