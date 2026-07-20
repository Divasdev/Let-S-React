/* ─────────────────────────────────────────────────────────────
   AirportInfoCard
   Two-panel card: left = airport data, right = map placeholder
   ───────────────────────────────────────────────────────────── */

const AIRPORT_DATA = {
  code: "SFO",
  icao: "KSFO",
  name: "San Francisco Int'l",
  elevation: "13 ft",
  runways: "4",
  timezone: "UTC-8",
  terminals: "4",
};

export function AirportInfoCard() {
  return (
    <section className="px-6 pb-12">
      <div
        className="
          max-w-5xl mx-auto
          rounded-[var(--radius-card)] overflow-hidden
          bg-white
          border border-outline-variant/40
          shadow-card
          grid grid-cols-1 md:grid-cols-[340px_1fr]
        "
      >
        {/* ── LEFT PANEL: Airport Information ── */}
        <div className="p-6 flex flex-col gap-1">

          {/* Status Badges */}
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <OperationalBadge />
            <span
              className="
                inline-block px-3 py-1
                rounded-[var(--radius-pill)]
                bg-surface-container text-on-surface-variant
                text-[11px] font-mono font-bold uppercase tracking-[0.1em]
              "
            >
              {AIRPORT_DATA.code} / {AIRPORT_DATA.icao}
            </span>
          </div>

          {/* Airport Name */}
          <h2 className="text-2xl font-bold tracking-tight text-charcoal leading-snug">
            {AIRPORT_DATA.name}
          </h2>

          {/* Data Grid */}
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5">
            <DataField label="ELEVATION" value={AIRPORT_DATA.elevation} />
            <DataField label="RUNWAYS"   value={AIRPORT_DATA.runways} />
            <DataField label="TIMEZONE"  value={AIRPORT_DATA.timezone} />
            <DataField label="TERMINALS" value={AIRPORT_DATA.terminals} />
          </div>
        </div>

        {/* ── RIGHT PANEL: Map Placeholder ── */}
        <div className="p-3">
          <div
            className="
              relative h-full min-h-[280px] w-full
              rounded-[calc(var(--radius-card)-4px)]
              bg-[#0f172a] overflow-hidden
              flex items-center justify-center
            "
          >
            {/* Fake runway lines for visual interest */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-[20%] w-[60%] h-[2px] bg-white -rotate-12" />
              <div className="absolute top-[40%] left-[30%] w-[40%] h-[2px] bg-white rotate-6" />
            </div>

            {/* Live Feed badge */}
            <div
              className="
                absolute top-4 right-4
                flex items-center gap-1.5
                px-3 py-1 rounded-[var(--radius-pill)]
                bg-white/10 backdrop-blur-sm
                border border-white/10
              "
            >
              <span className="size-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.1em] text-white/70">
                Live Feed
              </span>
            </div>

            {/* Center content */}
            <div className="text-center z-10">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-white/30">
                {AIRPORT_DATA.icao} / TOWER
              </span>

              {/* Plane icon */}
              <div className="mt-3 flex justify-center">
                <svg
                  width="28" height="28" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="text-primary/60"
                >
                  <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
                </svg>
              </div>

              <p className="mt-4 text-xs text-white/20 font-medium">
                Satellite view coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ────────────────────────────────────────── */

function OperationalBadge() {
  return (
    <span
      className="
        inline-flex items-center gap-1.5
        px-3 py-1
        rounded-[var(--radius-pill)]
        bg-success/10
        border border-success/20
        text-[11px] font-mono font-bold uppercase tracking-[0.1em]
        text-success
      "
    >
      <span className="size-1.5 rounded-full bg-success animate-pulse" />
      Operational
    </span>
  );
}

function DataField({ label, value }) {
  return (
    <div>
      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-outline">
        {label}
      </p>
      <p className="mt-0.5 text-lg font-bold text-charcoal tracking-tight">
        {value}
      </p>
    </div>
  );
}
