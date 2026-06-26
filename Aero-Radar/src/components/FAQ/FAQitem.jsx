import { useState } from "react";

const faqs = [
   {
      question: "Where do you get your flight data?",
      answer: "We aggregate data directly from global ATC systems, FAA feeds,and airline proprietary APIs to ensure the lowest latency possible."
   },
   {
      question: "How accurate is the delay prediction?",
      answer: "Our ML models predict delays based on inbound aircraft status,historical weather patterns, and airport congestion, and airport congetion, boasting a 94% accuracy rate up to 24 hours prior to departure."

   }
]


export function FAQitem() {
   const [openIndex, setOpenIndex] = useState(null);
   return (
      <div className="max-w-4xl mx-auto space-y-6">


         {faqs.map((faq, index) => (

            <div
               key={faq.question}
               className="border border-gray-100 rounded-2xl shadow-sm px-4 hover:border-blue-300 transition-colors">
               <button
                  className="flex items-center justify-between w-full py-5"
                  onClick={() => {
                     setOpenIndex(openIndex === index ? null : index);
                  }}
               >
                  <span className="text-left font-bold text-gray-900">
                     {faq.question}
                  </span>

                  <span
                     className={`text-xl text-gray-500 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}

                  >▼</span>
               </button>

               {openIndex === index && <div className="pb-6">
                  <p className="text-gray-600 leading-7">
                     {faq.answer}
                  </p>
               </div>}

            </div>

         ))}

      </div>
   );
}