export function DelayTrendChart() {
  const chartData = [
    { day: "Mon", value: 15, max: 90 },
    { day: "Tue", value: 25, max: 90 },
    { day: "Wed", value: 10, max: 90 },
    { day: "Thu", value: 30, max: 90 },
    { day: "Fri", value: 60, max: 90, active: true },
    { day: "Sat", value: 40, max: 90 },
    { day: "Sun", value: 20, max: 90 },
  ];

  return (
    <section className="px-6 py-12 w-full">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-outline-variant uppercase">
              PERFORMANCE
            </p>
            <h2 className="font-bold text-2xl text-charcoal mt-1">
              7-Day Delay Trend
            </h2>
            <p className="font-sans text-sm text-outline mt-1">
              Afternoon departures see the highest average delay this week.
            </p>
          </div>
          
          <button className="whitespace-nowrap rounded-[var(--radius-pill)] border border-outline-variant/50 px-4 py-2 text-xs font-medium text-charcoal hover:bg-surface-container transition-all">
            View Full Analytics
          </button>
        </div>

        {/* Chart Container */}
        <div className="mt-8 w-full p-8 rounded-[var(--radius-card)] border border-outline-variant/30 bg-white shadow-card">
          <div className="relative h-64 w-full flex">
            
            {/* Y-Axis Labels */}
            <div className="flex flex-col justify-between h-full text-[10px] font-mono text-outline-variant w-8">
              <span>90m</span>
              <span>60m</span>
              <span>30m</span>
              <span>15m</span>
              <span>0m</span>
            </div>

            {/* Chart Area */}
            <div className="relative flex-1 h-full flex items-end justify-between ml-4 pb-6 border-b border-outline-variant/20">
              
              {/* Speed Baseline Line */}
              <div className="absolute top-[75%] left-0 w-full border-t border-dashed border-outline-variant/40 flex items-center justify-end pr-2">
                 <span className="text-[10px] font-mono text-outline-variant bg-white pl-2 -mt-[10px]">Speed Baseline</span>
              </div>

              {/* Bars */}
              {chartData.map((item) => (
                <div key={item.day} className="flex flex-col items-center group relative z-10 w-12">
                  {/* Active Value Label */}
                  {item.active && (
                    <span className="absolute -top-6 text-[10px] font-mono font-bold text-primary">
                      {item.value}m
                    </span>
                  )}
                  {/* Bar */}
                  <div
                    className={`w-full rounded-t-md transition-all duration-300 ${
                      item.active ? "bg-primary" : "bg-surface-container-high group-hover:bg-outline-variant/40"
                    }`}
                    style={{ height: `${(item.value / item.max) * 100}%` }}
                  ></div>
                  {/* X-Axis Label */}
                  <span className="absolute -bottom-6 text-xs text-outline font-medium">
                    {item.day}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
