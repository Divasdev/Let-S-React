import signalImg from "../../assets/signal.png";

export function TowerCard() {
   return (
      <div className=" max-w-sm  shadow-lg bg-amber-50 p-10 mb-15">
         <img src={signalImg}
            className="w-10 h-10 object-contain mb-5"
         />
      </div>
   )
}
