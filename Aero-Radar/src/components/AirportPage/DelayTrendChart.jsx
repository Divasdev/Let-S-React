export function DelayTrendChart() {
  return (
    <section className="px-6 py-12 w-full">

      <div className="max-w-7xl mx-auto  flex   justify-between">

        <div>
           <p className="font-mono text-[10px] font-bold tracking-[0.15em]  uppercase">
          PERFORMANCE
        </p>
        <h2 className="font-bold text-gray-500  mt-3 ">
          7-Day Delay Trend
        </h2>
        <p className="font-sans text-sm text-gray-500 md:text-3xl  mt-1 ">Afternoon departures see the highest average delay this week</p>
        </div>
       
      <button className=" rounded-full
            border 
            p-2  
            font-sm
            hover:bg-gray-100
            transition">
            View Full  Analytics</button>

      </div>




    </section>

  )
}
