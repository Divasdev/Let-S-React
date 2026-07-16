import { TowerCard } from "./TowerCard"
import { TrackAircraft } from "./TrackAircraft"
import { NotificationCard } from "./NotificationCard"
export function FeaturesSection() {
   return (
      <>
         <article>

            <section className="px-8 md:py-16 py-16  bg-gray-200">
               <h1 className="font-bold text-3xl tracking-tight text-gray-900 ">
                  Everything you've ever wanted to know.
               </h1>
               <p className=" max-w-xl mt-4 text-gray-600 ">
                  AeroRadar keeps you informed by tracking more information about your flight than any other app.
               </p>
               <TowerCard />
               <TrackAircraft />
               <NotificationCard />
            </section>


         </article>


      </>


   )
}