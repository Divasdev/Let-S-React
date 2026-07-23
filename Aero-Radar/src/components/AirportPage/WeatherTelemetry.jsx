export function WeatherTelemetry() {
  return (
    <section className="px-6 py-6 w-full">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-outline-variant uppercase mb-4">
          WEATHER / AVIATION TELEMETRY
        </p>

        {/* Main Card */}
        <div className="rounded-[var(--radius-card)] border border-outline-variant/30 bg-white overflow-hidden shadow-sm">
          
          {/* Top Grid - Formatted Data */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8">
            
            {/* Conditions */}
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[0.12em] text-outline uppercase mb-1">
                CONDITIONS
              </p>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
                </svg>
                <span className="font-mono text-lg font-bold text-primary tracking-tight uppercase">
                  WINDY
                </span>
              </div>
            </div>

            {/* Temp */}
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[0.12em] text-outline uppercase mb-1">
                TEMP
              </p>
              <p className="font-mono text-lg font-bold text-charcoal tracking-tight">
                18°C
              </p>
            </div>

            {/* Visibility */}
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[0.12em] text-outline uppercase mb-1">
                VISIBILITY
              </p>
              <p className="font-mono text-lg font-bold text-charcoal tracking-tight">
                10 SM
              </p>
            </div>

            {/* Altimeter */}
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[0.12em] text-outline uppercase mb-1">
                ALTIMETER
              </p>
              <p className="font-mono text-lg font-bold text-charcoal tracking-tight">
                29.92 inHg
              </p>
            </div>
          </div>

          {/* Bottom Banner - Raw METAR */}
          <div className="bg-surface-container px-6 py-4 md:px-8">
            <p className="font-mono text-[10px] font-bold tracking-[0.12em] text-outline uppercase mb-2">
              RAW METAR
            </p>
            <p className="font-mono text-sm font-semibold text-charcoal tracking-wider">
              KSFO 112056Z 28015G22KT 10SM FEW030 18/11 A2992 RMK AO2
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
