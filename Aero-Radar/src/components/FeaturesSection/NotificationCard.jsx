import notficationiconlImg from "../../assets/notification-icon.png";

export function NotificationCard() {
   return (

      <div className=" max-w-sm shadow-lg bg-white rounded-3xl p-8 mt-8 ">
         <img src={notficationiconlImg}
            className="w-10 h-10 object-contain mb-2"
         />
         <h2 className="font-bold text-2xl tracking-tighter mb-3">First to Know</h2>

         <p className="font-medium text-base text-gray-500  mb-6">Instant push notifications often beat airport displays by minutes.</p>

         <div className=" space-y-3 mt-6">
            <div className="    font-semibold text-sm bg-gray-100 rounded-2xl px-4 py-3  border-l-4 border-orange-400 ">
               🕓  Departure delayed to 11:15
               </div>
            <div className="font-semibold text-sm bg-gray-100 rounded-2xl px-4 py-3  border-l-4 border-blue-400">
               ⾨ Gate changed to C4
            </div>
         </div>
      </div>


   )
}