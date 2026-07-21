export function PopularRoutes() {
  const routesInfo = [
    {
      current: "SFO",
      destination: "JFK",
      time: "5h 20m",
      active: "14",
    },
    {
      current: "SFO",
      destination: "LAX",
      time: "1h 30m",
      active: "22",
    },
    {
      current: "SFO",
      destination: "LHR",
      time: "10h 45m",
      active: "8",
    },
  ];

  return (
    <section className="bg-inverse-surface px-6 py-16 w-full">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-outline-variant uppercase">
            NETWORK
          </p>
          <h2 className="font-bold text-2xl md:text-3xl text-inverse-on-surface mt-1">
            Popular Routes
          </h2>
        </div>

        {/* Routes Container */}
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-4">
          {routesInfo.map((route) => (
            <div
              key={route.destination}
              className="w-full md:w-auto flex flex-col items-center text-inverse-on-surface"
            >
              {/* TOP ROW: SFO - Plane - JFK */}
              <div className="flex items-center justify-between w-full gap-3">
                <span className="font-mono text-lg font-medium">{route.current}</span>

                {/* AIRPLANE & LINES CONTAINER */}
                <div className="flex items-center w-32 md:w-40 mx-2 gap-2 opacity-80">
                  <div className="h-0.5 bg-primary flex-1"></div>
                  
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
                  </svg>

                  <div className="h-0.5 bg-primary flex-1"></div>
                </div>

                <span className="font-mono text-lg font-medium">{route.destination}</span>
              </div>

              {/* BOTTOM ROW: Time and Badge */}
              <div className="flex items-center justify-between w-full mt-2 text-xs text-outline-variant">
                <span>{route.time}</span>

                <span className="whitespace-nowrap rounded-(--radius-pill) bg-primary/20 border border-primary/30 px-3 py-1 font-mono font-bold text-[10px] uppercase tracking-wider text-inverse-primary">
                  {route.active} Active Flights
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
