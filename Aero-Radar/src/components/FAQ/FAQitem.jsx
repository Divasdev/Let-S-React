export function FAQitem (){
   return (
      <div className=" flex  max-w-4xl mx-auto space-y-4 
      flex-col justify-center ">
         <div className="flex justify-center flex-col">

            <button>

                 <span className="faq-title">
               Where do you get your flight data?
            </span>

            <span className="faq-icon">
               ▼
            </span>
            </button>
            <div>
               <p className="flex justify-center ">
                  We aggregate data directly from global ATC systems,FAA feeds,and airline proprietary API's to ensure the lowest latency possible
               </p>
            </div>

         </div>
          <div className="faq-question">

            <button>

                 <span className="faq-title">
              How accurate is the delay prediction?
            </span>

            <span className="faq-icon">
               ▼
            </span>
            </button>
            <div>
               <p>
                 Our ML models predict delays based on inbound aircraft status,historical weather patterns, and airport congestion, boasting a 94% accuracy rate up to 24 hours prior to departure 
               </p>
            </div>

         </div>
      </div>
   )
}