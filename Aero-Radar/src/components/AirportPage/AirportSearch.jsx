

const POPULAR_AIRPORTS = ["JFK", "LAX", "ORD", "HND", "SFO"];

export function AirportSearch() {
  

  return (
    <section className="pt-28 pb-16 px-6 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Global Airport Search
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          Search any airport to access real-time telemetry, terminal status, and predictive delay
          models.
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="relative flex-1 max-w-md">
            {/* Search Icon */}
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
              type="text"
              
              placeholder="Enter IATA Code"
              maxLength={4}
              className="
                w-full pl-11 pr-4 py-3.5
                rounded-full
                bg-white
                border border-gray-200
                text-gray-800 text-sm font-medium
                placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400
                shadow-sm
                transition-all duration-200
              "
            />
          </div>

          <button
            className="
              px-7 py-3.5
              bg-[#0f172a] text-white
              rounded-full
              text-sm font-semibold
              cursor-pointer
              hover:bg-[#1e293b]
              active:scale-95
              transition-all duration-200
              shadow-sm
            "
          >
            Search
          </button>
        </div>

        {/* Popular Airport Pills */}
        <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1">
            Popular
          </span>

          {POPULAR_AIRPORTS.map((code) => (
            <button
              key={code}
           
              className="
                px-4 py-1.5
                rounded-full
                border border-gray-200
                bg-white
                text-xs font-semibold text-gray-600
                cursor-pointer
                hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600
                active:scale-95
                transition-all duration-200
              "
            >
              {code}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
